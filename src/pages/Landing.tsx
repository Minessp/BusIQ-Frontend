import SliderCarousel from '../components/SliderCarousel';
import Logo from './../assets/busiq-logo.svg';
import { features } from '../data/features';

export default function Landing() {
	return (
		<body className='font-inter bg-linear-to-b from-bg-light via-bg to-bg-dark min-h-screen'>
			<header className='flex items-center justify-center pt-10 pb-2'>
				<img src={Logo} alt="logo" className='w-[150px] h-fit' />
			</header>
			<div>
				<div className="mx-auto max-w-4xl text-center">
					<p className="mt-10 text-4xl font-bold tracking-tight text-text">
						Você por dentro do transporte coletivo de São Paulo
					</p>
					<p className="mt-6 text-lg/8 font-regular text-text-muted">
						O Busiq é uma plataforma que oferece informações sobre o transporte coletivo na cidade de São Paulo. Com dados atualizados diariamente, você pode planejar suas rotas com mais eficiência e evitar atrasos.
					</p>
					<div className='mb-20'>
						<SliderCarousel items={features}/>
					</div>
				</div>
			</div>
		</body>
	);
}