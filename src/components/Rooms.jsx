import React from "react";

const Rooms = () => {
	return (
		<div className="max-w-[1400px] h-[800px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
			<div className="lg:top-20 relative lg:col-span-1 col-span-2">
				<h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
				<p className="pt-4">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum iusto
					amet perspiciatis at molestias adipisci!
				</p>
			</div>
			<div className="grid grid-cols-2 col-span-2 gap-2">
				<img
					className="object-cover w-full h-full"
					src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="room1"
				/>
				<img
					className="row-span-2 object-cover w-full h-full"
					src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="room2"
				/>
				<img
					className="object-cover w-full h-full"
					src="https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					alt="room3"
				/>
			</div>
		</div>
	);
};

export default Rooms;
