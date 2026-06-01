import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const ADMIN_HEADER = 'x-review-admin-secret'

function isAdmin(request: Request) {
  const secret = request.headers.get(ADMIN_HEADER)
  return secret && secret === process.env.REVIEW_ADMIN_SECRET
}

// DELETE handler removed — delete functionality disabled per request

export async function PATCH(request: Request, context: any) {
  try {
    if (!isAdmin(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { approved } = body

    if (typeof approved !== 'boolean') {
      return NextResponse.json(
        { error: 'approved must be a boolean' },
        { status: 400 }
      )
    }

    const review = await prisma.review.update({
      where: { id: context.params.id },
      data: { approved },
    })

    return NextResponse.json(review)
  } catch (error) {
    console.error(`PATCH /api/reviews/${context?.params?.id ?? 'unknown'} error:`, error)
    return NextResponse.json({ error: 'Unable to update review' }, { status: 500 })
  }
}
