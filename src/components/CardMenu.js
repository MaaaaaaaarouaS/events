import "../styles/cardMenu.scss";
import { Icon } from '@iconify/react';
function CardMenu(props) {
  const {
    StarsNumber
  } = props;

  return (
    <div className="cardMenu">
      <div className="interactions">
      <Icon className="stars" icon="ant-design:star-filled" color="gold"/>
      <span className="startext" style={{color:"gold"}}>
       5.0<span style={{color: "#8e8e8e"}}> ({StarsNumber})</span>
      </span>
      </div>
    </div>
  );
}

export default CardMenu;
