import React from 'react';
import { Icon } from '@iconify/react';

function Rate() {
  return (
    <div className="rating-css">
        <div className="star-icon">
            <input type="radio" name="rating1" id="rating1" />
            <label htmlFor="rating1"><Icon icon="ant-design:star-filled" /></label>
            <input type="radio" name="rating2" id="rating2" />
            <label htmlFor="rating2"><Icon icon="ant-design:star-filled" /></label>
            <input type="radio" name="rating3" id="rating3" />
            <label htmlFor="rating3"><Icon icon="ant-design:star-filled" /></label>
            <input type="radio" name="rating4" id="rating4" />
            <label htmlFor="rating4"><Icon icon="ant-design:star-filled" /></label>
            <input type="radio" name="rating5" id="rating5" />
            <label htmlFor="rating5"><Icon icon="ant-design:star-filled" /></label>
        </div>
       
	
    </div>
  );
}
export default Rate;