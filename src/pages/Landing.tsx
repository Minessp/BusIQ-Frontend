import SliderCarousel from '../components/SliderCarousel';
import Logo from './../assets/busiq-logo.svg';
import { features } from '../data/features';

export default function Landing() {
	return (
		<body className='bg-white overflow-hidden'>
			<div className='absolute inset-0 -z-10 bg-linear-to-t from-indigo-300 via-blue-100 to-blue-300 opacity-30 blur-3xl'/>
			<div className="absolute -z-10 top-0 w-96 h-96 bg-rose-200 opacity-30 rounded-full blur-3xl"></div>
			<div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-sky-200 opacity-30 rounded-full blur-3xl"></div>
			<header className='flex flex-col items-center justify-center pt-10 pb-6'>
				<img src={Logo} alt="logo" className='w-[150px] h-fit' />
			</header>
			<div>
				<div className="mx-auto max-w-4xl text-center">
					<p className="mt-10 text-4xl font-bold tracking-tight text-blue-600">
						Você por dentro do transporte coletivo de São Paulo
					</p>
					<p className="mt-6 text-lg/8 text-gray-700">
						O Busiq é uma plataforma que oferece informações sobre o transporte coletivo na cidade de São Paulo. Com dados atualizados diariamente, você pode planejar suas rotas com mais eficiência e evitar atrasos.
					</p>
					<div>
						<SliderCarousel items={features}/>
					</div>
				</div>
			</div>
		</body>
	);
}