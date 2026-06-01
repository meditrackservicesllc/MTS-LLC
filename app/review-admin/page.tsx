'use client'

import { useState } from 'react'

type Review = {
  id: string
  name: string
  role: string
  practice: string
  location: string
  rating: number
  reviewText: string
  approved: boolean
  createdAt: string
}

export default function ReviewAdminPage() {
  const [secret, setSecret] = useState('')
  const [reviews, setReviews] = useState<Review[]>([])
  const [authorized, setAuthorized] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function loadAdminReviews() {
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/reviews/admin', {
        headers: {
          'x-review-admin-secret': secret,
        },
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data?.error || 'Unable to load admin reviews')
      }

      const data = await response.json()
      setReviews(data)
      setAuthorized(true)
    } catch (error) {
      setAuthorized(false)
      setMessage(error instanceof Error ? error.message : 'Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  // Delete functionality removed — admin can only view/approve via PATCH

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-slate-900">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Review Admin Panel</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-600">
          Only the owner should use this page to manage reviews. Enter the admin secret to view reviews.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-[320px,auto]">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Admin secret
            <input
              type="password"
              value={secret}
              onChange={(event) => setSecret(event.target.value)}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <button
            type="button"
            onClick={loadAdminReviews}
            disabled={loading || !secret.trim()}
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {loading ? 'Loading…' : 'Unlock Reviews'}
          </button>
        </div>

        {message ? (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            {message}
          </div>
        ) : null}
      </section>

      {authorized ? (
        <section className="mt-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold">Approved Reviews</h2>
            <button
              type="button"
              onClick={loadAdminReviews}
              disabled={loading}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Refresh
            </button>
          </div>
          <div className="grid gap-4">
            {reviews.length === 0 ? (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                No reviews found.
              </div>
            ) : (
              reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                      <p className="text-sm text-slate-500">{review.role} · {review.practice}</p>
                      <p className="text-sm text-slate-500">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="rounded-full bg-slate-100 px-3 py-1">Rating: {review.rating}/5</span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">Approved</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{review.reviewText}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                    <span>{new Date(review.createdAt).toLocaleString()}</span>
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      ) : null}
    </main>
  )
}
