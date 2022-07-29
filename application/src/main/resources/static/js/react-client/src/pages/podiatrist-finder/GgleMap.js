import React, { useState } from "react";

import { Axios } from "axios";
import BingMap from "./bingMaps";
import style from "./style.module.scss";

const initMap = () => {
    const [bingMaps, setbingMaps] = useState(null);

    const getMap = async () => {
        const bingMap = await Axios("https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Ak_-nVsKEjzxTXWPi28M53qN1Pm6bwFSYms9Ix4EISh80YP36lu8THZknQFF_HdN");
        setbingMaps(bingMap.data)
    }


    return(
        <div id="myMap">
            <BingMap maps = {bingMaps}/>
        </div>
    );
}

export default initMap;