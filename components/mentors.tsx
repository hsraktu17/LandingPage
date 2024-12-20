import ImageCard from "./imageCard";

export default function Mentors() {
  return (
    <div className="text-white flex flex-col items-center pt-44 space-y-6 px-[120px] mentors-page" id="mentors">
      <div className="text-4xl font-semibold">Meet our mentors</div>
      <div className="text-[18px] md:text-[22px] font-normal text-center max-w-5xl">
        Learn from India’s best entrepreneurs as they share their market
        journeys & strategies
      </div>
      <div>
        <ImageCard />
      </div>
    </div>
  );
}
