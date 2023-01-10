import React from "react";
import "../css/Filter.css";
export const Filters = () => {
  return (
    <div>
      <h6>Filter Products</h6>
      <hr />
      <div className="form-check filter-radio">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="radio_asc"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Ascending
        </label>
      </div>
      <div className="form-check filter-radio">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="radio_desc"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Descending
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="radio_stock"
        />
        <label className="form-check-label" for="flexRadioDefault1">
          Out of Stock
        </label>
      </div>

      <button type="button" className="btn btn-secondary clear">
        Clear Filters
      </button>
    </div>
  );
};
