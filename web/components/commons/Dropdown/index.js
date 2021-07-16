import React, { Component } from "react";
import Router from "next/router";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.container = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  static getInitialProps({ pathname }) {
    return { pathname };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.container.current && !this.container.current.contains(event.target)) {
      this.setState({
        open: false
      });
    }
  }

  handleButtonClick() {
    this.setState((state) => {
      return {
        open: !state.open
      };
    });
  }

  render() {
    const { open } = this.state;
    const { isUser } = this.props;

    const path = Router.router && Router.router.asPath;
    const host = path && path.split("/");
    const firstItem = host && host[1];

    return (
      <div className={`dropdown ${this.props.className ? this.props.className : ""}`}>
        <div className="" ref={this.container}>
          <button
            type="button"
            onClick={this.handleButtonClick}
            className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 ${this.props.classBtn}`}>
            {this.props.children}
          </button>
          <div className={`w-full dropdown-content ${open !== true ? "" : "show"}`}>
            {open && (
              <div
                className={`dropdown-box absolute left-0 mt-2 ${
                  isUser === true ? "w-48" : "w-full"
                } rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10 flex flex-wrap w-full pt-2 content-center justify-between md:w-1/2 md:justify-end`}
                role="menu">
                {/* origin-top-right */}
                <ul className="list-reset flex flex-wrap justify-between flex-1 md:flex-none items-center">
                  <li className="w-full md:w-auto md:mr-3">
                    <a
                      href="/about-us"
                      className={`block text-2xl px-4 py-2 text-sm hover:bg-gray-100 ${
                        firstItem === "about-us"
                          ? "text-primary active font-semibold"
                          : "text-grey-dark"
                      }`}>
                      About Us
                    </a>
                  </li>
                  <li className="w-full md:w-auto md:mr-3">
                    <a
                      href="/products"
                      className={`block text-2xl px-4 py-2 text-sm hover:bg-gray-100 ${
                        firstItem === "products"
                          ? "text-primary active font-semibold"
                          : "text-grey-dark"
                      }`}>
                      Products
                    </a>
                  </li>
                  <li className="w-full md:w-auto md:mr-3">
                    <a
                      href="/blog"
                      className={`block text-2xl px-4 py-2 text-sm hover:bg-gray-100 ${
                        firstItem === "blog"
                          ? "text-primary active font-semibold"
                          : "text-grey-dark"
                      }`}>
                      Blog
                    </a>
                  </li>
                  <li className="w-full md:w-auto md:mr-3">
                    <a
                      href="/online-shop"
                      className={`block text-2xl px-4 py-2 text-sm hover:bg-gray-100 ${
                        firstItem === "contact"
                          ? "text-primary active font-semibold"
                          : "text-grey-dark"
                      }`}>
                      Where to Buy
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
