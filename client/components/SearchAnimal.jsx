import React, { Component } from 'react';

function SearchAnimal({ handleChange, search, handleSubmit }) {
return (
    <div id="search-bar">
      <label>
        Find:
    <input
      type="text"
      name="search"
      value={search}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
    </label>
    </div>
    );
}
export default SearchAnimal;

