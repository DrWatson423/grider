const RiderCard = ({ rider }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition">

      <img
        src={rider.image}
        alt={rider.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold">
          {rider.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {rider.location}
        </p>

        <p className="mt-2">
          {rider.ride}
        </p>

        <p>
          {rider.deliveryType}
        </p>

        <p className="mt-2 text-green-600 font-semibold">
          ⭐ {rider.rating}
        </p>

        <p className="text-gray-500">
          {rider.deliveries} Deliveries
        </p>

        <button
          className={`w-full mt-5 py-3 rounded-lg text-white ${
            rider.available
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          {rider.available ? "Hire Rider" : "Unavailable"}
        </button>

      </div>
    </div>
  );
};

export default RiderCard;