const ReviewCard = ({ review }: any) => {
  return (
    <div className="border p-4 rounded mb-3">
      <div className="flex items-center gap-2">
        <img
          src={review.student.avatar}
          className="w-8 h-8 rounded-full"
        />
        <p>{review.student.name}</p>
      </div>

      <p>⭐ {review.rating}</p>
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;