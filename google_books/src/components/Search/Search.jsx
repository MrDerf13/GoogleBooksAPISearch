import { useRef } from "react";

const Search = ({ id }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input type="text" id={id} />
    </div>
  );
};

export default Search;
