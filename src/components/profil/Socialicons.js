import React from "react";
import "./profil.scss";
import { Icon } from '@iconify/react';
function Socialicons(props) {
		const {
		 mail,
		 location,
		 reviews,
		 stars,
		} = props; 

    return ( 
		<div className="social-icons">
				<div className="icon">
					<a><i><Icon className="icons__profil" icon="cib:mail-ru"/></i></a>
					<h4>{mail}</h4>
				</div>				
				<div className="icon">
					<a><i><Icon className="icons__profil" icon="dashicons:location"/></i></a>
					<h4>{location}</h4>
				</div>				
				<div className="icon">
					<a><i><Icon className="icons__profil" icon="ant-design:comment-outlined" /></i></a>
					<h4>{reviews} (reviews)</h4>		
				</div>
				<div className="icon">
					<a><i><Icon className="icons__profil" color="orange" icon="ant-design:star-filled"/></i></a>
					<h4>{stars}</h4>
				</div>
			</div>   
    );
  }
  export default  Socialicons;
