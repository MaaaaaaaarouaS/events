import React from "react";
const comments = {
    comment: [
        {
            user: "raffagrassetti",
            text: "Woah dude, this is awesome! 🔥",
            id: 1,
        },
        {
            user: "Samia",
            text: "Great job",
            id: 2,
        },
        {
            user: "Maroua",
            text: "Bravo",
            id: 3,
        },
        {
            user: "raffagrassetti",
            text: "Great !!",
            id: 4,
        },
    ]
};
function EventComments() {
    return (
        <div>
            {
            comments.comment.map(comments => (
            <div key={comments.id} className="commentContainer">
                <div className="accountName">{comments.user}</div>
                <div className="comment">{comments.text}</div>
            </div>
            )
            )
         }
    </div>  
    );
  }
  
  export default EventComments;
  