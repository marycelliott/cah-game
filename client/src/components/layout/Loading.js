import React from "react";
import { Row, Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div>
      <div style={{ display: "inline-block" }}>
        <Spinner color="light" />
      </div>
      <div style={{ display: "inline-block" }}>
        <h1 className="h1">
          <b>LOADING...</b>
        </h1>
      </div>
    </div>
  );
};

export default Loading;
