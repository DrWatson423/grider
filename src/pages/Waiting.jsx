import { useEffect, useState } from "react";

const Waiting = () => {
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <div className="text-6xl">
          🚴
        </div>

        <h1 className="text-4xl font-bold mt-5">
          Waiting for Rider
        </h1>

        <p className="mt-5 text-gray-600">
          Looking for the best rider near you...
        </p>

        <div className="mt-10">

          <div className="w-20 h-20 rounded-full border-8 border-green-500 border-t-transparent animate-spin mx-auto"></div>

        </div>

        <p className="mt-8 text-2xl font-bold">
          {seconds}s
        </p>

        {seconds === 0 && (
          <div className="mt-8 bg-green-100 rounded-xl p-5">

            <h2 className="text-2xl font-bold text-green-700">
              🎉 Rider Accepted!
            </h2>

            <p className="mt-3">
              Kwame Mensah accepted your booking.
            </p>

          </div>
        )}

      </div>

    </section>
  );
};

export default Waiting;