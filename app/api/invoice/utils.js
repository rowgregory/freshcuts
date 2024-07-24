import { NextResponse } from 'next/server'
import prisma from '../../../prisma/client'

export async function getInvoices() {
  try {
    const invoices = await prisma.invoice.findMany()
    return NextResponse.json({ invoices }, { status: 200 })
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Error fetching invoices',
        error: err.message
      },
      { status: 500 }
    )
  }
}

export async function getCustomers() {
  try {
    const customers = await prisma.user.findMany({
      where: {
        NOT: {
          email: {
            endsWith: 'phlawncare.net'
          }
        }
      }
    })

    return NextResponse.json({ customers }, { status: 200 })
  } catch (err) {
    console.error('Error fetching invoice: ', err)

    return NextResponse.json(
      {
        message: 'Error fetching invoice',
        error: err.message
      },
      { status: 500 }
    )
  }
}

export async function createInvoice(req) {
  try {
    const invoice = await req.json()

    if (!invoice) {
      return NextResponse.json(
        { message: 'Error creating invoice' },
        { status: 400 }
      )
    }

    await prisma.invoice.create({
      data: invoice
    })

    return NextResponse.json(
      {
        message: 'Invoice created successfully'
      },
      { status: 201 }
    )
  } catch (err) {
    return NextResponse.json(
      { message: 'Error creating invoice: ', error: err.message },
      { status: 500 }
    )
  }
}
