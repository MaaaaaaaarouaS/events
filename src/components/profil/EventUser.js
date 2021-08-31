import React from "react";
import "./profil.scss";
import { Icon } from '@iconify/react';
function EventUser() {  
    return (
        <div align="center">
		<div className="event__profil">
        <div className="event__profil-top">
            <div className="event__profil-inter">
                <div className="event__profil-title">List of Interested Events</div>
            </div>
        </div>
        <div className="event__profil-bottom">
            <h3 className="event__profil-title">Some Title Here</h3>
            <div className="event__profil-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            ratione.
            </div>
            <div className="event__profil-timing">
                <Icon icon="bx:bxs-time-five" width="26"/> 10:00 am
            </div>
        </div>
		<div className="event__profil-bottom">
            <h3 className="event__profil-title">Some Title Here</h3>
            <div className="event__profil-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            ratione.
            </div>
            <div className="event__profil-timing">
                <Icon icon="bx:bxs-time-five" width="26"/> 10:00 am
            </div>
        </div>
        </div>
        </div>    
    );
  }
  export default  EventUser;
