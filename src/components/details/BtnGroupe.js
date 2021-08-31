import React from "react";
import { Icon } from '@iconify/react';
function BtnGroupe() {
    return (
        <div className="groupe__btn">
        <button className="button btn__event">
            <span className="text__event">Share</span>
            <i className="icon__event">
            <Icon icon="ci:share" />
            </i>
        </button>
        <button className="button btn__event">
            <span className="text__event">Edit</span>
            <i className="icon__event">
            <Icon icon="akar-icons:edit" />
            </i>
        </button>
        <button className="button btn__event">
            <span className="text__event">Report</span>
            <i className="icon__event">
            <Icon icon="carbon:report" />
            </i>
        </button>
    </div>  
    );
  }
  
  export default BtnGroupe;
  