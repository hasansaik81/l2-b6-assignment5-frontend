"use server";

import { cookies } from "next/headers";

export const createReview = async (reviewData: {
  bookingId: string;
  rating: number;
  comment: string;
}) => {
  try {
    const store = await cookies();
    const token = store.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
        body: JSON.stringify(reviewData),
        cache: "no-store", // important
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "Failed to create review");
    }

    return result;
  } catch (error: any) {
    console.error("Review Error:", error.message);
    throw error;
  }
};



// src/services/review.ts

export const getTutorReviews = async (tutorId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews/tutor/${tutorId}`, {
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return res.json();
};



export const submitReview = async (payload: any) => {
  const token = (await cookies()).get("token")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
  return res.json();
};



// "use server"
// import { cookies } from "next/headers";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// // টিউটরের সব রিভিউ পাওয়ার জন্য
// export const getTutorReviews = async (tutorId: string) => {
//   const res = await fetch(`${BASE_URL}/reviews/tutor/${tutorId}`, {
//     cache: 'no-store' // লেটেস্ট রিভিউ পাওয়ার জন্য
//   });
//   return res.json();
// };

// // স্টুডেন্টের নিজের দেওয়া রিভিউ দেখার জন্য (যদি ব্যাকএন্ডে এপিআই থাকে)
// export const getMyReviews = async () => {
//   const token = (await cookies()).get("token")?.value;
//   const res = await fetch(`${BASE_URL}/reviews/my-reviews`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return res.json();
// };