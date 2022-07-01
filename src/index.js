import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./functional/Card";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        title="TWITTER"
        job=""
        url="https://play-lh.googleusercontent.com/x3XxTcEYG6hYRZwnWAUfMavRfNNBl8OZweUgZDf2jUJ3qjg2p91Y8MudeXumaQLily0"
      />
      <Card
        title="INSTAGRAM"
        job=""
        url="https://blog.publer.io/wp-content/uploads/2022/03/alexander-shatov-71Qk8ODIBko-unsplash.jpg"
      />
      <Card
        title="FACEBOOK"
        job=""
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
      />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
