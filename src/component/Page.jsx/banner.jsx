import TechAnimation from "./TechAnimation";
import image from "../../image/Mask group.png";

function banner() {
  return (
    <div>
      <div className="-ml-20">
        <TechAnimation />
      </div>
      <div className="absolute -top-20 left-0 w-full h-full flex items-center justify-center pointer-events-none">
        <div className=" h-[60vh] w-[60vh] rounded-full bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center shadow-2xl">
          <span className=" font-bold text-white">
            <img src={image} className="w-full h-full" alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default banner;
