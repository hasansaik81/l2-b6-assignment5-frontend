"use client";

import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { paymentServices } from "@/services/payment"; // আপনার সার্ভিস পাথ

interface CheckoutFormProps {
  bookingId: string;
  amount: number;
}


// ১. এখানে প্রপসের টাইপ ডিফাইন করুন
interface CheckoutFormProps {
  clientSecret: string;
}


export default function CheckoutForm({ bookingId, amount }: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // ১. পেমেন্ট কনফার্ম করা
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard/bookings/success`,
      },
      redirect: "if_required", // সরাসরি হ্যান্ডেল করার জন্য
    });

    if (error) {
      toast.error(error.message || "Something went wrong");
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // ২. পেমেন্ট সফল হলে আমাদের ডাটাবেজে কনফার্ম করা (Server Action কল)
      try {
        await paymentServices.confirmPaymentInDB(bookingId, paymentIntent.id);
        toast.success("Payment successful and recorded!");
        router.push("/dashboard/student/bookings"); // সফলতার পর রিডাইরেক্ট
        router.refresh();
      } catch (dbError: any) {
        toast.error("Payment successful, but failed to update database.");
        console.error(dbError);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <PaymentElement />
      </div>
      
      <button
        disabled={isProcessing || !stripe || !elements}
        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
      >
        {isProcessing ? "Processing..." : `Pay $${amount}`}
      </button>
    </form>
  );
}