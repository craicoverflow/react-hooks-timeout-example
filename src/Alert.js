import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Alert.css";

/**
 * Customisable alert component that remains hidden until called.
 *
 * @param {boolean} props.visible - The current visibility of the component.
 * @param {number} [props.duration] - The time in milliseconds to display the component for. If not set, the component will stay open.
 * @param {func} onDurationEnd - Set visible state of component from parent.
 * @param {*} props.children - Child components.
 */
export const Alert = ({
  className,
  visible,
  duration,
  onDurationEnd,
  children
}) => {
  const [isVisible, setVisibility] = useState(null);

  useEffect(() => {
    setVisibility(visible);
  }, [visible]);

  if (!isVisible) return null;

  if (duration) {
    setTimeout(() => {
      setVisibility(false);

      if (onDurationEnd) {
        onDurationEnd(false);
      }
    }, duration);
  }

  return <div className={`Alert ${className}`}>{children}</div>;
};

Alert.propTypes = {
  visible: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
  children: PropTypes.node.isRequired
};
