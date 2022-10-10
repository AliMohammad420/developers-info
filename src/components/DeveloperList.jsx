import React from "react";
import { actionType } from "./Developer";

function DeveloperList({ developers, dispatch }) {

      const removeDeveloper = (id) => {
    dispatch({ type: actionType.REMOVE_DEVELOPER, payload: { id } });
  };

  return (
    
    <div className="developer-list">
        <h4>Developers Name</h4>
      {developers.map((developer) => (
        <div className="developer" key={developer.id}>
          <div className="developer-name">{developer.name}</div>
          <button
            className="button"
            onClick={() => removeDeveloper(developer.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
       

export default DeveloperList;