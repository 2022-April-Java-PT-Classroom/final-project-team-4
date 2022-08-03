import BingMapsReact from "bingmaps-react";
import React from "react";
import style from "./style.module.scss";

function MyMapApp() {
  return (
    <div className={style.bingMap}>
    <BingMapsReact
      bingMapsKey="Ak_-nVsKEjzxTXWPi28M53qN1Pm6bwFSYms9Ix4EISh80YP36lu8THZknQFF_HdN"
      height="700px"
      mapOptions={
        {
        navigationBarMode: "square",
      }
    }
      width="1000px"
      viewOptions={
        {
        center: { latitude: 39.983334, longitude: -82.983330 },
        // mapTypeId: "grayscale",
      }
    }
    />
    </div>
  );
}

export default MyMapApp;