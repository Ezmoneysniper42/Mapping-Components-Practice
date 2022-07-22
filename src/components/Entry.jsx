import React from "react";

function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.emojiName}</span>
          </dt>
          <dd>{props.discription}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Entry;
