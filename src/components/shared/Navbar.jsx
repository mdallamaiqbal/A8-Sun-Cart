import Link from "next/link";
import NavLink from "./NavLink";


const Navbar = () => {
  
  return (
    <nav className="bg-cyan-50/30 shadow-sm">
      <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="flex flex-col gap-3 dropdown-content bg-cyan-50 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink href={"/"}>Home</NavLink></li>
            <li><NavLink href={"/products"}>Products</NavLink></li>
            <li><NavLink href={"/myProfile"}>MyProfile</NavLink></li>
          </ul>
        </div>
        <Link className="text-3xl font-bold text-[#F09633]" href={"/"}>Sun<span className="text-[#34B0BD]">Cart</span></Link>
      </div>
      <div className="navbar-center hidden sm:flex">
        <ul className="flex gap-5 items-center px-1">
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/products"}>Products</NavLink></li>
          <li><NavLink href={"/myProfile"}>MyProfile</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn border-2 border-[#00ACC1] text-[#00ACC1] hover:bg-[#00ACC1] hover:text-white rounded-full px-4 py-2 font-semibold transition-all shadow-md">
          Login
        </a>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;