import "../styles/menu.scss";
import ProfileIcon from "./ProfileIcon";
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";
function Menu() {
  return (
    <div className="menu">
      <Link to="/index"><Icon className="icon" icon="ant-design:home-filled" /></Link>
      <Link to="/new-event"><Icon className="icon" icon="bpmn:intermediate-event-catch-parallel-multiple" /></Link>
      <Link to="/notifications"><Icon className="icon" icon="clarity:notification-line" /></Link>
      <Link to="/chat"><Icon className="icon" icon="bx:bx-message-rounded" /></Link>
      <Link to="/about"><Icon className="icon" icon="flat-color-icons:about" /></Link>
      <Link to="/profil/3"><ProfileIcon iconSize="small" image="https://i.pravatar.cc/150?img=60"/></Link>
      <Link to="/"><Icon className="logout" icon="ant-design:logout-outlined" /></Link>
    </div>
  );
}
export default Menu;
