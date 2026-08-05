import { useParams } from "react-router-dom";
import riders from "../data/riders";
import { Link } from "react-router-dom";

const RiderProfile = () => {

  const { id } = useParams();

  const rider = riders.find(
    (r) => r.id === Number(id)
  );

  if (!rider) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Rider not found
      </h1>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <div className="grid lg:grid-cols-2 gap-12">

        <img
          src={rider.image}
          alt={rider.name}
          className="rounded-3xl shadow-xl"
        />

        <div>

          <h1 className="text-5xl font-bold">
            {rider.name}
          </h1>

          <p className="mt-4 text-xl">
            ⭐ {rider.rating}
          </p>

          <p className="mt-2">
            📍 {rider.location}
          </p>

          <p className="mt-2">
            🚴 {rider.ride}
          </p>

          <p className="mt-2">
            📦 {rider.deliveryType}
          </p>

          <p className="mt-2">
            🚚 {rider.deliveries} Deliveries Completed
          </p>

          <div className="mt-8">

            <span
              className={`px-4 py-2 rounded-full ${
                rider.available
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {rider.available
                ? "Available"
                : "Unavailable"}
            </span>

          </div>

          <p className="mt-10 text-gray-600 leading-8">
            Experienced delivery rider with years of
            experience delivering food, groceries,
            documents and parcels safely and on time.
          </p>

          <div className="flex gap-4 mt-10">

            <Link to={`/booking/${rider.id}`} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700">
              Hire Rider
            </Link>

            <button className="border border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50">
              Message Rider
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default RiderProfile;