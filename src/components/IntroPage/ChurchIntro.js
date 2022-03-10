import React, { useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function ChurchIntro() {
  return (
    <article className="font-sans">
      <h1 className="text-3xl font-bold mt-10">
        산청교회 사역 안내
      </h1>
      <div className="flex justify-between flex-wrap">
        
        <section className="w-80 mt-3.5 mr-4 text-gray-800">
          <h3 className="text-xl font-bold text-center">자습실 사역</h3>
          <div className="aspect-w-16 aspect-h-10">
            <img src={"image/study.jpg"} />
          </div>
          <div className="my-3 text-gray-800">
            <div >⦁ 교회를 자습실로 개방하여 청소년들 소통 및 전도</div>
            <div>⦁ 진로코칭 / MBTI 검사와 상담 / 맞춤형 학습지도</div>
            <div>⦁ 신앙상담 / 성경쓰기</div>
            <div>⦁ 장학금 전달</div>
          </div>
          <div className="text-gray-500">  
            <ImQuotesLeft className="inline align-top" size={10}/> 
            학부모들의 호응과 청소년들의 정서 및 학업에 <br></br> 좋은 결과를 얻고 있습니다. <br></br>사역으로 8명의 학생이 교회에 출석하였습니다. 
            <ImQuotesRight className="inline align-top" size={10}/>
          </div>
        </section>

        <section className="w-80 mt-3.5 mr-4 text-gray-800">
          <h3 className="text-xl font-bold text-center">귀촌 정착 도우미 사역</h3>
          <div className="aspect-w-16 aspect-h-10">
            <img src={"image/worship.jpg"} />
          </div>
          <div className="my-3 text-gray-800">
            <div>⦁ 사업체 자원봉사 및 개업예배 인도</div>
            <div>⦁ 귀촌 자녀의 자습실 참여</div>
            <div>⦁ 잦은 심방과 교제</div>
          </div>
          <div className="text-gray-500"> 
            <ImQuotesLeft className="inline align-top" size={10}/>
            산청교회가 귀촌하신 분들이 잘 정착하도록 <br></br> 도우며 전도를 하고 있습니다. <br></br>덕분에 세 가정이 교회에 출석하여 정착하였고 <br></br>이분들을 통해 전도가 이루어지고 있습니다. 
            <ImQuotesRight className="inline align-top" size={10}/>
          </div>
        </section> 

        <section className="w-80 mt-3.5 text-gray-800">
        <h3 className="text-xl font-bold text-center">산청군청 협력사업</h3>
        <div className="aspect-w-16 aspect-h-10">
          <img src={"image/music.jpg"} />
        </div>
        <div className="my-3 text-gray-800">
          <div>⦁ 3차례 주민공모사업 진행</div>
          <div>⦁ 드럼강좌 / 보컬강좌 / 개인 음반제작</div>
          <div>⦁ 청소년 학습방 / 청소년 봉사활동</div>
          <div>⦁ 집수리 사역</div>
        </div>
        <div className="text-gray-500"> 
          <ImQuotesLeft className="inline align-top" size={10}/>
          군청과 연계사업을 통해 지역 사람들과 <br></br> 소통할 수 있는 기회를 얻었고, <br></br>산청교회가 지역사회에 좋은 모습으로 <br></br>알려지는 계기가 되었습니다.
          <ImQuotesRight className="inline align-top" size={10}/>
        </div>
        </section>

      </div>
    </article>
  );
}

export default ChurchIntro;