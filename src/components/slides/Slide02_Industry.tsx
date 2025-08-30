import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Shield, DollarSign, AlertTriangle } from 'lucide-react';

const Slide02_Industry: React.FC = () => {
  const keyPoints = [
    {
      icon: TrendingUp,
      title: 'Market Size & Growth',
      description: "India's life insurance sector is one of the largest in the world, with penetration steadily increasing.",
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'Pre-Covid Perception',
      description: 'Life insurance was largely perceived as a long-term savings or investment product (child\'s education, retirement).',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: AlertTriangle,
      title: 'Covid Impact',
      description: 'Sudden rise in demand → Life insurance shifted from optional financial planning to a necessity for survival and protection.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Key Change',
      description: 'Insurance transformed from "investment for tomorrow" → to "security for today."',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const impactPoints = [
    'Increase in term plan adoption, especially health-linked and protection-first products',
    'Higher consumer awareness of mortality and financial risks'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating Data Points */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-3 h-3 bg-blue-400 rounded-full"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="text-blue-300 text-lg mb-4">Slide 2 of 14</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Life Insurance Market in India
            </motion.span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full hover:bg-white/10 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25`}
                >
                  <point.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {point.title}
                </h3>
                
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  {point.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20 mb-12"
        >
          <h3 className="text-2xl text-red-300 mb-6 flex items-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-red-500 rounded-full mr-3"
            />
            Impact of Covid
          </h3>
          
          <div className="space-y-4">
            {impactPoints.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"
                />
                <p className="text-orange-200 text-lg leading-relaxed">{impact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Transformation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-2xl text-white mb-6">The Great Transformation</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/30"
              >
                <span className="text-2xl text-red-300">"Investment for tomorrow"</span>
              </motion.div>
              
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl text-yellow-400"
              >
                →
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/30"
              >
                <span className="text-2xl text-green-300">"Security for today"</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-400/30 rounded-full"
      />
    </section>
  );
};

export default Slide02_Industry;