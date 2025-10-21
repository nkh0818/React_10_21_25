//내가직접 파일을 HTML 코드를 만들땐 함수를이용해 묶는다.
// 이미지를 가저올때 경로가 HTML했을땐 현재 파일을 기준으로 경로를 작성햇지만
// 리액트는 import 할때 경로를 작성할 때 src를 기준으로 한다.

import React from 'react'
import person from "../assets/people1.webp";
import "./Profile.css"
// import "./Badge.css"
import Badge from './Badge';

export default function Profile() {

    let name = "James Kim";
    let job = "프론트엔드 개발자";
  return (
      <div className='profile-box'>
        {/* <Badge /> */}
        <div className='img_newT'>
        <img src={person} alt="프론트엔드 개발자" />
        <div className='newTag'>new</div>
        <div className='badge_box'>as</div>
        </div>
        
        <h2>{name}</h2>
        <p>{job}</p>
    </div>
  )
}