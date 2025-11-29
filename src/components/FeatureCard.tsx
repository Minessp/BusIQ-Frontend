interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
}

export default function FeatureCard ({ icon, title, description } : FeatureCardProps) {
	return (
		<div className="min-w-full flex flex-col items-center p-8 bg-white/60 backdrop-blur-xl rounded-3xl ">
	  		<img src={icon} className="w-20 h-20 mb-4" alt={title} />
	  		<h3 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h3>
	  		<p className="text-gray-600 text-center">{description}</p>
		</div>
	);
};