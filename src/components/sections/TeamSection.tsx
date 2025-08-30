import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, Star, Trophy } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Tejasri',
      role: 'Research Lead',
      contribution: 'Industry analysis and consumer perception research',
      color: 'from-pink-400 to-red-500',
      bgColor: 'from-pink-50 to-red-50'
    },
    {
      name: 'Sumanth',
      role: 'Brand Analyst',
      contribution: 'HDFC Life campaign analysis and brand positioning',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      name: 'Sasank',
      role: 'Strategy Consultant',
      contribution: 'ICICI Prudential analysis and competitive insights',
      color: 'from-green-400 to-teal-500',
      bgColor: 'from-green-50 to-teal-50'
    },
    {
      name: 'Rishabh',
      role: 'Communications Expert',
      contribution: 'IMC framework development and presentation design',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    }
  ];

  const achievements = [
    { icon: Trophy, label: 'Comprehensive Analysis', count: '4 Campaigns' },
    { icon: Star, label: 'Brand Comparisons', count: '2 Major Brands' },
    { icon: Heart, label: 'Consumer Insights', count: '360° Perspective' }
  ];

  return (
    <section id="team" className="min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Thank You Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-6xl mb-6"
          >
            🎉
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl text-white mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Thank You
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            For your attention and time in reviewing our analysis of Integrated Marketing Communication 
            strategies in the Life Insurance sector during the COVID-19 transformation period.
          </p>
        </motion.div>

        {/* Project Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20"
            >
              <achievement.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl text-white mb-1">{achievement.count}</div>
              <div className="text-sm text-gray-300">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-white text-center mb-12">Our Research Team</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                }}
                className={`bg-gradient-to-br ${member.bgColor} rounded-2xl p-6 text-center shadow-xl border border-white/20 backdrop-blur-sm group`}
              >
                {/* Avatar */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <User className="w-10 h-10 text-white" />
                </motion.div>

                <h4 className="text-xl text-gray-800 mb-2">{member.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.contribution}</p>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl text-white mb-6">Project Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-lg text-pink-300">Research Focus</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Comparative analysis of IMC strategies between HDFC Life and ICICI Prudential 
                  before and after COVID-19 pandemic impact.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg text-blue-300">Key Findings</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Consumer perception shifted from "good to have" to "must have," driving 
                  fundamental changes in brand communication strategies.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg text-green-300">Strategic Impact</h4>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Demonstrated the critical importance of adaptable IMC frameworks that can 
                  respond to external crises while maintaining brand authenticity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl mb-4"
          >
            ✨
          </motion.div>
          
          <p className="text-lg text-gray-300">
            We hope this presentation provides valuable insights into the evolution of 
            marketing communication strategies in the life insurance industry.
          </p>
          
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-8 text-yellow-400"
          >
            <Heart className="w-8 h-8 mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;