import React from "react";

function Child1Form(props) {
    return (
        <form onSubmit={props.handleSubmitItem}>
        <div className="mb-3">
          <label htmlFor="formControlInput1" className="form-label">
            Grocery List
          </label>
          <br/>
          <input
            type="text"
            className="form-control"
            id="formControlInput1"
            placeholder="Enter Item"
            name="inputItem"
            onChange={props.handleOnChange}
            value={props.inputItem}
          />
        </div>
        <button className="btn btn-primary mb-3" type="submit">
          Submit
        </button>
      </form>
    );
}

export default Child1Form;