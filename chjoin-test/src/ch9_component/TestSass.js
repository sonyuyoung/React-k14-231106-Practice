//방금 만든 css 문법을 테스트할 빈도화지

// CSS Modul 테스트 해보기.
// 만든 CSSModule.module.css 불러오기
import cssmodule from "./CSSModule.module.css";

import React from "react";
import "./SassComponent.scss";

const TestSass = () => {
  return (
    <>
      {/* CSS Modul 테스트 해보기. 적용하기. */}
      <div className={cssmodule.wrapper}>CSS Modul 테스트 해보기</div>
      <div className="testGlobal">CSS Modul testGlobal 테스트 해보기2</div>
      <div className="SassTest">
        <div className="box red"></div>
        <div className="box blue"></div>
        <div className="box green"></div>
      </div>
    </>
  );
};

export default TestSass;
