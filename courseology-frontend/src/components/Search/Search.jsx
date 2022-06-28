import "./Search.scss";
import { Link } from "react-router-dom";

const Search = ({ searchTerm, handleInput }) => {
  return (
    <div className="search-content">
      <div className="search-content__title">Find Your Next Course!</div>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onInput={handleInput}
        placeholder="Search for courses..."
        className="search-content__input"
      />

      <div className="search-content__add">
        <Link to={`/add-course`}>
          <button
            className="search-content__add--course"
            data-testid="add-button"
            type="button"
            value="Reset"
          >
            + Add New Course
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Search;
