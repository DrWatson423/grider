import { Link, useLocation } from "react-router-dom";

const BookingSummary = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No booking information found.
        </h1>
      </div>
    );
  }

  const { booking, rider } = state;

  return (
    <section className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Booking Summary
        </h1>

        <div className="space-y-5">

          <div className="flex justify-between">
            <span>Rider</span>
            <strong>{rider.name}</strong>
          </div>

          <div className="flex justify-between">
            <span>Pickup</span>
            <strong>{booking.pickup}</strong>
          </div>

          <div className="flex justify-between">
            <span>Destination</span>
            <strong>{booking.destination}</strong>
          </div>

          <div className="flex justify-between">
            <span>Delivery</span>
            <strong>{booking.deliveryType}</strong>
          </div>

          <div className="flex justify-between">
            <span>Package</span>
            <strong>{booking.packageSize}</strong>
          </div>

          <div className="flex justify-between">
            <span>Schedule</span>
            <strong>{booking.schedule}</strong>
          </div>

        </div>

        <Link
          to="/booking-success"
          state={{ booking, rider }}
          className="block mt-10 bg-green-600 text-white text-center py-4 rounded-xl hover:bg-green-700"
        >
          Confirm Booking
        </Link>

      </div>
    </section>
  );
};

export default BookingSummary;