import React from 'react'
import Header from './Header';
import Footer from './Footer';

export default function JsxTest2() {

    //1 삼항연산자
    // -if 문을 이용해 사용하는 기호.
    // - ? 사용

    // 로그인중인지 아닌지 구별하는방법
    let isLogin =false;

    // 시간을 변경하는 방법
    // let hour = 10;
    let hour = 10;

     // -3. true일 경우에는 Header 컴포넌트를 보이고
     //     false 일 경우에는 Footer 컴포넌트를 보인다
    let isHeader = false;

  return (
    <div>

        <h3>jsx의 새로운 문법!</h3>
        <p>기본적으로 return {} 안에는 HTML 태그만 작성가능하다</p>
        <p>자바스크립트 코드를 작성해야할 때가있다</p>
        
        {/* 조건에따라 컴포넌트도 변경할수있다 */}
        {
            isHeader ? <Header /> : <Footer />
        }


        {
            isLogin ? <h2>로그인성공</h2> : <h2>로그인 필요</h2>
                //안에 내용 content도 바꿀수있다
        }
        <h3>
            {
                hour<12 ?"오전" : "오후"
            }
        </h3>
    </div>
  )
}
