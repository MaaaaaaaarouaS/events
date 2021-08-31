import React from "react";
import "./new.scss";
import { Icon } from '@iconify/react';
function Groupe() {
    return (
        <div className="groupe__btn">
            <button className="button btn__event">
                <span className="text__event">Delete</span>
                <i className="icon__event">
                    <Icon icon="ant-design:delete-filled" />
                </i>
            </button>
            <button className="button btn__event">
                <span className="text__event">Return</span>
                <i className="icon__event">
                    <Icon icon="icon-park-outline:return" />
                </i>
            </button>
            <button className="button btn__event">
                <span className="text__event">Save</span>
                <i className="icon__event">
                    <Icon icon="fluent:save-20-regular" />
                </i>
            </button>
        </div>
    );
  }
  
  export default Groupe;
  