import { useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState({
    pickup: "",
    destination: "",
    deliveryType: "Food",
    packageSize: "Small",
    schedule: "Now",
    notes: "",
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const calculatePrice = () => {
    let price = 15;

    if (booking.packageSize === "Medium") price += 10;
    if (booking.packageSize === "Large") price += 20;

    return price;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Booking:", booking);

    alert("Booking submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-4xl font-bold mb-8">
          Book a Rider
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="font-semibold">
              Pickup Location
            </label>

            <input
              type="text"
              name="pickup"
              value={booking.pickup}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Enter pickup location"
            />
          </div>

          <div>
            <label className="font-semibold">
              Destination
            </label>

            <input
              type="text"
              name="destination"
              value={booking.destination}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Enter destination"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label>Delivery Type</label>

              <select
                name="deliveryType"
                value={booking.deliveryType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option>Food</option>
                <option>Parcel</option>
                <option>Groceries</option>
                <option>Medicine</option>
              </select>

            </div>

            <div>

              <label>Package Size</label>

              <select
                name="packageSize"
                value={booking.packageSize}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-2"
              >
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>

            </div>

          </div>

          <div>

            <label>Delivery Time</label>

            <select
              name="schedule"
              value={booking.schedule}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 mt-2"
            >
              <option>Now</option>
              <option>Schedule Later</option>
            </select>

          </div>

          <div>

            <label>Special Instructions</label>

            <textarea
              name="notes"
              value={booking.notes}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-3 mt-2"
              placeholder="Leave any special instructions..."
            />

          </div>

          <div className="bg-green-50 p-5 rounded-xl">

            <h2 className="text-2xl font-bold text-green-700">
              Estimated Price
            </h2>

            <p className="text-4xl font-bold mt-2">
              GH₵ {calculatePrice()}
            </p>

          </div>

          <button
            className="w-full bg-green-600 text-white py-4 rounded-xl hover:bg-green-700"
          >
            Continue
          </button>

        </form>

      </div>
    </section>
  );
};

export default Booking;