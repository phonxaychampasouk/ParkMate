import React, { Component } from 'react';

function SearchAnimal({ handleChange, search, onSubmit }) {
  return (
    <div id="search-bar">
      <form onSubmit={onSubmit}>
        <label>
          Find:
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default SearchAnimal;
