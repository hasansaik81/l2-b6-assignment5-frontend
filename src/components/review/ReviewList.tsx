"use client";

import { useEffect, useState } from "react";
import { getTutorReviews } from "@/services/review";
import ReviewCard from "./ReviewCard";
// import ReviewCard from "./ReviewCard";

const ReviewList = ({ tutorId }: { tutorId: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    getTutorReviews(tutorId).then(setReviews);
  }, [tutorId]);

  return (
    <div>
      <h2>Reviews</h2>

      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default ReviewList;