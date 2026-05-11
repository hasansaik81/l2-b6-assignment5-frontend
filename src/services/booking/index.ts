"use server"

import { cookies } from "next/headers";


export const createBooking= async (bookingData:any) => {
  try {
    const store= await cookies();
    const token =store.get("token")?.value
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token!,
        },
       body:JSON.stringify(bookingData)
      },
    );
    const result = await res.json();

    return result;
  } catch (error) {
    console.log(error);
  }
};





// ✅ Single Booking Fetch korar jonno Service
export const getSingleBooking = async (bookingId: string) => {
  try {
    const store = await cookies();
    const token = store.get("token")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/bookings/${bookingId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token || "", // Token thakle pathabe
        },
        cache: "no-store", // Data jeno caching na hoy, fresh data ashe
      }
    );

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error in getSingleBooking:", error);
    return {
      success: false,
      message: "Something went wrong while fetching booking data",
    };
  }
};


export const createCheckoutSession = async (bookingData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });
    return await res.json(); // এটি { id: 'cs_test_...' } রিটার্ন করবে
  } catch (error) {
    console.error(error);
  }
};



