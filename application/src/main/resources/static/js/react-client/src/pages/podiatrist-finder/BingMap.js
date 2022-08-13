import React, { useEffect, useState } from "react";

import BingMapsReact from "bingmaps-react";
import style from "./style.module.scss";
import locatorimage from "../../assets/images/locatorimage.jpg";

function MyMapApp() {
  const [bingMapReady, setBingMapReady] = useState(false)

  //pins for the map
  const pushPinOne = {
    center: {
      latitude: 40.064849291475156,
      longitude: -83.0702206254343,
    },
    options: {
      title: "OSU Podiatry branch office"
    }
  }

  const pushPinTwo = {
    center: {
      latitude: 40.05374155134204,
      longitude:  -83.02031051974569,
    },
    options: {
      title: "Urban Podiatry LLC"
    }
  }
  const pushPinThree = {
    center: {
      latitude: 40.03743101293974, 
      longitude: -83.01777449133328,
    },
    options: {
      title: "Clintonville Foot & Ankle Group"
    }
  }
  
  const pushPinFour = {
    center: {
      latitude: 40.024848689130565, 
      longitude: -83.05566873859135,
    },
    options: {
      title: "Capital City Foot & Ankle LLC"
    }
  }
  
  const pushPinFive = {
    center: {
      latitude: 40.01893307582084, 
      longitude: -83.03781595687464,
    },
    options: {
      title: "Robin D. Kravitz DPM"
    }
  }
  
  

  const pushPins = [pushPinOne, pushPinTwo, pushPinThree, pushPinFour, pushPinFive];
  

  //handles the map
  return (
    <div className={style.bingMap}>
      <div >
        <img src={locatorimage} className={style.heroImage}></img>
        <div className={style.centered}>Local Podiatrist Locator</div>
      </div>
      <form>
        {/* <label for="city">City</label>
        <br></br>
        <input type="text" id="city" name="city"/>
        <br></br>
        <label for="state">State </label>
        <input type="text" id="state" name="state"/>
        <br></br>
        <label for="zipCode">zipcode</label>
        <input type="text" id="zipCode" name="zipCode"/>
        <button>Search</button> */}
      </form>
    <BingMapsReact
      onMapReady = {
        ({ map }) => {
        setBingMapReady(true);
        }
      }
      pushPins={pushPins}
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

//This is a blank copy of the pin code you can use to add more
// const pushPin = {
//   center: {
//     latitude:, 
//     longitude:,
//   },
//   options: {
//     title: ""
//   }
// }