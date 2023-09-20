import { useState } from "react";
import useMediaQuery from "../utils/useMediaQuery";
// import { motion, AnimatePresence } from "framer-motion";

function Nav() {
	const [navToggle, setNavToggled] = useState(false);
	const matches = useMediaQuery("(min-width: 992px)");

	return (
			// <div className={`${matches ? "" : "sticky top-0"} bg-slate-100 `}>
		// <div className={`sticky top-0 bg-slate-100 z-10`}>
		// 		<div
		// 			className={`flex flex-row items-center ${
		// 				matches ? "justify-around" : "justify-between"
		// 			}  z-10`}
		// 		>
		// 			<AnimatePresence>
		// 				{navToggle && (
		// 					<>
		// 						<motion.nav
		// 							initial={{ x: -500 }}
		// 							animate={{ x: 0, backgroundColor: "#73937E" }}
		// 							exit={{ x: -1000 }}
		// 							transition={{
		// 								type: "spring",
		// 								duration: 0.5,
		// 								repeatType: "reverse",
		// 							}}
		// 							className={`fixed flex bottom-0 left-0 w-full h-full justify-center items-centre border-slate-900 z-40`}
		// 						>
		// 							<div className="flex flex-col gap-24 text-2xl justify-center items-centre text-center text-white">
		// 								<a href="/">Home</a>
		// 								<a href="/projects">Projects</a>
		// 								<a href="about">Contacts</a>
		// 							</div>
		// 						</motion.nav>
		// 					</>
		// 				)}
		// 			</AnimatePresence>
		// 			<h1 className="p-4">Logo comes here</h1>
		// 			{matches ? (
		// 				<nav className="flex flex-row justify-center [&>*]:p-4">
		// 					<a href="/" className="hover:underline">
		// 						Home
		// 					</a>
		// 					<a href="/contacts" className="hover:underline">
		// 						Contacts
		// 					</a>
		// 					<a href="/projects" className="hover:underline">
		// 						Projects
		// 					</a>
		// 				</nav>
		// 			) : (
		// 				<div
		// 					className="space-y-2 cursor-pointer p-4 z-50"
		// 					onClick={() => setNavToggled((oldValue) => !oldValue)}
		// 				>
		// 					<span className="block h-0.5 w-8 bg-black"></span>
		// 					<span className="block h-0.5 w-8 bg-black"></span>
		// 					<span className="block h-0.5 w-8 bg-black"></span>
		// 				</div>
		// 			)}
		// 		</div>
		// 	</div>
	);
}

export default Nav;
