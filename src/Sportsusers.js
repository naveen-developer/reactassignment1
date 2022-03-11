import React from "react";

const Sportsusers = ({ playerList }) => {
  return (
    <div className="parrentdiv">
      {playerList.map((values) => {
        return (
          <div className="childdiv" key={values.Id}>
            <div className="imgDiv">
              <img src={`images/${values.Id}.jpg`} />
            </div>
            <div className="detailsDiv">
              <h3>{values.PFName + " " + values.SkillDesc}</h3>
              <p>Value ${values.Value}</p>
              <div className="recordDiv">
                {values.UpComingMatchesList.map((innerValues, index) => {
                  return (
                    <span key={index}>
                      {innerValues.CCode
                        ? innerValues.CCode +
                          " " +
                          innerValues.VsCCode +
                          " " +
                          innerValues.MDate
                        : "Not Available"}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sportsusers;
