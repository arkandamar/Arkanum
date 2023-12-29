import "./SearchBar.scss";
import search from "../assets/search.png";
import cancel from "../assets/cancel.png";
import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {}, [inputValue]);

  return (
    <>
      <form className="container-bar">
        <div className="search">
          <button onClick={(e) => e.preventDefault()} className="search-button">
            <img src={search} />
          </button>
          <input
            ref={inputRef}
            className="search-bar"
            placeholder="Search Squares"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            value={inputValue}
          />
          {inputValue != "" && (
            <div onClick={() => setInputValue("")} className="cancel">
              <img src={cancel} alt="cancel button" />
            </div>
          )}
        </div>
        {isFocus && (
          <div className="wrapper-results">
            <ul className="container-results">
              <li className="list-result">
                <div className="result">Kakashi</div>
              </li>
              <li className="list-result">
                <div className="result">Hikari Uchiha</div>
              </li>
              <li className="list-result">
                <div className="result">Focalors Furina</div>
              </li>
              <li className="list-result">
                <div className="result">Sasuke Uchiha</div>
              </li>
            </ul>
            {inputValue != "" && (
              <div className="container-search-more">
                <div className="search-more">Search more "{inputValue}"</div>
              </div>
            )}
          </div>
        )}
      </form>
    </>
  );
}
