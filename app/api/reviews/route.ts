import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(reviews)
  } catch (error) {
    console.error('GET /api/reviews error:', error)
    return NextResponse.json({ error: 'Unable to load reviews' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, reviewText, rating } = body

    if (!name || !reviewText || typeof rating === 'undefined') {
      return NextResponse.json(
        { error: 'Missing required review fields.' },
        { status: 400 }
      )
    }

    if (typeof reviewText !== 'string' || reviewText.trim().length < 20) {
      return NextResponse.json(
        { error: 'Review text must be at least 20 characters.' },
        { status: 400 }
      )
    }

    const numericRating = Number(rating)
    if (!Number.isInteger(numericRating) || numericRating < 1 || numericRating > 5) {
      return NextResponse.json({ error: 'Rating must be an integer between 1 and 5.' }, { status: 400 })
    }

    const review = await prisma.review.create({
      data: {
        name: String(name),
        role: '',
        practice: '',
        location: '',
        rating: numericRating,
        reviewText: String(reviewText),
        approved: true,
      },
    })

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    console.error('POST /api/reviews error:', error)
    return NextResponse.json({ error: 'Unable to submit review' }, { status: 500 })
  }
}
