


// "use client";

// import { createReview } from "@/services/review";
// import { useState } from "react";


// const ReviewForm = ({ bookingId }: { bookingId: string }) => {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");

//   const handleSubmit = async () => {
//     await createReview({
//       bookingId,
//       rating,
//       comment,
//     });

//     alert("Review submitted!");
//   };

//   return (
//     <div className="border p-4 rounded">
//       <h3>Give Review</h3>

//       <input
//         type="number"
//         min="1"
//         max="5"
//         value={rating}
//         onChange={(e) => setRating(Number(e.target.value))}
//       />

//       <textarea
//         placeholder="Write comment..."
//         onChange={(e) => setComment(e.target.value)}
//       />

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default ReviewForm;






// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner"; // অথবা আপনার প্রিয় কোনো নোটিফিকেশন লাইব্রেরি
// import { submitReview } from "@/services/review-index";

// export default function ReviewForm({ bookingId }: { bookingId: string }) {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const payload = {
//         bookingId,
//         rating: Number(rating),
//         review: comment, // আপনার ব্যাকএন্ড অনুযায়ী
//         comment: comment,
//       };

//       const res = await submitReview(payload);

//       if (res.success) {
//         toast.success("রিভিউটি সফলভাবে সেভ হয়েছে!");
//         setComment("");
//         router.refresh(); // ডেটা রিফ্রেশ করার জন্য
//       } else {
//         toast.error(res.message || "রিভিউ দেওয়া সম্ভব হয়নি।");
//       }
//     } catch (error: any) {
//       toast.error(error.message || "সার্ভারে সমস্যা হয়েছে।");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-lg">
//       <h3 className="text-lg font-bold text-gray-800 mb-4">আপনার অভিজ্ঞতা শেয়ার করুন</h3>
      
//       <form onSubmit={handleSubmit} className="space-y-5">
//         {/* Rating Selection */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">রেটিং দিন</label>
//           <div className="flex gap-2">
//             {[1, 2, 3, 4, 5].map((num) => (
//               <button
//                 key={num}
//                 type="button"
//                 onClick={() => setRating(num)}
//                 className={`text-2xl transition-all ${
//                   num <= rating ? "text-yellow-400 scale-110" : "text-gray-300"
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//             <span className="ml-2 text-gray-600 font-semibold">{rating}/5</span>
//           </div>
//         </div>

//         {/* Comment Box */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">মন্তব্য (Comment)</label>
//           <textarea
//             required
//             rows={4}
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="টিউটর কেমন শিখিয়েছেন? আপনার অভিজ্ঞতা লিখুন..."
//             className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading}
//           className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all ${
//             loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-95"
//           }`}
//         >
//           {loading ? "প্রসেসিং..." : "রিভিউ সাবমিট করুন"}
//         </button>
//       </form>
//     </div>
//   );
// }





"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import { submitReview } from "@/services/review";
// import StarRating from "@/components/StarRating";


// export default function ReviewForm({ bookingId }: { bookingId: string }) {
//   const [rating, setRating] = useState(5);
//   const [comment, setComment] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!comment.trim()) {
//       return toast.error("Comment required");
//     }

//     setLoading(true);

//     try {
//       const payload = {
//         bookingId,
//         rating: Number(rating),
//         comment, // ✅ FIXED (remove duplicate review field)
//       };

//       const res = await submitReview(payload);

//       if (res.success) {
//         toast.success("রিভিউ সফলভাবে দেওয়া হয়েছে 🎉");
//         setComment("");
//         router.refresh();
//       } else {
//         toast.error(res.message || "রিভিউ দেওয়া সম্ভব হয়নি");
//       }
//     } catch (error: any) {
//       toast.error(error.message || "সার্ভার সমস্যা");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md border max-w-lg">
//       <h3 className="text-lg font-bold mb-4">আপনার অভিজ্ঞতা শেয়ার করুন</h3>

//       <form onSubmit={handleSubmit} className="space-y-5">

//         {/* Rating */}
//         <div>
//           <div className="flex gap-2">
//             {[1, 2, 3, 4, 5].map((num) => (
//               <button
//                 key={num}
//                 type="button"
//                 onClick={() => setRating(num)}
//                 className={`text-2xl ${
//                   num <= rating ? "text-yellow-400" : "text-gray-300"
//                 }`}
//               >
//                 ★
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Comment */}
//         <textarea
//           rows={4}
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="w-full border p-3 rounded"
//           placeholder="Write comment..."
//         />

//         {/* Submit */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-600 text-white py-2 rounded"
//         >
//           {loading ? "Submitting..." : "Submit Review"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { submitReview } from "@/services/review";
import StarRating from "./StarRating";

export default function ReviewForm({ bookingId }: { bookingId: string }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // validation
    if (!comment.trim()) {
      toast.error("Comment is required");
      return;
    }

    if (rating < 1) {
      toast.error("Please give a rating");
      return;
    }

    setLoading(true);

    try {
      const res = await submitReview({
        bookingId,
        rating,
        comment,
      });

      if (res?.success) {
        toast.success("Review submitted successfully 🎉");

        setComment("");
        setRating(5);

        router.refresh();
      } else {
        toast.error(res?.message || "Failed to submit review");
      }
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md border max-w-lg space-y-5"
    >
      <h3 className="text-lg font-bold text-gray-800">
        Give Your Review
      </h3>

      {/* ⭐ STAR RATING (MAIN PART) */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Rating
        </label>

        <StarRating value={rating} onChange={setRating} />

        <p className="text-sm text-gray-500 mt-1">
          Selected: {rating} / 5
        </p>
      </div>

      {/* 💬 COMMENT */}
      <div>
        <label className="block text-sm mb-2 text-gray-600">
          Comment
        </label>

        <textarea
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your experience..."
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 🚀 SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded text-white font-semibold transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
} 