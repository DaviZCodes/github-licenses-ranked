const StrictnessRatingScale = () => {
  const ratings = Array.from({ length: 14 }, (_, index) => 14 - index);

  return (
    <div className="flex">
      <div className="text-gray-600 font-bold mt-1 pr-2">Least Strict</div>
      {ratings.map((rating) => (
        <div
          key={rating}
          className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center text-gray-600"
        >
          {rating}
        </div>
      ))}
      <div className="text-gray-600 font-bold mt-1">Most Strict</div>
    </div>
  );
};

export default StrictnessRatingScale;
