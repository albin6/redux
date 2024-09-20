import propTypes from "prop-types";
import React from "react";

function Child({ data }) {
  return <div>{data}</div>;
}

Child.propTypes = {
  data: propTypes.string,
};

export default Child;
