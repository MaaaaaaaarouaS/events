import "../styles/cards.scss";
import Title from "./Title";
import Card from "./Card";
import data from "../data/data"

function Cards() {
  const commentsOne = [
    {
      user: "raffagrassetti",
      text: "Woah dude, this is awesome! 🔥",
      id: 1,
    },
    { 
      user: "therealadamsavage",
      text: "Like!",
      id: 2,
    },
    {
      user: "mapvault",
      text: "Niceeeee!",
      id: 3,
    },
  ];

  return (
    <div className="cards">
      <Title />
      {
        data.events.map(event => (
       <Card key={event.EventID}
          eventid= {event.EventID}
          UserOwnerID={event.UserOwnerID}
          UserOwnerName={event.UserOwnerName}
          accountimage={event.accountimage}
          eventlocation={event.eventlocation}
          eventimage={event.eventimage}
          comments={commentsOne}
          commentedByText={event.commentedByText}
          commentedByimage={event.commentedByimage}
          commentedByNumber={event.commentedByNumber}
          hours={event.hours}
          eventdatetime={event.eventdatetime}
          eventtitle={event.eventtitle}
          Points={event.Points}
                                />
                                )
                                )
                            }
    </div>
  );
}

export default Cards;
