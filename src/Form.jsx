import React, { useState } from "react";
import { Link } from "react-router-dom";
export const Form = () => {
  return (
    <div>
      <form>
        <h1>Title</h1>
        <input type="text" name="title" placeholder="Title" />
        <h1>Title</h1>
        <input type="text" name="title" placeholder="Title" />

        <h1>Genre</h1>
        <select name="genre" id="1">
          <option value="1">Action</option>
          <option value="1">Sci-fi</option>
          <option value="1">Romance</option>
          <option value="1">Thriller</option>
          <option value="1">Horror</option>
        </select>

        <h1>Release Year</h1>
        <input type="number" name="Release Year" placeholder="Release Year" />
        <h1>Synopsis</h1>
        <textarea name="Synopsis" placeholder="Synopsis" />

        <h1>Poster Image URL</h1>
        <input type="text" name="coverImage" placeholder="URL" />
        <Link to="/">
          <button>Cancel</button>
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
