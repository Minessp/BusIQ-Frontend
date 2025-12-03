import { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';
import { SliderCarouselButtonLeft, SliderCarouselButtonRight } from './CarouselControls';
import { features } from '../data/features';

interface SliderCarouselProps {
	items: {
		icon: string;
		title: string;
		description: string;
	}[];
}

export default function SliderCarousel ({ items } : SliderCarouselProps) {
	const [index, setIndex] = useState<number>(1);
	const [animating, setAnimating] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	const extended = [
		items[items.length - 1],
		...items,
		items[0]
	];

	const realIndex = (index - 1 + items.length) % items.length;

	const goToNextSlide = () => {
		setIndex((i) => i < extended.length - 1 ? (i + 1) : i);
	};

	const goToPrevSlide = () => {
		setIndex((i) => i > 0 ? (i - 1) : i);
	};

	const handleTransitionEnd = () => {
		if (index === extended.length - 1) {
			setAnimating(false);
			setIndex(1);
		}
		else if (index === 0) {
			setAnimating(false);
			setIndex(extended.length - 2);
		}
	};

	useEffect(() => {
  		if (!animating) {
			requestAnimationFrame(() => setAnimating(true));
  		}
	}, [animating]);

  	return (
		<div className="relative flex justify-center w-full mt-10 overflow-hidden rounded-3xl hover:scale-[102%] transition-all duration-300 shadow-2xl"
			onMouseEnter={() => {setIsHovered(true)}}
			onMouseLeave={() => {setIsHovered(false)}}>
			<div className={`flex ${animating ? "transition-transform duration-500" : ""}`}
				onTransitionEnd={handleTransitionEnd}
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				{extended.map((item, idx) => (
					<FeatureCard
						key={idx}
						icon={item.icon}
						title={item.title}
						description={item.description}
						isHovered={isHovered}
					/>
				))};
			</div>
			<div className='absolute bottom-0 left-0 w-full py-3 flex items-center justify-center rounded-b-3xl'>
					<SliderCarouselButtonLeft onClick={goToPrevSlide} />
					{features.map((feature, idx) => (
						<div key={feature.title} className={`
							w-3 h-3 mx-2 rounded-full
							${idx === realIndex ? "bg-primary" : "bg-primary/30"}
							transition-all duration-300`} 
						/>
					))}
					<SliderCarouselButtonRight onClick={goToNextSlide} />
				</div>
		</div>
  	);
};