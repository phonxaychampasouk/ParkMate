import React, { Component } from 'react';

function SearchAnimal({ handleChange, search }) {
return (
    <div id="search-bar">
      <label>
        Find:
    <input
      type="text"
      name="search"
      value={search}
      onChange={handleChange}
    />
    </label>
    </div>
    );
}
export default SearchAnimal;

