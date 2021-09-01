import React from "react";
import users from "../../data/users"
import {Link} from "react-router-dom";
function InteresstedUsers() {
    return (
        <div className="list-wrapper">
        <ul className="list">
        {
          users.user.map(user => (
           <li key={user.id} className="list-item">
            <div>
            <img alt="" src={user.image} className="list-item-image"/>
            </div>
           <div className="list-item-content">
           <Link to={`/profil/${user.id}`}><h4>{user.username}</h4></Link>
             <p>{user.name}</p>
          </div>
      </li>
      )
  )
    }
        </ul>
      </div>
    );
  }
  
  export default InteresstedUsers;
  