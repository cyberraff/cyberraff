import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { FloatingElements } from './FloatingElements';

export function Hero() {
	const scrollToNext = () => {
		document
			.querySelector('#about')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<section
			id='home'
			className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			<FloatingElements />

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='text-cyan-400 text-lg mb-4'>
						Hello, I'm
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>
						Raphael Ejeogo
					</motion.h1>

					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className='text-2xl sm:text-3xl md:text-4xl text-slate-300 mb-6'>
						Fullstack Web & Web3 Developer
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className='text-lg text-slate-400 max-w-2xl mx-auto mb-8'>
						Building decentralized applications and modern web
						experiences that shape the future of the internet.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className='flex justify-center gap-4 mb-12'>
						<a
							href='https://github.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700 hover:border-cyan-500'>
							<Github className='w-6 h-6 text-slate-300' />
						</a>
						<a
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'
							className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700 hover:border-cyan-500'>
							<Linkedin className='w-6 h-6 text-slate-300' />
						</a>
						<a
							href='mailto:contact@example.com'
							className='p-3 bg-slate-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500/20 transition-colors border border-slate-700 hover:border-cyan-500'>
							<Mail className='w-6 h-6 text-slate-300' />
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
						className='flex justify-center gap-4'>
						<button
							onClick={() =>
								document
									.querySelector('#projects')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300'>
							View Projects
						</button>
						<button
							onClick={() =>
								document
									.querySelector('#contact')
									?.scrollIntoView({ behavior: 'smooth' })
							}
							className='px-8 py-3 border border-cyan-500 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300'>
							Get in Touch
						</button>
					</motion.div>
				</motion.div>
			</div>

			<motion.button
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1, repeat: Infinity, duration: 2 }}
				onClick={scrollToNext}
				className='absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-bounce'>
				<ChevronDown size={32} />
			</motion.button>
		</section>
	);
}
