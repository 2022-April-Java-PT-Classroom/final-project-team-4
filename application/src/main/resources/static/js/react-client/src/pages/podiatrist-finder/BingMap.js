import React, { useEffect, useState } from "react";

import BingMapsReact from "bingmaps-react";
import style from "./style.module.scss";

function MyMapApp() {
  const [mapReady, setMapReady] = useState(false);
  
  useEffect(() => {
    if (mapReady) {
      // addPushPin();
    }
  }, [mapReady]);
  
  return (
    <div className={style.bingMap}>
    <BingMapsReact
      onMapReady = {
        ({ map }) => {
        setMapReady(true);
        }
      }
      bingMapsKey="Ak_-nVsKEjzxTXWPi28M53qN1Pm6bwFSYms9Ix4EISh80YP36lu8THZknQFF_HdN"
      height="700px"
      mapOptions={
        {
        navigationBarMode: "square",
        }
      }
      width="1500px"
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