import {useState} from "react";
import riders from "../data/riders";




const Hero = ({setFilteredRiders}) => {
  const [location, setLocation] = useState("");
  const [ride, setRide] = useState("Motorcycle");
  const [deliveryType, setDeliveryType] = useState("Food");
  const [loading, setLoading] = useState(false);


  const handleSearch = () =>{
    console.log("search clicked")

      setLoading(true);

   
    const results = riders.filter((rider) => {
  console.log(rider);

  console.log("Location match:", rider.location.toLowerCase().includes(location.toLowerCase()));
  console.log("Ride match:", rider.ride === ride);
  console.log("Delivery match:", rider.deliveryType === deliveryType);

  return (
    rider.location.toLowerCase().includes(location.toLowerCase()) &&
    rider.ride === ride &&
    rider.deliveryType === deliveryType
  );
});
    console.log(results);
    setFilteredRiders(results);;
 
 
     setLoading(true);

     setTimeout(() => {
      setLoading(false);

      // alert(
      //   `Searching for ${ride} riders delivering ${deliveryType} in ${location}`
      // );
    }, 1500);
  
  }

  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          
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
              value={location}
              onChange={(e)=> setLocation(e.target.value)}
              className="flex-1 px-5 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-green-500"
            />

            <select
                value={ride}
                onChange={(e) => setRide(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option>Motorcycle</option>
                <option>Bike</option>
                <option>Car</option>
              </select>

              <select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="border rounded-lg p-3"
              >
                <option>Food</option>
                <option>Parcel</option>
                <option>Groceries</option>
              </select>



           
          </div>

           <button
              onClick={handleSearch}
              className="mt-5 w-full bg-green-600 hover:bg-green-700 transition text-white rounded-lg py-4 font-semibold"
            >
              {loading ? "Searching..." : "Find Rider"}
            </button>
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
 
}

export default Hero;