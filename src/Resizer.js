import React, { Component } from "react";
import "./resizer.css";

const VerticalWrapper = ({ children, ...props }) => {
  return (
    <div className="wrapper vertical" {...props}>
      {children}
    </div>
  );
};

const HorizontalWrapper = ({ children, ...props }) => {
  return (
    <div className="wrapper horizontal" {...props}>
      {children}
    </div>
  );
};

class Resizer extends Component {
  render() {
    const {
      index,
      split = "vertical",
      onClick = () => {},
      onDoubleClick = () => {},
      onMouseDown = () => {},
      onTouchEnd = () => {},
      onTouchStart = () => {}
    } = this.props;

    const props = {
      ref: _ => (this.resizer = _),
      "data-attribute": split,
      "data-type": "Resizer",
      onMouseDown: event => onMouseDown(event, index),
      onTouchStart: event => {
        event.preventDefault();
        onTouchStart(event, index);
      },
      onTouchEnd: event => {
        event.preventDefault();
        onTouchEnd(event, index);
      },
      onClick: event => {
        if (onClick) {
          event.preventDefault();
          onClick(event, index);
        }
      },
      onDoubleClick: event => {
        if (onDoubleClick) {
          event.preventDefault();
          onDoubleClick(event, index);
        }
      }
    };

    return split === "vertical" ? (
      <VerticalWrapper {...props} />
    ) : (
      <HorizontalWrapper {...props} />
    );
  }
}

export default Resizer;
