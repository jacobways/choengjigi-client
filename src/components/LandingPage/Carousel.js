import React, { useState, useEffect, useRef } from "react";
import { AiOutlineCaretRight, AiOutlineCaretLeft } from "react-icons/ai";

// 참고 자료
// https://ndpniraj.com/blogs/responsive-infinite-carousel-slider-using-react-and-tailwind-css
// https://www.youtube.com/watch?v=ho93e0IhdTA&t=317s

const photos = [
  "image/slide1.jpg",
  "image/slide2.jpg",
  "image/slide3.jpg",
]

const words = [
  "최고의 품질을 위해 생산지를 직접 답사하고, 100명의 평가단과 엄선합니다",
  "로컬 생산품 직거래를 통해 가성비 혜택을 누릴 수 있습니다",
  "수익금은 농촌교회의 회복과 지역사회를 위해 사용됩니다"
]

let count = 0;
let slideInterval;
const Length = photos.length;

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  }

  useEffect(() => {
    
    // 클릭이벤트로 'fade-anim' class가 추가되면 애니메이션 효과가 나타나지만, 1회성에 그침
    // 다음 슬라이드에도 애니메이션 효과을 적용하려면, 'fade-anim' class를 제거하여 초기화시켜야 함
    slideRef.current.addEventListener('animationend', removeAnimation)
    
    // 캐러셀에 마우스 올리면 슬라이드 자동 이동 동작이 멈춤
    slideRef.current.addEventListener('mouseenter', pauseSlider)

    // 마우스 떼면 다시 슬라이드 자동 이동
    slideRef.current.addEventListener('mouseleave', startSlider)

    // slide 자동 이동
    startSlider()

    // cleanup function : 컴포넌트 anmount 될 때 cleanup 하기
    // 이게 없으면 다른 라우트로 이동 시, 이 이벤트가 계속 동작하여 에러 발생
    return () => {
      pauseSlider();
    }
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(()=> {
      onNextClick()
    }, 3000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }
  

  const onNextClick = () => {
    count = (count + 1) % Length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim')
  };

  const onPreviousClick = () => {
    count = (currentIndex + Length - 1) % Length;
    setCurrentIndex(count);
    slideRef.current.classList.add('fade-anim')
  };


  return (
    <section ref={slideRef} className="w-10/12 select-none relative mx-auto max-h-96  ">
      <div className="aspect-w-16 aspect-h-9">
        <img src={photos[currentIndex]} alt="" />
        <span className = "flex justify-center items-center bg-black text-white bg-opacity-40 text-3xl">{words[currentIndex]}</span>
      </div>

      <div className="absolute w-full top-1/2 transform translate-y-1/2 py-2 px-3 flex justify-between items-center">
        <button 
          onClick={onPreviousClick}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        ><AiOutlineCaretLeft size={30} /></button>
        <button
          onClick={onNextClick}
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
        ><AiOutlineCaretRight size={30} /></button>
      </div>
    </section>
  );
}

export default Carousel;