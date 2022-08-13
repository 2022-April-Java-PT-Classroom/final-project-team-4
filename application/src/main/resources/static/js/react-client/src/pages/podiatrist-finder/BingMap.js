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
      <h2>Columbus Locations</h2>
      <div className={style.addresses}>    
        <table>
            <tr className={style.bold}>
              <td>OSU Podiatry</td>
            </tr>
            <tr>
              <td>1980 Crown Park Ct, Columbus, OH 43235</td>
            </tr>
            <tr>
              <td>(614)-293-2663</td>
            </tr>
        </table>

        <table>
            <tr className={style.bold}>
              <td>Urban Podiatry</td>
            </tr>
            <tr>
              <td>4485 N High St, Columbus, OH 43214</td>
            </tr>
            <tr>
              <td>(614)-824-5336</td>
            </tr>
        </table>

        <table>
            <tr className={style.bold}>
              <td>Clintonville Foot & Ankle Group</td>
            </tr>
            <tr>
              <td>3695 N High St, Columbus, OH 43214</td>
            </tr>
            <tr>
              <td>(614)-267-8387</td>
            </tr>
        </table>

        <table>
            <tr className={style.bold}>
              <td>Capital City Foot & Ankle LLC</td>
            </tr>
            <tr>
              <td>1570 Fishinger Rd, Columbus, OH 43221</td>
            </tr>
            <tr>
              <td>(614)-451-7033</td>
            </tr>

        </table>

        <table>
            <tr>
              <td className={style.bold}>Robin D. Kravitz, DPM</td>
            </tr>
            <tr>
              <td>941 Chatham Ln, Columbus, OH 43221</td>
            </tr>
            <tr>
              <td>(614)-457-3894</td>
            </tr>
        </table>
      </div>
      <div className={style.map}>
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