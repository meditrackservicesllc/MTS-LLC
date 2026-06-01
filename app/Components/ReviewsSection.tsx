"use client";

import React, { useState, useEffect } from 'react';
import { Star, Quote, Loader2, PlusCircle } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  practice: string;
  location: string;
  rating: number;
  reviewText: string;
  createdAt: string;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    practice: '',
    location: '',
    rating: 0,
    reviewText: '',
  });
  const [hoverRating, setHoverRating] = useState(0);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      setReviews(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.rating === 0) return setStatus({ type: 'error', message: 'Please select a rating.' });
    if (formData.reviewText.length < 20) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: 'success', message: '✅ Thank you! Your review has been submitted and is pending approval.' });
        setFormData({ name: '', role: '', practice: '', location: '', rating: 0, reviewText: '' });
        setShowForm(false);
        fetchReviews();
      } else {
        const err = await res.json();
        setStatus({ type: 'error', message: err.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to connect to server.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInitials = (name: string) => {
    if (!name) return '??';
    return name.trim().split(/\s+/)
      .map(n => n[0])
      .join('').toUpperCase().slice(0, 2);
  };
  const formatDate = (dateStr: string) => new Date(dateStr).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section id="reviews" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-xs font-black text-[#1E3A8A] uppercase tracking-[0.2em]">Client Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A3151] mt-4">What Healthcare Practices Say About Us</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto italic">"Real results from real practices across the United States."</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-2xl h-64 animate-pulse shadow-sm border border-gray-100" />
            ))}
          </div>
        ) : reviews.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-2xl border border-dashed border-gray-300">
            <p className="text-slate-500 font-medium">Be the first to share your experience with MTS LLC!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div key={rev.id} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col hover:shadow-lg transition-shadow" data-aos="zoom-in">
                <Quote className="text-teal-400 opacity-20 w-10 h-10 -ml-2 -mt-2" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < rev.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                  ))}
                </div>
                <p className="text-gray-700 italic flex-grow leading-relaxed mb-6">"{rev.reviewText}"</p>
                <div className="flex items-center gap-4 border-t border-gray-50 pt-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {getInitials(rev.name)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[#1A3151] text-sm truncate">{rev.name}</h4>
                    <p className="text-[11px] text-slate-500 truncate">{rev.role} @ {rev.practice}</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">{rev.location} • {formatDate(rev.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 bg-[#1E3A8A] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[#172554] transition-all transform hover:-translate-y-1"
            >
              <PlusCircle size={20} /> Share Your Experience
            </button>
          )}

          {status?.type === 'success' && (
            <div className="max-w-xl mx-auto bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 text-sm font-medium mb-6 animate-in fade-in zoom-in">
              {status.message}
            </div>
          )}

          {showForm && (
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 text-left animate-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-[#1A3151] mb-6">Submit Your Practice Review</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text" required placeholder="Full Name*"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="text" required placeholder="Role / Title* (e.g. Practice Manager)"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text" required placeholder="Practice Name*"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    value={formData.practice} onChange={e => setFormData({...formData, practice: e.target.value})}
                  />
                  <input
                    type="text" required placeholder="Location* (e.g. Dallas, TX)"
                    className="w-full bg-gray-50 border-gray-100 rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]/20"
                    value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
                
                <div className="py-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Your Rating*</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star} type="button"
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setFormData({...formData, rating: star})}
                        className="transition-transform active:scale-90"
                      >
                        <Star
                          size={28}
                          className={`transition-colors ${
                            star <= (hoverRating || formData.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    required placeholder="Your Review* (Min 20 characters)"
                    rows={4}
                    className="w-full bg-gray-50 border-gray-100 rounded-xl p-4 text-sm outline-none focus:ring-2 focus:ring-[#1E3A8A]/20 resize-none"
                    value={formData.reviewText}
                    onChange={e => setFormData({...formData, reviewText: e.target.value})}
                  />
                  <span className={`absolute bottom-3 right-3 text-[10px] font-bold ${formData.reviewText.length < 20 ? 'text-red-400' : 'text-slate-400'}`}>
                    {formData.reviewText.length} characters
                  </span>
                </div>

                {status?.type === 'error' && (
                  <p className="text-red-500 text-xs font-bold">{status.message}</p>
                )}

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit" disabled={isSubmitting || formData.reviewText.length < 20}
                    className="flex-grow bg-[#1E3A8A] text-white p-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#172554] disabled:bg-slate-300 transition-all shadow-lg"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" /> : "Submit Review"}
                  </button>
                  <button
                    type="button" onClick={() => setShowForm(false)}
                    className="px-6 border border-gray-200 text-slate-500 font-bold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}