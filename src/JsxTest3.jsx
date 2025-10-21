import React from 'react'
import "./JsxTest3.css"
export default function JsxTest3() {
    //더움-> 빨간색
    //추움 -> 파란색
    let isHot =true;
    
    //온라인중이면 초록!
    //오프라인중이면 회색
    let isOnline = false;
  return (
    <div>
        <h2>classname 속성에서도 삼항연산자를 쓸수있다</h2>
        <p>클래스명을 이용해서 디자인변경</p>

        <div className={ isOnline ? "active" : "inactive" }></div>

        <h3>디자인도 삼항연산자를 이용해 변경가능</h3>
        <h4 style={{
            background : isHot ? "Red" : "Blue",
            color : isHot ? "yellow" : "white",
            padding:"1rem"
        }}>
            { isHot ? "더워요":"추워요" }

        </h4>
    </div>
  )
}
