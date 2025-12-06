interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
	isHovered: boolean;
}

export default function FeatureCard ({ icon, title, description, isHovered } : FeatureCardProps) {
	return (
		<div className={`min-w-full min-h-[300px] flex flex-col items-center p-8 ${isHovered ? `root:bg-linear-to-b/oklch root:from-bg-light root:to-bg dark:bg-bg-light`
			: `bg-bg`}`}>
	  		<img src={icon} className="w-20 h-20 mb-4 dark:invert" alt={title} />
	  		<h3 className="text-2xl font-bold mb-6 text-text">{title}</h3>
	  		<p className="text-center text-[18px] text-text-muted">{description}</p>
		</div>
	);
};