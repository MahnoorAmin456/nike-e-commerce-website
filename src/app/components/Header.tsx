'use client'
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hidden lg:block">
        <div className="flex justify-between items-center px-10 bg-light-gray">
          <Image src={"/images/logo/favicon.svg"} alt="Top Logo"  width={30} height={30}/>

          <ul className="flex space-x-6 py-3">
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/Location" className="leading-[14px]">
                Find Link Store
              </Link>
            

            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/contact-us" className="leading-[14px]">
                Help
              </Link>
            </li>
            <li className="flex items-center border-r border-black pr-6">
              <Link href="/join-us" className="leading-[14px]">
                Join Us
              </Link>
            </li>
            <li className="flex items-center pr-6">
              <Link href="/login" className="leading-[14px]">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex px-10 justify-between items-center py-4">
          <Link href="/">
            <Image src={"/images/logo/logo.svg"}  width={30} height={30} alt ="logo" />
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/all-products">New & Featured</Link>
            </li>
            <li>
              <Link href="/all-products">Men</Link>
            </li>
            <li>
              <Link href="/all-products">Women</Link>
            </li>
            <li>
              <Link href="/all-products">Kids</Link>
            </li>
            <li>
              <Link href="/all-products">Sale</Link>
            </li>
            <li>
              <Link href="/all-products">SNKRS</Link>
            </li>
          </ul>
          <div className="flex space-x-6">
            <div className="flex px-4 py-3 rounded-full w-[64%] bg-light-gray">
              <Image src={"/images/icon/search.svg"} alt="search" width={30} height={30}/>
              <input
                className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray"
                type="text"
                placeholder="Search"
              />
            </div>
            <Image src={"/images/icon/wishlist.svg"} alt="wishlist" width={30} height={30} />
            <Image src={"/images/icons/cart.svg"} alt="cart" width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="lg:hidden px-10 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={"/images/logo/logo.svg"} alt="Logo" width={30} height={30}/>
        </Link>
        <div className="flex gap-6">
          <Image src={"/images/icons/wishlist.svg"} alt="wishlist" width={30} height={30}/>
          <Image src={"/images/icons/cart.svg"} alt="cart" width={30} height={30} />
          <Link href="#" onClick={toggleMenu}>
            <Image src={"/images/icons/menu.svg"} width={30} height={30} alt="Menu" />
          </Link>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className={`bg-white w-3/4 h-full p-6 transition-transform duration-300 ease-in-out transform  overflow-y-scroll ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <Image src={"/images/logo/logo.svg"} alt="Logo" />
            <Link href="#" onClick={toggleMenu}>
              <Image src={"/images/icons/cross.svg"} width={30} height={30} alt="Close" />
            </Link>
          </div>
          <div className="flex px-4 py-3 mt-6 rounded-full w-[96%] bg-light-gray">
            <Image src={"/images/icons/search.svg"} alt="search" width={30} height={30} />
            <input
              className="pl-4 focus-visible:outline-none w-[64%] bg-light-gray"
              type="text"
              placeholder="Search"
            />
          </div>
          <ul className="space-y-6 mt-6">
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                New & Featured
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Men
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Women
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Kids
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                Sale
              </Link>
            </li>
            <li>
              <Link href="/all-products" onClick={toggleMenu}>
                SNKRS
              </Link>
            </li>

            <li className="border-t-2 pt-6">
              <Link href="#" onClick={toggleMenu}>
                Find a Store
              </Link>
            </li>
            <li>
              <Link href="/contact-us" onClick={toggleMenu}>
                Help
              </Link>
            </li>
            <li>
              <Link href="/join-us" onClick={toggleMenu}>
                Join Us
              </Link>
            </li>
            <li>
              <Link href="/login" onClick={toggleMenu}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;