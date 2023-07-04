import React from "react";

const Plan = () => {
	return (
		<div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
			{/*left side*/}
			<div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
				<img
					className=" row-span-3 object-cover w-full h-full p-2"
					src="https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="1"
				/>
				<img
					className=" row-span-2 object-cover w-full h-full p-2"
					src="https://images.pexels.com/photos/2555237/pexels-photo-2555237.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="2"
				/>
				<img
					className=" row-span-2 object-cover w-full h-full p-2"
					src="https://images.pexels.com/photos/1650860/pexels-photo-1650860.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="3"
				/>
				<img
					className=" row-span-3 object-cover w-full h-full p-2"
					src="https://images.pexels.com/photos/2120624/pexels-photo-2120624.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="4"
				/>
				<img
					className="row-span-2 object-cover w-full h-full p-2"
					src="https://images.pexels.com/photos/1480602/pexels-photo-1480602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="5"
				/>
			</div>
			{/*right side*/}
			<div className="flex flex-col h-full justify-center">
				<h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
				<p className="text-2xl py-6">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi,
					inventore.
				</p>
				<p className="pb-6 ">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
					cupiditate commodi minima eos incidunt voluptatibus dolor expedita
					officiis sint. Cumque saepe totam cum quia officiis distinctio illo!
					Iste, laudantium fugit.
				</p>
				<div className="flex gap-4">
					<button className="border-black mr4 hover:shadow-xl">
						Learn More
					</button>
					<button className="bg-black text-white border-black hover:shadow-xl ">
						Book Your Trip
					</button>
				</div>
			</div>
		</div>
	);
};

export default Plan;
