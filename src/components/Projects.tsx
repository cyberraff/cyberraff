import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const projects = [
		{
			title: 'DeFi Trading Platform',
			description:
				'A decentralized exchange built on Ethereum with automated market making and yield farming capabilities.',
			tags: ['Solidity', 'React', 'Ethers.js', 'Hardhat'],
			image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
		{
			title: 'NFT Marketplace',
			description:
				'A full-featured NFT marketplace with minting, trading, and auction functionality on Polygon.',
			tags: ['Next.js', 'TypeScript', 'IPFS', 'Polygon'],
			image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
		{
			title: 'DAO Governance Platform',
			description:
				'Decentralized governance system with proposal creation, voting, and treasury management.',
			tags: ['Solidity', 'Vue.js', 'The Graph', 'Arweave'],
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
		{
			title: 'SaaS Analytics Dashboard',
			description:
				'Real-time analytics platform with advanced data visualization and reporting capabilities.',
			tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
		{
			title: 'Web3 Social Network',
			description:
				'Decentralized social media platform with token-gated content and on-chain reputation system.',
			tags: ['Next.js', 'Solidity', 'Ceramic', 'Lens Protocol'],
			image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
		{
			title: 'AI-Powered Code Assistant',
			description:
				'VSCode extension that provides intelligent code suggestions and documentation using machine learning.',
			tags: ['TypeScript', 'Python', 'TensorFlow', 'VSCode API'],
			image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop',
			github: 'https://github.com',
			demo: 'https://example.com',
		},
	];

	return (
		<section id='projects' className='relative py-20 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Featured Projects
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto' />
					<h3 className='text-xl font-semibold text-cyan-400 mb-6'>
						Dummy Projects
					</h3>
				</motion.div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className='group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300'>
							<div className='relative h-48 overflow-hidden'>
								<ImageWithFallback
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60' />
							</div>

							<div className='p-6'>
								<h3 className='text-xl font-semibold text-slate-200 mb-2'>
									{project.title}
								</h3>
								<p className='text-slate-400 mb-4 text-sm'>
									{project.description}
								</p>

								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='px-3 py-1 text-xs bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20'>
											{tag}
										</span>
									))}
								</div>

								<div className='flex gap-3'>
									<a
										href={project.github}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors text-slate-300 text-sm'>
										<Github size={16} />
										Code
									</a>
									<a
										href={project.demo}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-white text-sm'>
										<ExternalLink size={16} />
										Demo
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
