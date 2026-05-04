



// // src/services/payment/index.ts
// "use server";

// import { cookies } from "next/headers";

// export const paymentServices = {
//   /**
//    * ব্যাকএন্ড থেকে পেমেন্ট ইন্টেন্ট এবং ক্লায়েন্ট সিক্রেট নিয়ে আসা (Server Action)
//    */
//   createPaymentIntent: async (bookingId: string) => {
//     try {
//       const cookieStore = await cookies();
//       const token = cookieStore.get("token")?.value;

//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/create-intent`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`, // কুকি থেকে টোকেন সেট করা হলো
//         },
//         body: JSON.stringify({ bookingId }),
//         cache: 'no-store' // লেটেস্ট ডেটা নিশ্চিত করতে
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to create payment intent");
//       }

//       return result.data; // এটি clientSecret এবং amount রিটার্ন করবে
//     } catch (error) {
//       console.error("Payment Intent Error:", error);
//       throw error;
//     }
//   },

//   /**
//    * পেমেন্ট সফল হওয়ার পর ব্যাকএন্ডে কনফার্ম করা
//    */
//   confirmPaymentInDB: async (bookingId: string, transactionId: string) => {
//     const cookieStore = await cookies();
//     const token = cookieStore.get("token")?.value;

//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payments/confirm`, {
//       method: "POST",
//       headers: { 
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}` 
//       },
//       body: JSON.stringify({ bookingId, transactionId }),
//     });

//     const result = await response.json();
//     if (!response.ok) {
//       throw new Error(result.message || "Failed to confirm payment");
//     }

//     return result;
//   }
// };



"use server";

import { cookies } from "next/headers";

/**
 * বুকিং আইডির বিপরীতে পেমেন্ট ইনটেন্ট তৈরি করার সার্ভিস
 */
export const createPaymentIntent = async (bookingId: string) => {
  try {
    const store = await cookies();
    const token = store.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/payments/create-intent`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // নিশ্চিত করুন আপনার ব্যাকএন্ড 'Bearer' ফরম্যাট চায় কি না
        },
        body: JSON.stringify({ bookingId }),
        cache: "no-store",
      }
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result?.message || "পেমেন্ট ইনটেন্ট তৈরি করতে ব্যর্থ হয়েছে");[cite: 1]
    }

    // ব্যাকএন্ড ডাটা স্ট্রাকচার অনুযায়ী রিটার্ন করুন
    // সাধারণত ব্যাকএন্ড ডাটা অবজেক্টের ভেতরে clientSecret এবং amount পাঠায়
    return {
      clientSecret: result?.data?.clientSecret || result?.clientSecret,
      amount: result?.data?.amount || result?.amount,
    };[cite: 1]
  } catch (error: any) {
    console.error("Payment Service Error:", error.message);
    throw error;
  }
};