import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="ml-10 flex items-center space-x-6">
      <Link href="/about-us">
        <a
          className={`text-primary inline-block whitespace-nowrap text-xl lg:text-2xl border-b-4 ${
            router.pathname === "/about-us" ? "border-primary" : "border-white"
          }`}>
          About Us
        </a>
      </Link>
      <Link href="/products">
        <a
          className={`text-primary inline-block whitespace-nowrap text-xl lg:text-2xl border-b-4 ${
            router.pathname === "/products" ||
            router.pathname === "/products/asc" ||
            router.pathname === "/products/desc"
              ? "border-primary"
              : "border-white"
          }`}>
          Products
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`text-primary inline-block whitespace-nowrap text-xl lg:text-2xl border-b-4 ${
            router.pathname === "/blog" ||
            router.pathname === "/blog/asc" ||
            router.pathname === "/blog/desc"
              ? "border-primary"
              : "border-white"
          }`}>
          Blog
        </a>
      </Link>
      <Link href="/where-to-buy">
        <a
          className={`text-primary inline-block whitespace-nowrap text-xl lg:text-2xl border-b-4 ${
            router.pathname === "/where-to-buy" ? "border-primary" : "border-white"
          }`}>
          Where to Buy
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
