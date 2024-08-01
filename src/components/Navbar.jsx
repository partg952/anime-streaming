import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import axios from "axios";
function Navbar({ data, setData }) {
  const ref = React.useRef();
  const history = useHistory();
  function searchAnime(value) {
    if (value.length != 0) {
      setData([]);
      axios(
        `https://single-api-bay.vercel.app/anime/api/search/${value}/1`
      ).then((res) => {
        setData(res.data.results);
        console.log(res.data);
        history.push("/");
      });
    }
  }
  return (
    <div className="navabar" id="navabar">
      <h1
        onClick={() => {
          history.push("/");
          setData([]);
          for (let i = 0; i < 5; i++) {
            axios(
              "https://single-api-bay.vercel.app/anime/api/popular/" + i
            ).then((res) => {
              // console.log(res.data);
              res.data.results.forEach((item) => {
                setData((prev) => [...prev, item]);
              });

              // console.log(data)
            });
          }
        }}
      >
        Stingrr
      </h1>
      <span id="search">
        <input
          type="text"
          ref={ref}
          onKeyPress={(e) => {
            console.log("hello");
            if (e.key === "Enter") {
              console.log("pressed");
              searchAnime(e.target.value);
            }
          }}
        />
        <button
          onClick={() => {
            searchAnime(ref.current.value);
          }}
        >
          <SearchIcon id="icon" />
        </button>
      </span>
    </div>
  );
}

export default Navbar;
