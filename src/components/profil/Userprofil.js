import React from "react";
import EventUser from "./EventUser";
import "./profil.scss";
import "../../data/users";
import Socialicons from "./Socialicons";
import {
	useParams
  } from "react-router-dom";
import users from "../../data/users"
function Userprofil() {  
	let { id } = useParams();
     
       const profil = users.user.find((x) => x.id === id);
        if (!profil) {
          return <div>user not found!</div>;
        } 
    return (
        <div className="body__profil">
		<div className="wrapper__profil">
				<div className="profil_user">
				<img alt="" src={profil.image} className="thumbnail"/>
				<h3 className="name__user">{profil.username}</h3>
				<p className="title__user">{profil.name}</p>
				<p className="description__user">{profil.UserInterests}</p>
				<Socialicons 
					mail={profil.UserEmail}
					location={profil.UserLocation}
					reviews={profil.UserReviews}
					stars={profil.UserStars}
				/>
			</div>
			<EventUser/>
		</div>
        </div>     
    );
  }
  export default Userprofil;