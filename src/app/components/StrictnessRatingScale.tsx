const StrictnessRatingScale = () => {
  const ratings = Array.from({ length: 14 }, (_, index) => 14 - index);

  return (
    <div className="flex pt-2">
      <div className="text-gray-600 font-bold mt-1 pr-2">Least Strict</div>
      {ratings.map((rating) => {
        let backGroundColor;
        let hoverBackGroundColor;

        if (rating <= 6) {
          backGroundColor = "bg-red-300";
          hoverBackGroundColor = "bg-red-400";
        } else if (rating >= 7 && rating <= 9) {
          backGroundColor = "bg-orange-300";
          hoverBackGroundColor = "bg-orange-400";
        } else {
          backGroundColor = "bg-green-300";
          hoverBackGroundColor = "bg-green-400";
        }

        return (
          <div
            key={rating}
            className={`w-8 h-8 rounded-full ${backGroundColor} hover:${hoverBackGroundColor} mr-2 flex items-center justify-center text-gray-600`}
          >
            {rating}
          </div>
        );
      })}
      <div className="text-gray-600 font-bold mt-1">Most Strict</div>
    </div>
  );
};

export default StrictnessRatingScale;
