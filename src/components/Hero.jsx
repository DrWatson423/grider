const Hero = () => {
  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold underline bg-teal-600">
      Tailwind is Working!
      </h1>
          <h1 className="text-5xl font-bold leading-tight">
            Find Trusted
            <span className="text-green-600"> Delivery Riders </span>
            Near You
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Connect with verified delivery riders for food,
            parcels, groceries, and business deliveries.
          </p>

          {/* Search */}
          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your location..."
              className="flex-1 px-5 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />

            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
              Find Rider
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
            alt="Delivery Rider"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;