import React from "react";

const Footer = () => {
  return (
    <footer className="mt-0">
      <div
        className="footer-top lazy"
        style={{ backgroundImage: 'url("/assets/image/top-footer.png")' }}>
        <div className="container mx-auto">
          <div className="block text-srichand-red text-center text-2xl md:text-3xl lg:text-4xl">
            ตัวช่วยดูแลผิว เพื่อคุณแม่มือโปร
          </div>
        </div>
      </div>
      <div className="bg-footer-srichand">
        <div className="container mx-auto">
          <div className="relative pt-48 lg:pt-56 pb-10 md:pb-20 text-white px-5 mx-auto lg:mx-0 lg:max-w-none block md:flex gap-2 lg:gap-8 text-sm">
            <div className="medium-4 md:w-2/3">
              <h4 className="text-2xl lg:text-3xl mb-5">Srichand Baby</h4>
              <nav className="block lg:flex lg:flex-wrap text-2xl">
                <a className="block mr-5 hover:text-gray-900" href="/about-us">
                  About Us
                </a>
                <a className="block mr-5 hover:text-gray-900" href="/products">
                  Products
                </a>
                <a className="block mr-5 hover:text-gray-900" href="/blog">
                  Blogs
                </a>
                <a className="block mr-5 hover:text-gray-900" href="/where-to-buy">
                  Where to Buy
                </a>
              </nav>
            </div>
            <div className="small-12 medium-4 md:w-1/3 pt-10 md:pt-0">
              <h4 className="text-2xl text-center mb-5">Social medias</h4>
              <nav className="flex flex-wrap text-base items-center justify-center">
                <a
                  href="https://www.facebook.com/srichandbaby"
                  target="_blank"
                  rel="noreferrer"
                  className="block link-icon mg-r px-2">
                  <span className="link-icon facebook-icon" />
                </a>
                <a href="/" className="block link-icon mg-r px-2">
                  <span className="link-icon instagram-icon" />
                </a>
                <a href="/" className="block link-icon mg-r px-2">
                  <span className="link-icon twitter-icon" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-wrap bg-footer-srichand border-t border-footer-srichand-border">
        <p className="container mx-auto font-light copyright px-5 text-white">
          Copyright 2015, srichandbaby.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
