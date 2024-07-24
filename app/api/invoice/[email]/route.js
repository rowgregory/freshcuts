import { NextResponse } from 'next/server'
import { URL } from 'url'
import prisma from '../../../../prisma/client.ts'

export async function GET(req, { params }) {
  const { email } = params
  const url = new URL(req.url)
  const query = url.searchParams.get('endpoint')

  if (query === 'GET_MY_INVOICES') {
    try {
      const invoices = await prisma.invoice.findMany({
        where: { email: email }
      })

      return NextResponse.json({ invoices }, { status: 200 })
    } catch (err) {
      return NextResponse.json(
        {
          message: 'Error fetching my invoices',
          error: err.message
        },
        { status: 500 }
      )
    }
  }
}
