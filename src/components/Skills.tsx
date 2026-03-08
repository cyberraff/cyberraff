import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export function Skills() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	const skillCategories = [
		{
			title: 'Frontend',
			// skills: [
			// 	{ name: 'React' },
			// 	{ name: 'TypeScript' },
			// 	{ name: 'Next.js' },
			// 	{ name: 'Tailwind CSS' },
			// 	{ name: 'Shadcn UI' },
			// ],
			skills: [
				{ name: 'React', level: 90 },
				{ name: 'TypeScript', level: 80 },
				{ name: 'Next.js', level: 85 },
				{ name: 'Tailwind CSS', level: 90 },
				{ name: 'Shadcn UI', level: 80 },
			],
		},
		{
			title: 'Backend',
			skills: [
				{ name: 'Node.js', level: 85 },
				{ name: 'Express', level: 80 },
				{ name: 'REST APIs', level: 85 },
				{ name: 'Authentication (JWT/Cookies)', level: 80 },
				// { name: 'GraphQL', level: 55 },
			],
		},
		{
			title: 'Databases',
			skills: [
				{ name: 'MongoDB', level: 85 },
				{ name: 'PostgreSQL', level: 75 },
				{ name: 'Prisma', level: 70 },
				{ name: 'Redis', level: 60 },
			],
		},
		// {
		// 	title: 'Web3',
		// 	skills: [
		// 		{ name: 'Solidity', level: 88 },
		// 		{ name: 'Ethers.js', level: 90 },
		// 		{ name: 'Hardhat', level: 85 },
		// 		{ name: 'IPFS', level: 78 },
		// 		{ name: 'The Graph', level: 75 },
		// 	],
		// },
		{
			title: 'Tools',
			skills: [
				{ name: 'Git', level: 90 },
				{ name: 'Docker', level: 70 },
				// { name: 'AWS', level: 80 },
				{ name: 'CI/CD', level: 65 },
				{ name: 'Linux', level: 75 },
				{ name: 'Vercel', level: 80 },
			],
		},
	];

	return (
		<section
			id='skills'
			className='relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30'>
			<div className='max-w-7xl mx-auto' ref={ref}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className='text-center mb-16'>
					<h2 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
						Skills & Expertise
					</h2>
					<div className='w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto' />
				</motion.div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{
								duration: 0.6,
								delay: categoryIndex * 0.1,
							}}
							className='bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-colors'>
							<h3 className='text-xl font-semibold text-cyan-400 mb-6'>
								{category.title}
							</h3>
							<div className='space-y-4'>
								{category.skills.map((skill, skillIndex) => (
									<div key={skill.name}>
										<div className='flex justify-between mb-2'>
											<span className='text-slate-300 text-sm'>
												{skill.name}
											</span>
											<span className='text-slate-400 text-sm'>
												{skill.level}%
											</span>
										</div>
										{/* <div className='h-2 bg-slate-700/50 rounded-full overflow-hidden'>
											<motion.div
												initial={{ width: 0 }}
												animate={
													inView
														? {
																width: `${skill.level}%`,
															}
														: {}
												}
												transition={{
													duration: 1,
													delay:
														categoryIndex * 0.1 +
														skillIndex * 0.1,
												}}
												className='h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full'
											/>
										</div> */}
									</div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
