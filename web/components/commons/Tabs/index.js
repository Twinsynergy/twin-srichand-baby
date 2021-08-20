import React, { Component } from "react";
import PropTypes from "prop-types";
import TabLabel from "./TabLabel";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs md:px-5">
        <ul className="text-2xl flex w-full nav-pills nav-fill pt-2">
          {children.map((child) => {
            const { label, title } = child.props;

            return (
              <TabLabel
                activeTab={activeTab}
                key={label}
                label={label}
                title={title}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tab-content text-2xl">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {};

export default Tabs;
