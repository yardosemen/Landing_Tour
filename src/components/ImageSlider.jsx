import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
	const slides = [
		{
			url: "https://images.pexels.com/photos/10692501/pexels-photo-10692501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Fish",
		},
		{
			url: "https://images.pexels.com/photos/5677126/pexels-photo-5677126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "custom fish",
		},
		{
			url: "https://images.pexels.com/photos/7243421/pexels-photo-7243421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "Fishes",
		},
		{
			url: "https://images.pexels.com/photos/6025655/pexels-photo-6025655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			title: "sushi",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIdex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIdex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIdex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIdex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<div className="max-w-[1400px] h-[680px] w-full m-auto py-16 px-4  relative grouphover: ">
			<div
				className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
				style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
			></div>
			{/*left Arrow*/}
			<div className="absolute top-[50%] -translate-x-0 left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer ">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			{/*right Arrow*/}
			<div className="absolute top-[50%] -translate-x-0 right-5 text-2xl rounded-full p-2 group-hover: bg-black/20 text-white cursor-pointer ">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						className="text-2xl cursor-pointer"
						key={slideIndex}
						onClick={() => {
							goToSlide(slideIndex);
						}}
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
