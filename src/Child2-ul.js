import React from "react";

function Child2UL(props) {
    return (
        <ul>
        {props.groceryList.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  />
                <label class="form-check-label" for="flexCheckDefault">
                </label>
                  
              <li>{item.item}</li>
              <button 
                className="btn btn-danger"
                onClick={() => props.handleDeleteById(item.id)}
              >
                Delete
              </button>
              </div>
              <br/>
            </React.Fragment>
          );
        })}
      </ul>
    );
}

export default Child2UL;