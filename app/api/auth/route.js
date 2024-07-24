'use server'

import { NextResponse } from 'next/server.js'
import { URL } from 'url'
import { login, register } from './utils.js'

export async function POST(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  switch (query) {
    case 'LOGIN':
      return login(req)
    case 'REGISTER':
      return register(req)
    default:
      return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}
