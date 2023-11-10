import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "antd";

const UseEffect = () => {
  // 상태 변수 설정
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  //   visible은 버튼 클릭에 따라 화면의 표시 여부를 조절하기 위한 상태 변수
  const [visible, setVisible] = useState(false); // 버튼 클릭으로 화면 표시 여부를 조절하는 상태

  // useEffect를 사용하여 컴포넌트가 마운트될 때와 name, nickname이 변경될 때 로그를 출력
  useEffect(() => {
    console.log("useEffect 호출이됨 ");
    console.log({
      name,
      nickname,
    });
    //후처리함수
    // useEffect의 클린업 함수. 컴포넌트가 언마운트되거나 재렌더링되기 전에 실행됨
    return () => {
      console.log("후처리 함수 호출이됨 ");
      console.log(name);
    };
  }, []); // 두 번째 매개변수에 빈 배열이 있어 매번 실행됨

  // 이름과 닉네임을 변경하는 이벤트 핸들러
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      {/* 버튼 클릭으로 visible 상태를 토글하고 상태에 따라 텍스트를 변경 */}
      <Button
        type="primary"
        onClick={() => {
          setVisible(!visible);
          console.log(visible);
        }}
      >
        {" "}
        {visible ? "숨기기" : "보이기"}
      </Button>

      {/* visible 상태에 따라 화면 표시 여부를 조절 */}
      <div>{visible ? "visible: true" : "visible: false"}</div>

      {/* 입력 폼 */}
      <div style={{ display: !visible ? "flex" : "none" }}>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickName} />
        {/* 결과 뷰에서는 name과 nickname을 출력하며, 입력 값이 바뀔 때마다 업데이트됩니다. */}
      </div>

      {/* 결과 뷰 */}
      <div>
        <h1>
          이름: <b>{name}</b>
        </h1>
      </div>
      <div>
        <h1>
          닉네임: <b>{nickname}</b>
        </h1>
      </div>
    </>
  );
};

export default UseEffect;
