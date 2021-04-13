import React from "react";
import ImageToggleOnMouseOver from "./ImageToggleOnScroll";

const DeveloperDetail = ({
  id,
  firstName,
  lastName,
  level,
  primarySkill,
  favorite,
  bio,
  onHeartFavoriteHandler,
}) => {
  return React.useMemo(() => {
    console.log(`DeveloperDetail:${id} ${firstName} ${lastName} ${favorite}`);
    return (
      <div className="card col-4 cardmin">
        <ImageToggleOnMouseOver
          className="card-img-top"
          primaryImg={`/static/Developers/bw/developer-${id}.jpg`}
          secondaryImg={`/static/Developers/developer-${id}.jpg`}
          alt="{firstName} {lastName}"
        />
        <div className="card-body">
          <h4 className="card-title">
            <button
              data-sessionid={id}
              className={favorite ? "heartredbutton" : "heartdarkbutton"}
              onClick={(e) => {
                onHeartFavoriteHandler(e, !favorite);
              }}
            />
            <span>
              {firstName} {lastName}
            </span>
          </h4>
          <h6>
            <span>Primary Skill: {primarySkill}</span>
          </h6>
          <h6>
            <span>Level: {level}</span>
          </h6>
          <span>{bio}</span>
        </div>
      </div>
    );
  }, [
    id,
    firstName,
    lastName,
    favorite,
    bio,
    onHeartFavoriteHandler,
    primarySkill,
    level,
  ]);
};

export default DeveloperDetail;
