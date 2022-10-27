import "./css/Section_slider.css";
import Slideshow from "./SlideShow";


function Sectionslider() {
  return (
  	 <Slideshow
          ratio={`6:2.3`}
          mode={`automatic`}
          timeout={`9000`}
        />
  );
}

export default Sectionslider;
