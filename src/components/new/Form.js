import React from "react";
import "./new.scss";
import { Icon } from '@iconify/react';
import Groupe from "./Groupe";
function Form() {
    return (
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Event ID</span>
            <input type="text" placeholder="Enter event id" required/>
          </div>
          <div className="input-box">
            <span className="details">Title</span>
            <input type="text" placeholder="Enter title" required/>
          </div>
          <div className="input-box">
            <span className="details">Event Date Time</span>
            <input type="datetime-local" required/>
          </div>
          <div className="input-box">
            <span className="details">Event Location</span>
            <input type="text" placeholder="Enter location" required/>
          </div>
          <div className="textarea-box">
            <span className="details">Event Details</span>
            <textarea rows="5" type="text" placeholder="Enter details of event" required/>
          </div>
          <div align="center">
            <Icon className="icon__event" icon="entypo:upload" />
            <label htmlFor="files"> Upload Image<hr/></label>
            <input id="files" style={{visibility:"hidden"}} type="file"/>
          </div>
        </div>
        <Groupe/>
      </form>
    );
  }
  
  export default Form;
  