import React from 'react';
import "./details.scss";
import {
  useParams
} from "react-router-dom";
import BtnGroupe from "./BtnGroupe";
import data from "../../data/data"
import InteresstedUsers from "./InteresstedUsers";
import EventComments from "./EventComments";
import GroupeInter from "./GroupeInter"

function Details() {

  let { id } = useParams();
     
       const event = data.events.find((x) => x.EventID === id);
        if (!event) {
          return <div>event not found!</div>;
        } 
  return (
    <div>
       <main className="more__details">
         <div className="details__event">
             <div className="details__cover"><img style={{height:"109vh",width:"67vh"}} src={event.eventimage} /></div>
             <div className="details__content">
                 <div className="details__content-body">
                     <div className="details__black-label">
                         <span className="details__title"><b>{event.eventtitle}</b></span>   
                          <p>User Owner : {event.UserOwnerName}</p>
                          <p>SubmissionDateTime : {event.hours} Hours AGO</p>
                          <p>EventDateTime : {event.eventdatetime} </p>      
                          <p>EventLocation : {event.eventlocation}</p>  
                          <p>Event Details : {event.EventDetail} 
                          </p>  
                          <GroupeInter/>
                          <h2>Interessted By </h2>
                            <InteresstedUsers/>
                          <h2 style={{marginTop:"40px"}}>Reviews</h2>
                            <EventComments/>
                          </div>
                      </div>  
                        <div  style={{marginBottom:"15px"}} align="center">
                            <BtnGroupe/>
                        </div>            
                </div>
          </div>
     </main>
    </div>
  );
}
export default Details;