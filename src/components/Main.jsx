import React from "react";
import "./Main.css";
import axios from "axios";
import FlipMove from "react-flip-move";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useHistory } from "react-router-dom";
function Main({ data }) {
  const history = useHistory();
  function checkLength(string) {
    if (string.length > 30) {
      var re = string.substr(30);
      return string.replace(re, "...");
    } else {
      return string;
    }
  }
  return (
    <>
      <FlipMove
        enterAnimation="fade"
        leaveAnimation="elevator"
        className="main"
      >
        {data.length != 0 ? (
          data.map((item) => {
            return (
              <div
                className="card"
                onClick={() => {
                  history.push("/info/" + item.id);
                }}
              >
                <img src={item.image} alt="" />
                    <h4 style={ {
                    color: 'white'
                }}> {checkLength(item.title)} </h4>
                <div id="visible">
                 wow
                </div>
              </div>
            );
          })
        ) : (
          <h1 style={{ color: "purple" }}>Loading...</h1>
        )}
      </FlipMove>
    </>
  );
}

export default Main;
