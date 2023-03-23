import { LeftArrow, RightArrow } from '../../icons';
import crs01 from '../../assets/images/crs01.png';
import { useRef } from 'react';

export default function Carousel() {
  const carouselRef = useRef(null);

  const goToSlide = (slideId) => {
    const slide = document.getElementById(slideId);
    if (slide && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: slide.offsetLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div ref={carouselRef} className="carousel h-[900px] text-white">
        <div id="slide1" className="carousel-item flex items-center w-full">
          <div
            onClick={() => goToSlide('slide3')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-[#C4C4C4]"
          >
            <LeftArrow />
          </div>
          <div className="flex flex-col items-center grow self-start">
            <div className="my-[104px]">
              <h1 className="text-6xl font-bold leading-[82px] tracking-[0.02em] text-center">
                LOREM IPSUM <span className="text-my-green">LOREM</span>
              </h1>
            </div>
            <div className="w-[200px] h-[200px] mb-[61px]">
              <img src={crs01} alt={crs01} />
            </div>
            <div className="flex flex-col items-center w-[856px] text-center gap-5">
              <h2 className="font-semibold text-[26px] leading-[31.69px]">
                Lorem Ipsum is simply 01
              </h2>
              <p className="font-normal text-lg leading-[27px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div
            onClick={() => goToSlide('slide2')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-my-green"
          >
            <RightArrow />
          </div>
        </div>

        <div id="slide2" className="carousel-item flex items-center w-full">
          <div
            onClick={() => goToSlide('slide1')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-[#C4C4C4]"
          >
            <LeftArrow />
          </div>
          <div className="flex flex-col items-center grow self-start">
            <div className="my-[104px]">
              <h1 className="text-6xl font-bold leading-[82px] tracking-[0.02em] text-center">
                LOREM IPSUM <span className="text-my-green">LOREM</span>
              </h1>
            </div>
            <div className="w-[200px] h-[200px] mb-[61px]">
              <img src={crs01} alt={crs01} />
            </div>
            <div className="flex flex-col items-center w-[856px] text-center gap-5">
              <h2 className="font-semibold text-[26px] leading-[31.69px]">
                Lorem Ipsum is simply 02
              </h2>
              <p className="font-normal text-lg leading-[27px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div
            onClick={() => goToSlide('slide3')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-my-green"
          >
            <RightArrow />
          </div>
        </div>

        <div id="slide3" className="carousel-item flex items-center w-full">
          <div
            onClick={() => goToSlide('slide2')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-[#C4C4C4]"
          >
            <LeftArrow />
          </div>
          <div className="flex flex-col items-center grow self-start">
            <div className="my-[104px]">
              <h1 className="text-6xl font-bold leading-[82px] tracking-[0.02em] text-center">
                LOREM IPSUM <span className="text-my-green">LOREM</span>
              </h1>
            </div>
            <div className="w-[200px] h-[200px] mb-[61px]">
              <img src={crs01} alt={crs01} />
            </div>
            <div className="flex flex-col items-center w-[856px] text-center gap-5">
              <h2 className="font-semibold text-[26px] leading-[31.69px]">
                Lorem Ipsum is simply 03
              </h2>
              <p className="font-normal text-lg leading-[27px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div
            onClick={() => goToSlide('slide1')}
            className="btn rounded-none flex justify-center items-center w-[54.26px] h-[55px] bg-my-green"
          >
            <RightArrow />
          </div>
        </div>
      </div>
    </>
  );
}
