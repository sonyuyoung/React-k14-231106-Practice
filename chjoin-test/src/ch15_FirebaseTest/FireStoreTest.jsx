import React from "react";

// 샘플 테스트,
// 간단히 입력값 2개정도, username, password
// crud 확인.
// 파이어베이스 콘솔에 들어가서, 우리가 이용할 서비스를 시작하고,
// 사용 규칙은 일단은 테스트 모드(사용기간 30일 제한), 프로덕션 모드(배포)
// 스토어, 스토리지 오픈.

// 스토어

// 준비작업 샘플 테스트 1
// import
import { db } from "./firebaseConfig";

// 공식 문서 샘플 코드를 그대로 가져온 경우.
// https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ko#web-modular-api
import { doc, setDoc } from "firebase/firestore";
import { Button } from "antd";

// Add a new document in collection "cities"

const FireStoreTest = () => {
  // 샘플 확인용.
  const testSetDoc = async () => {
    await setDoc(doc(db, "cities", "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };
  return (
    <div>
      <Button type="primary" onClick={() => testSetDoc()}>
        Test setDoc
      </Button>
    </div>
  );
};

export default FireStoreTest;
