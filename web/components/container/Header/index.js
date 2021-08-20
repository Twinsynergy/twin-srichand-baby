/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { Dropdown, Navbar } from "../../commons";

function Header() {
  return (
    <nav className="bg-white shadow sticky top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* px-4 sm:px-6 lg:px-8 */}
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-grow md:flex-grow-0 items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="block">
                  <span className="logo">
                    <img src="/assets/image/logobaby.webp" alt="srichand-baby" />
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="flex md:hidden items-center">
            {/* Mobile menu button */}
            <Dropdown className="" isUser={false}>
              <BiMenu className="text-2xl text-black" />
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
