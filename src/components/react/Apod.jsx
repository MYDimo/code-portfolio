import React, { useState, useEffect, useRef } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Apod() {
	const [apodData, setApodData] = useState(null);
	const [isImageLoading, setIsImageLoaded] = useState(true);

	useEffect(() => {
		fetch(
			"https://api.nasa.gov/planetary/apod?api_key=Ja94JMq1boHsHu6Y53Uei9AY7YF9iWu1GHJb0inB"
		)
			.then((response) => response.json())
			.then((data) => {
				setApodData(data);
				console.log(data);
			})
			.catch((error) => console.log(error));
	}, []);

  const onLoadHandler = (imgEl) => {
    setIsImageLoaded(false);
  }

	return (
		<>
			<div
				className={`apod flex flex-col justify-center items-center w-full h-full rounded-2xl bg-zinc-200 ${
					isImageLoading ? "block" : "hidden"
				}`}
			>
				<h1>fetching APOD</h1>
        <svg width="200" height="200" stroke="SlateGray " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="2" strokeLinecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" calcMode="spline" values="0 150;42 150;42 150;42 150" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" dur="1.5s" calcMode="spline" values="0;-16;-59;-59" keyTimes="0;0.475;0.95;1" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" repeatCount="indefinite"/></circle><animateTransform attributeName="transform" type="rotate" dur="2s" values="0 12 12;360 12 12" repeatCount="indefinite"/></g></svg>
			</div>
			{apodData && (
				<div
					className={`apod relative rounded-2xl w-full h-[19vw] min-h-0 bg-zinc-200 ${
						isImageLoading ? "hidden" : "block"
					}`}
				>
					<a href="https://apod.nasa.gov/apod/">
						<img
							className={`object-cover w-full h-full rounded-2xl`}
							src={apodData.url}
							alt={apodData.title}
							// src={"https://apod.nasa.gov/apod/image/2402/Rosette2024newt533mmcopy1024.png"}
							// alt={apodData.title}
							onLoad={(imgEl) => onLoadHandler(imgEl)}
						/>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-2 flex justify-center items-center text-6xl prose overflow-hidden text-white font-bold text-center">
              <div className="text line-clamp-3">APOD: {apodData.title}</div>
            </div>
					</a>
				</div>
			)}
		</>
	);
}

export default Apod;
