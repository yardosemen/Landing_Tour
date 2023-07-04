import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleNav = () => {
		setNav(!nav);
		if (!nav) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "scroll";
		}
	};
	return (
		<div className="absolute w-full flex justify-between p4 items-center">
			<h1 className="text-white font-bold text-2xl z-20">Experiences</h1>
			<HiMenuAlt3
				className="size={25} z-20 text-white cursor-pointer"
				onClick={handleNav}
			/>
			<div
				className={
					nav
						? " ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-cpl z-10"
						: "absolute top-8 h-screen left-[-100%] ease-in duration-500 z-10"
				}
			>
				<ul className="flex flex-col fixed  w-full h-full items-center justify-center">
					<li className="font-bold text-3xl p-8">Home</li>
					<li className="font-bold text-3xl p-8">Destination</li>
					<li className="font-bold text-3xl p-8">Reservation</li>
					<li className="font-bold text-3xl p-8">Amenities</li>
					<li className="font-bold text-3xl p-8">Rooms</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
