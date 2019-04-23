import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  return (
    <div>
      <div>
        <style jsx global>{`
          .lineWidth {
            width: 300px;
            margin-left: -20px;
          }
          .word-wrap {
            word-wrap: break-word;
          }
        `}</style>
      </div>

      <div className="word-wrap">
        <p>Month: {props.month}</p>
        <p>Produce: {props.produce}</p>
        <hr className="lineWidth" />
      </div>
    </div>
  );
}

export default Product;
