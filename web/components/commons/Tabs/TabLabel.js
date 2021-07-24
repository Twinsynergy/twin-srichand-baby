import React, { Component } from "react";
import PropTypes from "prop-types";

class TabLabel extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, title }
    } = this;

    let className = "tab-list-item whitespace-no-wrap px-4 py-5 font-semibold cursor-pointer";

    if (activeTab === label) {
      className += " tab-list-active -mb-px border-b-2";
    }

    return (
      <li className={className} onClick={onClick}>
        {title}
      </li>
    );
  }
}

export default TabLabel;
