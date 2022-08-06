import React, { useEffect, useState } from "react";

import BingMapsReact from "bingmaps-react";
import style from "./style.module.scss";

function MyMapApp() {
  const [bingMapReady, setBingMapReady] = useState(false)
  
  useEffect(() => {
    if (bingMapReady) {
      // addPushPin();
    }
  }, [bingMapReady]);
  
  return (
    <div className={style.bingMap}>
      <form>
        <label for="city">City</label>
        <br></br>
        <input type="text" id="city" name="city"/>
        <br></br>
        <label for="state">State </label>
        <input type="text" id="state" name="state"/>
        <br></br>
        <label for="zipCode">zipcode</label>
        <input type="text" id="zipCode" name="zipCode"/>
        <button>Search</button>
      </form>
    <BingMapsReact
      onMapReady = {
        ({ map }) => {
        setBingMapReady(true);
        }
      }
      bingMapsKey="Ak_-nVsKEjzxTXWPi28M53qN1Pm6bwFSYms9Ix4EISh80YP36lu8THZknQFF_HdN"
      height="650px"
      mapOptions={
        {
        navigationBarMode: "square",
        }
      }
      width="1300px"
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