"use client";
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/Frame89.png";
import img2 from "@/public/Frame 123.png";
import img3 from "@/public/Frame 124.png";
import Svg1 from "@/public/‘.svg";
import Svg2 from "@/public/‘ (1).svg";


interface SlideContent {
  imageSrc: StaticImageData;
  profileImage: StaticImageData;
  text: string;
  userProfile: string;
}

const slideContents: SlideContent[] = [
  {
    imageSrc: img1,
    profileImage: img1,
    text: "PDH School was the catalyst I needed...",
    userProfile: "User Profile",
  },
  {
    imageSrc: img2,
    profileImage: img3,
    text: "PDH School was the catalyst I needed...",
    userProfile: "User Profile",
  },
  {
    imageSrc: img3,
    profileImage: img2,
    text: "PDH School was the catalyst I needed...",
    userProfile: "User Profile",
  },
  {
    imageSrc: img1,
    profileImage: img2,
    text: "PDH School was the catalyst I needed...",
    userProfile: "User Profile",
  },
  {
    imageSrc: img1,
    profileImage: img2,
    text: "PDH School was the catalyst I needed...",
    userProfile: "User Profile",
  },
];

const DesktopSlider: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      effect: "coverflow",
      centeredSlides: true,
      spaceBetween: 50,
      simulateTouch: true,
      autoplay: {
        delay: 1000, 
      },
      coverflowEffect: {
        rotate: 10,
        stretch: 10,
        depth: 800,
        modifier: 1,
        slideShadows: true,
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="main relative">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {slideContents.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="upper-part">
                <Image
                  src={slide.imageSrc}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="slide-image"
                />
              </div>
              <div className="lower-part">
                <div className="text-xl px-10 relative">
                  <p>{slide.text}</p>
                  <Image src={Svg1} alt="Svg1" className="absolute top-0 left-5" />
                  <Image src={Svg2} alt="Svg2" className="absolute right-24 -bottom-2" />
                </div>
                <div className="absolute bottom-3 flex items-center gap-3 left-2">
                  <Image
                    src={slide.profileImage}
                    alt={slide.userProfile}
                    className="h-[50px] w-[50px] rounded-[50%]"
                  />
                  <p>{slide.userProfile}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default DesktopSlider;
