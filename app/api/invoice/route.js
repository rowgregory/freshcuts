import { NextResponse } from 'next/server'
import { URL } from 'url'
import { createInvoice, getCustomers, getInvoices } from './utils.js'

export async function GET(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  switch (query) {
    case 'GET_INVOICES':
      return getInvoices()
    case 'GET_CUSTOMERS':
      return getCustomers()
    default:
      return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}

export async function POST(req) {
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  switch (query) {
    case 'CREATE_INVOICE':
      return createInvoice(req)
    default:
      return NextResponse.json({ message: 'Invalid endpoint' }, { status: 400 })
  }
}
