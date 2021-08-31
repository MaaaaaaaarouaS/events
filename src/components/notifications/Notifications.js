import React from "react";
import "./notifications.scss";
import { Icon } from '@iconify/react';
function EventContainer() {  
    return (
        <div className="event-container">
        <h3 className="year">2021</h3>
        <div className="event">
        <div className="event-left">
            <div className="event-date">
            <div className="date">8</div>
            <div className="month">Nov</div>
            </div>
        </div>
        <div className="event-right">
            <h3 className="event-title">Some Title Here</h3>
            <div className="event-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            ratione.
            </div>
            <div className="event-timing">
                <Icon icon="bx:bxs-time-five" width="26"/> 10:00 am
            </div>
        </div>
        </div>
        <div className="event">
        <div className="event-left">
            <div className="event-date">
            <div className="date">22</div>
            <div className="month">Dec</div>
            </div>
        </div>
        <div className="event-right">
            <h3 className="event-title">Some Title Here</h3>

            <div className="event-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            ratione.
            </div>

            <div className="event-timing">
            <Icon icon="bx:bxs-time-five" width="26"/> 10:45 am
            </div>
        </div>
        </div>
        <h3 className="year">2020</h3>
        <div className="event">
        <div className="event-left">
            <div className="event-date">
            <div className="date">8</div>
            <div className="month">Jan</div>
            </div>
        </div>
        <div className="event-right">
            <h3 className="event-title">Some Title Here</h3>
            <div className="event-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            ratione.
            </div>
            <div className="event-timing">
            <Icon icon="bx:bxs-time-five" width="26"/>  10:00 am
            </div>
        </div>
        </div>    
      </div>
    );
  }
  export default EventContainer;
