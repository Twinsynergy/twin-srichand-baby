import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="ml-10 flex items-center space-x-4">
      <Link href="/about-us">
        <a
          className={`inline-block whitespace-nowrap text-xl lg:text-2xl no-underline py-2 px-2 lg:px-4 hover:text-grey-lighter hover:text-underline ${
            router.pathname === "/about-us"
              ? "text-primary active font-semibold"
              : "text-grey-dark hover:text-primary"
          }`}>
          About Us
        </a>
      </Link>
      <Link href="/products">
        <a
          className={`inline-block whitespace-nowrap text-xl lg:text-2xl no-underline py-2 px-2 lg:px-4 hover:text-grey-lighter hover:text-underline ${
            router.pathname === "/products" ||
            router.pathname === "/products/asc" ||
            router.pathname === "/products/desc"
              ? "text-primary active font-semibold"
              : "text-grey-dark hover:text-primary"
          }`}>
          Products
        </a>
      </Link>
      <Link href="/blog">
        <a
          className={`inline-block whitespace-nowrap text-xl lg:text-2xl no-underline py-2 px-2 lg:px-4 hover:text-grey-lighter hover:text-underline ${
            router.pathname === "/blog" ||
            router.pathname === "/blog/asc" ||
            router.pathname === "/blog/desc"
              ? "text-primary active font-semibold"
              : "text-grey-dark hover:text-primary"
          }`}>
          Blog
        </a>
      </Link>
      <Link href="/where-to-buy">
        <a
          className={`inline-block whitespace-nowrap text-xl lg:text-2xl no-underline py-2 px-2 lg:px-4 hover:text-grey-lighter hover:text-underline ${
            router.pathname === "/where-to-buy"
              ? "text-primary active font-semibold"
              : "text-grey-dark hover:text-primary"
          }`}>
          Where to Buy
        </a>
      </Link>
    </div>
  );
};

export default Navbar;
