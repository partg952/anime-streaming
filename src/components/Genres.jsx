import React from "react";
import "./Genres.css";
import axios from "axios";
function Genres({ setData }) {
  const genre_arr = [
    "Action",
    "Adventure",
    "Comedy",
    "Horror",
    "Romance",
    "Sci-Fi",
    "Shounen",
    "Sports",
  ];
  return (
    <div className="genres">
      {genre_arr.map((item) => {
        return (
          <p
            onClick={() => {
              setData([]);
              axios(
                `https://single-api-bay.vercel.app/anime/api/genre/${item}/1`
              ).then((res) => {
                console.log(res.data);
                setData(res.data.results);
              });
            }}
          >
            {item}
          </p>
        );
      })}
    </div>
  );
}

export default Genres;
