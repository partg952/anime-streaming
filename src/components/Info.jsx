import React from "react";
import "./Info.css";
import { useParams } from "react-router-dom";

import axios from "axios";
function Info() {
  const [ep, addep] = React.useState();
  const [data, setData] = React.useState([]);
  const [current_ep, setEP] = React.useState("None");
  const { id } = useParams();
  React.useEffect(() => {
    axios("https://single-api-bay.vercel.app/anime/api/details/" + id).then(
      (res) => {
        console.log(res.data);
        setData(res.data.results);
      }
    );
  }, []);

  return (
    <div className="info">
      {ep != null && (
        <iframe
          src={ep}
          width="100%"
          height="500px"
          allowFullScreen
          frameborder="0"
        ></iframe>
      )}
      {data.map((item) => {
        return (
          <>
            <div id="info-div">
              <h3>Episode Watching:{current_ep}</h3>
              <img src={item.image} alt="" />
              <br />
              <h3>
                <strong>{item.title}</strong>
              </h3>
              <p>{item.summary}</p>
              <p>Genres : {item.genres}</p>
              <br />
            </div>
            <div id="episodes">
              {[...Array(parseInt(item.totalepisode))].map((x, i) => {
                var index = i + 1;
                return (
                  <button
                    onClick={() => {
                      localStorage.setItem("episode_number", index);
                      localStorage.setItem("anime_name", item.title);
                      setEP(index + "EP");
                      axios(
                        "https://single-api-bay.vercel.app/anime/api/watching/" +
                          id +
                          "/" +
                          index
                      ).then((res) => {
                        console.log(res.data);
                        addep(res.data);
                      });
                    }}
                  >
                    {" "}
                    ep: {index}{" "}
                  </button>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Info;
