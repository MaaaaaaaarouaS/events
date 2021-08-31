import React, { Component } from "react";
import "./userProfile.scss";
import { Icon } from '@iconify/react';

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card1 user__profile__image">
          <div className="profile__image">
            <img src="https://i.pravatar.cc/150?img=60" />
          </div>
          <h4>Samantha</h4>
          <p>CLEMENTINE BAUCH</p>
        </div>
        <div className="profile__card1">
          <div className="card1__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <Icon icon="akar-icons:chevron-down" />
          </div>
          <div className="card1__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
