import { SliderCarouselButtonLeft, SliderCarouselButtonRight } from './CarouselControls';
import { features } from '../data/features';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
}

export default function FeatureCard ({ icon, title, description } : FeatureCardProps) {
	return (
		<div className="min-w-full min-h-[300px] flex flex-col items-center p-8 bg-primary rounded-3xl">
	  		<img src={icon} className="w-20 h-20 mb-4" alt={title} />
	  		<h3 className="text-2xl font-semibold mb-6 text-text">{title}</h3>
	  		<p className="text-center text-[18px] text-highlight font-semibold">{description}</p>
			<div className='flex mt-auto items-center'>
				<SliderCarouselButtonLeft />
				{features.map((feature) => (
                	<div key={feature.title} className='w-3 h-3 mx-2 bg-white rounded-full' />
            	))}
				<SliderCarouselButtonRight />
			</div>
		</div>
	);
};