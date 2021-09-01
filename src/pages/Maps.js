import Navigation from "../components/Navigation";
import "../styles/maps.scss";
function Event() {
  return (
    <div>
      <Navigation />
      <div align="center">
      <div className="embed-responsive embed-responsive-100x400px">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35818.719732048536!2d-4.25169!3d55.868392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C+Glasgow+City%2C+UK!5e0!3m2!1sen!2sus!4v1448625188752" width="900" height="550" frameborder="0" style={{border:0}} allowfullscreen/>
        </div>
      </div>
    </div>
  );
}

export default Event;
