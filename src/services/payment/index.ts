const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const createPaymentIntent = async (
  bookingId: string,
  amount: number
) => {
  const res = await fetch(
    `${API_URL}/payments/create-intent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        bookingId,
        amount,
        currency: "usd",
      }),
    }
  );

  return res.json();
};

export const confirmPayment = async (
  bookingId: string,
  transactionId: string
) => {
  const res = await fetch(
    `${API_URL}/payments/confirm`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        bookingId,
        transactionId,
      }),
    }
  );

  return res.json();
};