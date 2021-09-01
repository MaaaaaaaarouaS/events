import "../styles/card.scss";
import Profile from "./Profile";
import CardMenu from "./CardMenu";
import Comment from "./Comment";
import {Link} from "react-router-dom";

function Card(props) {
  const {
    eventid,
    accountimage,
    eventtitle,
    eventimage,
    eventdatetime,
    hours,
    comments,
    commentedByText,
    commentedByNumber,
    commentedByimage,
    UserOwnerName,
    eventlocation,
    Points, 
  } = props;

  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" username={UserOwnerName} location={eventlocation} image={accountimage}/>
          <Link to={`/event/${eventid}`}>< span className="cardButton">details</span></Link>
      </header>
      <img className="cardImage" src={eventimage} alt="card content" />
      <CardMenu StarsNumber={Points}/>
      <div className="timePosted">POSTED {hours} HOURS AGO</div>
      <div className="datePosted">Event Date Time :{eventdatetime}</div>
      <div className="eventtitle">{eventtitle}</div>
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} image={commentedByimage}/>
        <span>
          Commented by <strong>{commentedByText}</strong> and{" "}
          <strong>{commentedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
            />
          );
        })}
      </div>
      <div className="addComment">
        <div className="commentText">Add a comment...</div>
        <div className="postText">Post</div>
      </div>
    </div>
  );
}

export default Card;
