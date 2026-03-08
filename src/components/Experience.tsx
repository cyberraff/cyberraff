import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const experiences = [
		{
			type: 'work',
			title: 'Senior Blockchain Developer',
			company: 'DeFi Labs',
			period: '2022 - Present',
			description:
				'Leading development of decentralized finance protocols and smart contract infrastructure.',
			achievements: [
				'Developed and deployed 10+ smart contracts managing $50M+ in TVL',
				'Built cross-chain bridge connecting Ethereum and Polygon networks',
				'Reduced gas costs by 40% through contract optimization',
			],
		},
		{
			type: 'work',
			title: 'Fullstack Developer',
			company: 'TechStart Inc',
			period: '2020 - 2022',
			description:
				'Built scalable web applications and led migration to microservices architecture.',
			achievements: [
				'Architected and implemented RESTful APIs serving 1M+ daily requests',
				'Improved application performance by 60% through optimization',
				'Mentored team of 5 junior developers',
			],
		},
		{
			type: 'education',
			title: 'Master of Computer Science',
			company: 'Stanford University',
			period: '2018 - 2020',
			description:
				'Specialized in distributed systems and blockchain technology.',
			achievements: [
				'Published research on consensus algorithms',
				'GPA: 3.9/4.0',
				'Teaching Assistant for Blockchain Fundamentals course',
			],
		},
		{
			type: 'work',
			title: 'Frontend Developer',
			company: 'Creative Digital',
			period: '2018 - 2020',
			description:
				'Developed responsive web applications and interactive user interfaces.',
			achievements: [
				'Created reusable component library used across 15+ projects',
				'Implemented automated testing reducing bugs by 35%',
				'Led UI/UX redesign increasing user engagement by 50%',
			],
		},
	];

	return (
		<section
			id='experience'
			className='relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30'>
			<div className='max-w-5xl mx-auto' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Experience & Education
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto' />
					<h3 className='text-xl font-semibold text-cyan-400 mb-6 mt-6'>
						Dummy Experiences
					</h3>
				</motion.div>

				<div className='relative'>
					{/* Timeline line */}
					<div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block' />

					<div className='space-y-12'>
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -50 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{
									duration: 0.6,
									delay: index * 0.1,
								}}
								className='relative md:pl-20'>
								{/* Timeline dot */}
								<div className='absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 border-4 border-slate-950 hidden md:block' />

								<div className='bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-colors'>
									<div className='flex items-start gap-4 mb-4'>
										<div className='p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex-shrink-0'>
											{exp.type === 'work' ? (
												<Briefcase className='w-6 h-6 text-cyan-400' />
											) : (
												<GraduationCap className='w-6 h-6 text-cyan-400' />
											)}
										</div>
										<div className='flex-1'>
											<h3 className='text-xl font-semibold text-slate-200 mb-1'>
												{exp.title}
											</h3>
											<div className='flex flex-wrap items-center gap-3 text-slate-400 mb-2'>
												<span className='font-medium text-cyan-400'>
													{exp.company}
												</span>
												<span className='text-slate-500'>
													•
												</span>
												<span>{exp.period}</span>
											</div>
											<p className='text-slate-300 mb-4'>
												{exp.description}
											</p>
											<ul className='space-y-2'>
												{exp.achievements.map(
													(achievement, i) => (
														<li
															key={i}
															className='flex items-start gap-2 text-slate-400 text-sm'>
															<span className='text-cyan-400 mt-1'>
																▹
															</span>
															<span>
																{achievement}
															</span>
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
