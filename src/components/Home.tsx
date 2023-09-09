import mikoImg from "../content/images/miko.jpg";
import gifImg from "../content/images/gif-layers/1.jpg";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, frame } from "framer-motion";
import StopMotionFrames from "./StopMotionFrames";
import { Image } from "astro:assets";


function Home() {
	// ----------- Below is for scroll related animations
	// const { scrollY, scrollYProgress } = useScroll();
	// const [frameCounter, setFrameCounter] = useState(1);

	// useMotionValueEvent(scrollY, "change", (latest) => {
	// 	console.log("Page scroll: ", latest);
	// });

	// const frameUpdater = (deltaY) => {
	// 	if (deltaY >= 0) {
	// 		setFrameCounter((oldState) => oldState + 1);
	// 	} else if (deltaY < 0 && frameCounter > 0) {
	// 		setFrameCounter((oldState) => oldState - 1);
	// 	}
	// };

	return (
		<>
			<section
				className="flex flex-col justify-center items-center h-screen"
				// onWheel={(e) => {
				// 	frameUpdater(e.deltaY);
				// }}
			>
				<img
					src={mikoImg.src}
					className="xl:w-2/4 lg:w-1/3 md:w-2/4 w-3/4 h-auto rounded-3xl shadow-lg"
					alt="A portrait of Mihaylo Dimo"
				/>

				<h1 className="text-3xl font-bold">Hi, I'm Mihaylo.</h1>
				<h2 className="text-xl font-bold">and I'm a web developer</h2>
			</section>
			<section className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-4/5 flex flex-col justify-center h-screen">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
					corrupti! Perferendis fugit repellat ipsam voluptas similique
					voluptates porro culpa placeat! Porro commodi quam sint, aliquam sunt
					labore officia. Quos, cumque Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Cumque molestiae blanditiis dolorem vel aut vero
					dolorum porro iure quia illo nam ratione, nemo dolores? Reiciendis
					dolor voluptates iusto ipsa placeat.
				</p>
			</section>
			<section className="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 w-4/5 flex flex-col justify-center h-screen">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
					corrupti! Perferendis fugit repellat ipsam voluptas similique
					voluptates porro culpa placeat! Porro commodi quam sint, aliquam sunt
					labore officia. Quos, cumque Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Cumque molestiae blanditiis dolorem vel aut vero
					dolorum porro iure quia illo nam ratione, nemo dolores? Reiciendis
					dolor voluptates iusto ipsa placeat.
				</p>
			</section>
		</>
	);
}

export default Home;