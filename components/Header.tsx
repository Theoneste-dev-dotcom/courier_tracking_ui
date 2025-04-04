import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 z-10 w-full xl:px-40 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-300"
          >
            <li className="text-base-content">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-base-content">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="text-base-content">
              <Link href="/about">About Us</Link>
            </li>
            <li className="text-base-content">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl text-base-content">
          SwiftRoute
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-base-content">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-base-content">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="text-base-content">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-base-content">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary text-white">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Header;