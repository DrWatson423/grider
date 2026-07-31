import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RiderCard from "../components/RiderCard";
import riders from "../data/riders";

const Home = () => {
  const [filteredRiders, setFilteredRiders] = useState(riders);

  return (
    <>
      <Navbar />

      <Hero setFilteredRiders={setFilteredRiders} />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">
          Available Riders
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRiders.map((rider) => (
            <RiderCard key={rider.id} rider={rider} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;