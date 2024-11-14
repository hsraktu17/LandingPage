import MobileSlider from "./Slider-mobile-view";
import DesktopSlider from "./slider-full-view";

const PastCohort: React.FC = () => {
  return (
    <main className="slider-container-main ">
      <p className="text-white text-center text-4xl font-bold py-11">
        Peek into Our Past Cohorts
      </p>
      <div className="block sm:hidden">
        <MobileSlider />
      </div>
      <div className="hidden sm:block">
        <DesktopSlider />
      </div>
    </main>
  );
};

export default PastCohort;
