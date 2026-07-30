import {Link} from "react-router-dom"


const Navbar = () =>{
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          RiderLink
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>

          <Link to="/riders" className="hover:text-green-600">
            Find Riders
          </Link>

          <Link to="/become-rider" className="hover:text-green-600">
            Become a Rider
          </Link>

          <Link to="/about" className="hover:text-green-600">
            About
          </Link>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-lg border border-green-600 text-green-600 hover:bg-green-50">
            Login
          </button>

          <button className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700">
            Register
          </button>
        </div>
      </div>
    </nav>
  )
  }


export default Navbar