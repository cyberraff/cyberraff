import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Rocket, Zap } from 'lucide-react';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technologies and creative solutions.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every aspect for lightning-fast user experiences.',
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              I'm a passionate fullstack developer specializing in blockchain technology and decentralized applications. 
              With expertise in both traditional web development and Web3 ecosystems, I bridge the gap between 
              centralized and decentralized worlds.
            </p>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              My journey in tech has led me to work with cutting-edge frameworks, smart contracts, and DeFi protocols. 
              I believe in building solutions that are not only technically robust but also user-friendly and accessible.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new blockchain protocols, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>WorkspaceHub
A multi-tenant SaaS dashboard for teams to manage internal tools, users, and resources.WorkspaceHub
A multi-tenant SaaS dashboard for teams to manage internal tools, users, and resources.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index + 0.6 }}
                className="flex gap-4 p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
