interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	isHovered: boolean;
}

export default function FeatureCard ({ icon, title, description, isHovered } : FeatureCardProps) {
	return (
		<div className={`min-w-full min-h-[300px] flex flex-col items-center p-8 ${isHovered ? `bg-linear-to-b/oklch from-bg-light to-bg`
			: `bg-linear-to-t/oklch from-bg from-85% to-bg-light`}`}>
	  		<img src={icon} className="w-20 h-20 mb-4" alt={title} />
	  		<h3 className="text-2xl font-bold mb-6 text-text">{title}</h3>
	  		<p className="text-center text-[18px] text-text-muted">{description}</p>
		</div>
	);
};