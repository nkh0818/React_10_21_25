import React from 'react'

export default function DomEx() {
  return (
    <div>

        {/* Dom (document Object model) */}
        {/* HTML을 자바스크립트가 이해할수있게 바꿔놓은 구조다
            웹페이지의 설계도  */}

            <h1>안녕</h1>
            <p>오늘은 DOM 배움</p>

            {/* 원래 자바스크립트에서 수정햇더니 오류발생가능성
                만약 새로운 내용이 추가되면 HTML파일이
                전체적으로 새로고침이되어 깜빡이는 현상과 느려지는현상 발생

                해결책
                가상DOM 도입 -리엑트
                기존 페이지 전체를 새로 그릴필요없이 리엑트가 기존문서에서 바뀐 부분만 찾아서 바꾸는것

                기존 문서의 복제본을 만들어 내가 태그를 만든것을 모드 가상DOM에 올린다 (메모리안에DOM)

                
            */}

    </div>
    
  )
}
