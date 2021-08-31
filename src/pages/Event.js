import "../styles/events.scss";
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

function Event() {
  return (
    <div>
      <Navigation />
      <main>
        <div className="event">
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default Event;
