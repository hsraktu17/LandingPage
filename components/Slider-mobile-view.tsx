import img1 from "@/public/Frame89.png";
import img2 from "@/public/Frame 123.png";
import img3 from "@/public/Frame 124.png";
import Svg1 from "@/public/‘.svg";
import Svg2 from "@/public/‘ (1).svg";
import Image,{StaticImageData} from "next/image";

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
      imageSrc: img1,
      profileImage: img2,
      text: "PDH School was the catalyst I needed...",
      userProfile: "User Profile",
    },
  ];

const MobileSlider: React.FC = () => {
  return (
    <div className="flex overflow-x-auto mt-8 px-4 space-x-4 w-full">
      {slideContents.map((slide, index) => (
        <div key={index} className="h-[400px] w-full  border-red-100 flex-shrink-0">
         <div className="upper-par">
              <Image
                src={slide.imageSrc}
                alt={"image"}
                // layout="fill"
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
              <div className=" bottom-3 flex items-center gap-3 left-2">
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
  );
};

export default MobileSlider;
