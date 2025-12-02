import { useState, useEffect } from 'react';
import FeatureCard from './FeatureCard';

interface SliderCarouselProps {
	items: {
		icon: string;
		title: string;
		description: string;
	}[];
}

export default function SliderCarousel ({ items } : SliderCarouselProps) {
	const [index, setIndex] = useState<number>(0);
	const [animating, setAnimating] = useState(true);

	const extended = [
		...items,
		items[0]
	];

	const goToNextSlide = () => {
		setIndex((i) => (i + 1));
	};

	const goToPrevSlide = () => {
		setIndex((i) => (i - 1));
	};

	const handleTransitionEnd = () => {
  		if (index === extended.length - 1) {
		setAnimating(false);
		setIndex(0);
  	}
};

	useEffect(() => {
  		if (!animating) {
			requestAnimationFrame(() => setAnimating(true));
  		}
	}, [animating]);

  	return (
	<div className="relative w-full mx-auto mt-10 overflow-x-hidden">
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
			/>
		))};
	  	</div>
		
	</div>
  	);
};