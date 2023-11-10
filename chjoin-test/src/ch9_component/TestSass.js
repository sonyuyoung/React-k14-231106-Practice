//방금 만든 css 문법을 테스트할 빈도화지

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  return (
    <div className="SassTest">
      <div className="box red"></div>
      <div className="box blue"></div>
      <div className="box green"></div>
    </div>
  );
};

export default TestSass;
