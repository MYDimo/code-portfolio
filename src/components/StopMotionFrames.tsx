import React from "react";
import frame1 from "../content/images/gif-layers/1.jpg";
import frame2 from "../content/images/gif-layers/2.jpg";
import frame3 from "../content/images/gif-layers/3.jpg";
import frame4 from "../content/images/gif-layers/4.jpg";
import frame5 from "../content/images/gif-layers/5.jpg";
import frame6 from "../content/images/gif-layers/6.jpg";
import frame7 from "../content/images/gif-layers/7.jpg";
import frame8 from "../content/images/gif-layers/8.jpg";
import frame9 from "../content/images/gif-layers/9.jpg";
import frame10 from "../content/images/gif-layers/10.jpg";
import frame11 from "../content/images/gif-layers/11.jpg";
import frame12 from "../content/images/gif-layers/12.jpg";
import frame13 from "../content/images/gif-layers/13.jpg";
import frame14 from "../content/images/gif-layers/14.jpg";
import frame15 from "../content/images/gif-layers/15.jpg";
import frame16 from "../content/images/gif-layers/16.jpg";
import frame17 from "../content/images/gif-layers/17.jpg";
import frame18 from "../content/images/gif-layers/18.jpg";
import frame19 from "../content/images/gif-layers/19.jpg";
import frame20 from "../content/images/gif-layers/20.jpg";
import frame21 from "../content/images/gif-layers/21.jpg";
import frame22 from "../content/images/gif-layers/22.jpg";
import frame23 from "../content/images/gif-layers/23.jpg";
import frame24 from "../content/images/gif-layers/24.jpg";
import frame25 from "../content/images/gif-layers/25.jpg";
import frame26 from "../content/images/gif-layers/26.jpg";
import frame27 from "../content/images/gif-layers/27.jpg";
import frame28 from "../content/images/gif-layers/28.jpg";
import frame29 from "../content/images/gif-layers/29.jpg";
import frame30 from "../content/images/gif-layers/30.jpg";
import frame31 from "../content/images/gif-layers/31.jpg";
import frame32 from "../content/images/gif-layers/32.jpg";
import frame33 from "../content/images/gif-layers/33.jpg";
import frame34 from "../content/images/gif-layers/34.jpg";
import frame35 from "../content/images/gif-layers/35.jpg";
import frame36 from "../content/images/gif-layers/36.jpg";
import frame37 from "../content/images/gif-layers/37.jpg";
import frame38 from "../content/images/gif-layers/38.jpg";
import frame39 from "../content/images/gif-layers/39.jpg";
import frame40 from "../content/images/gif-layers/40.jpg";
import frame41 from "../content/images/gif-layers/41.jpg";
import frame42 from "../content/images/gif-layers/42.jpg";
import frame43 from "../content/images/gif-layers/43.jpg";
import frame44 from "../content/images/gif-layers/44.jpg";
import frame45 from "../content/images/gif-layers/45.jpg";
import frame46 from "../content/images/gif-layers/46.jpg";
import frame47 from "../content/images/gif-layers/47.jpg";

const frames = [
	frame1,
	frame2,
	frame3,
	frame4,
	frame5,
	frame6,
	frame7,
	frame8,
	frame9,
	frame10,
	frame11,
	frame12,
	frame13,
	frame14,
	frame15,
	frame16,
	frame17,
	frame18,
	frame19,
	frame20,
	frame21,
	frame22,
	frame23,
	frame24,
	frame25,
	frame26,
	frame27,
	frame28,
	frame29,
	frame30,
	frame31,
	frame32,
	frame33,
	frame34,
	frame35,
	frame36,
	frame37,
	frame38,
	frame39,
	frame40,
	frame41,
	frame42,
	frame43,
	frame44,
	frame45,
	frame46,
	frame47,
];

function StopMotionFrames({ frameNum }) {
	return <img src={frames[frameNum]} alt="A portrait of Mihaylo Dimo" />;
}

export default StopMotionFrames;
