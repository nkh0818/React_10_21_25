// JsxTest.jsx

import React from 'react'

export default function JsxTest() {
    let name = "NK";
    let mycolor = "blue";

  return (
    <div>
        {/* 리엑트에서 직접적으로 스타일줄수있음
        객체타입 {키:벨류 , 키:벨류} */}
        <h1 style={
            {color: mycolor,fontSize:"4rem"}
        }>Hello, {name} </h1>
        <h3 style={
            {color: mycolor}
        }> 하이</h3>
    </div>
  )
}


/*
자바스크립트 형태
h1 태그를 이용해서 내용을 변경,생성을 할 때는 
let title = document.createElement('h1');
title.textContent = "안녕!";
document.body.append(title);

리액트 
function App() {
  return <h1>안녕!</h1>;
}



*/
