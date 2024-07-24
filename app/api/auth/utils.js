import { NextResponse } from 'next/server'
import prisma from '../../../prisma/client'
import bcrypt from 'bcrypt'
import generateToken from '../../../utils/generateToken.ts'

export async function register(req) {
  const user = await req.json()

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: user.email }
    })

    if (existingUser)
      return NextResponse.json(
        { message: 'Invalid credentials', sliceName: 'authApi' },
        { status: 404 }
      )

    const hashedPassword = await bcrypt.hash(user.password, 10)

    const isAdmin = user.email.split('@')[1] === 'phlawncare.net'

    const createdUser = await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        isAdmin,
        isClient: isAdmin ? false : true
      }
    })

    const token = generateToken({ email: createdUser.email, isAdmin }, '1d')

    req.user = {
      id: createdUser.id,
      email: createdUser.email,
      token
    }

    return NextResponse.json(
      { accountWasCreated: true, token, isAdmin: createdUser.isAdmin },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json({
      message: err.message,
      name: err.name,
      sliceName: 'authApi'
    })
  }
}

export async function login(req) {
  const user = await req.json()

  try {
    const existingUser = await prisma.user.findFirst({
      where: { email: user.email }
    })

    if (!existingUser) {
      return NextResponse.json(
        { message: 'Invalid credentials', sliceName: 'authApi' },
        { status: 404 }
      )
    }

    const isPasswordValid = await bcrypt.compare(
      user.password,
      existingUser.password
    )

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: 'Invalid credentials', sliceName: 'authApi' },
        { status: 401 }
      )
    }

    const token = generateToken(
      {
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
        isClient: existingUser.isClient,
        id: existingUser.id
      },
      '1d'
    )

    req.user = {
      id: existingUser.id,
      email: existingUser.email,
      token,
      isAdmin: existingUser.isAdmin
    }

    return NextResponse.json(
      {
        isAuthenticated: true,
        token,
        isAdmin: existingUser.isAdmin,
        email: existingUser.email
      },
      { status: 200 }
    )
  } catch (err) {
    return NextResponse.json(
      {
        message: err.message,
        name: err.name
      },
      { status: 500 }
    )
  }
}
