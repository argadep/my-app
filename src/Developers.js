import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import DeveloperData from "./DeveloperData";
import DeveloperDetail from "./DeveloperDetail";
import { ConfigContext } from "./App";
import developersReducer from "./developersReducer";

const Developers = ({}) => {
  const [angularDevelopers, setAngularDevelopers] = useState(true);
  const [reactDevelopers, setReactDevelopers] = useState(true);

  const [developerList, dispatch] = useReducer(developersReducer, []);

  const [isLoading, setIsLoading] = useState(true);

  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);
    new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(() => {
      setIsLoading(false);
      const developerListServerFilter = DeveloperData.filter(
        ({ primarySkill }) => {
          return (
            (angularDevelopers && primarySkill === "Angular") ||
            (reactDevelopers && primarySkill === "React")
          );
        }
      );
      dispatch({
        type: "setDeveloperList",
        data: developerListServerFilter,
      });
    });
    return () => {
      console.log("cleanup");
    };
  }, []);

  const handleChangeAngular = () => {
    setAngularDevelopers(!angularDevelopers);
  };

  const developerListFiltered = isLoading
    ? []
    : developerList
        .filter(
          ({ primarySkill }) =>
            (angularDevelopers && primarySkill === "Angular") ||
            (reactDevelopers && primarySkill === "React")
        )
        .sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });

  const handleChangeReaact = () => {
    setReactDevelopers(!reactDevelopers);
  };

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);
    dispatch({
      type: favoriteValue === true ? "favorite" : "unfavorite",
      sessionId,
    });
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showFilter === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeAngular}
                    checked={angularDevelopers}
                  />
                  Angular
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeReaact}
                    checked={reactDevelopers}
                  />
                  React
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {developerListFiltered.map(
              ({
                id,
                firstName,
                lastName,
                bio,
                favorite,
                level,
                primarySkill,
              }) => {
                return (
                  <DeveloperDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                    level={level}
                    primarySkill={primarySkill}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
