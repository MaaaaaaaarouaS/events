import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/events.png";
function Navigation() {
  return (
    <div className="navigation">
      <div className="nav">
        <img alt="" className="logo" src={logo}/>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
