import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const ADMIN_HEADER = 'x-review-admin-secret'

function isAdmin(request: Request) {
  const secret = request.headers.get(ADMIN_HEADER)
  return secret && secret === process.env.REVIEW_ADMIN_SECRET
}

export async function GET(request: Request) {
  try {
    if (!isAdmin(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(reviews)
  } catch (error) {
    console.error('GET /api/reviews/admin error:', error)
    return NextResponse.json({ error: 'Unable to load admin reviews' }, { status: 500 })
  }
}
