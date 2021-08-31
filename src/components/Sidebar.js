import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";
function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
         <h1 className="second">Events</h1>
         <div className="search-container">
            <form action="">
                <button type="submit"><i>
                <Icon icon="fa-solid:search" color="#8e8e8e" />
                  </i></button>
                <input type="text" placeholder="Search.." name="searchevent"/>
            </form>
        </div>
        <Link to="/new-event">
        <button style={{ marginTop: "90%" }} className="button btn__submit">
          <span className="button__text">Create new event</span>
          <i className="button__icon fas fa-chevron-right">
          <Icon icon="bpmn:intermediate-event-catch-parallel-multiple" />
          </i>
        </button>
        </Link>
      </div>
    </Sticky>
  );
}

export default Sidebar;
