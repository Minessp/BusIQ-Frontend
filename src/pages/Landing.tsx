import SliderCarousel from '../components/SliderCarousel';
import Logo from '../assets/busiq-logo.svg';
import { features } from '../data/features';
import { LoginCard, SignupCard } from '../components/InviteCard';
import InstagramLogo from '../assets/instagram-logo.svg';
import GithubLogo from '../assets/github-logo.svg';
import GmailLogo from '../assets/gmail-logo.svg';

export default function Landing() {
	return (
		<div className='font-inter bg-linear-to-b from-bg-light via-bg to-bg-dark min-h-screen text-shadow-2xs'>
			<header className='flex items-center justify-center pt-10 pb-2'>
				<img src={Logo} alt="logo" className='w-[150px] h-fit' />
			</header>
			<main className='min-h-auto'>
				<div className="mx-auto max-w-4xl text-center">
					<p className="mt-10 text-4xl font-bold tracking-tight text-text">
						Você por dentro do transporte coletivo de São Paulo
					</p>
					<p className="mt-6 text-lg/8 text-text-muted">
						O Busiq é uma plataforma que oferece informações sobre o transporte coletivo na cidade de São Paulo. Com dados atualizados diariamente, você pode planejar suas rotas com mais eficiência e evitar atrasos.
					</p>
					<div className='mb-20'>
						<SliderCarousel items={features}/>
					</div>
				</div>
				<div className='flex justify-evenly mb-16'>
					<LoginCard />
					<SignupCard />
				</div>
			</main>
			<footer>
				<div className='min-w-full min-h-32 flex justify-evenly items-center bg-bg inset-shadow-2xs'>
					<p>Desenvolvido por <strong>Minessp</strong></p>
					<div className='flex flex-col justify-center items-center'>
						<div>
							<h3>Contatos</h3>
						</div>
						<div className='flex'>
							<a href="https://www.instagram.com/minesssp/" target='_blank'>
								<img className='w-8' src={InstagramLogo} alt="Instagram logo" />
							</a>
							<a href="https://github.com/Minessp" target='_blank'>
								<img className='w-8' src={GithubLogo} alt="Github logo" />
							</a>
							<a href="mailto:paulosilva.jobs@gmail.com" target='_blank'>
								<img className='w-8' src={GmailLogo} alt="Gmail logo" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}