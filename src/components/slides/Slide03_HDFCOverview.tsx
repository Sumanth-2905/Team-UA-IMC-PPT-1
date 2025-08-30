import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Shield } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide03_HDFCOverview: React.FC = () => {
  const brandPersonality = [
    { trait: 'Family-oriented', icon: Heart, color: 'from-red-500 to-pink-500' },
    { trait: 'Emotional', icon: Users, color: 'from-blue-500 to-indigo-500' },
    { trait: 'Trustworthy', icon: Shield, color: 'from-green-500 to-emerald-500' }
  ];

  const focusAreas = [
    'Empowering families',
    'Ensuring dignity', 
    'Enabling independence'
  ];

  const strategies = [
    {
      period: 'Pre-Covid',
      strategy: 'Aspirational & future planning (education, retirement, independence)',
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-900/30 to-cyan-900/30'
    },
    {
      period: 'Post-Covid',
      strategy: 'Emotional resilience, family recovery, and collective strength (BounceBack Batch)',
      color: 'from-red-600 to-pink-600',
      bgColor: 'from-red-900/30 to-pink-900/30'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-950 via-blue-950 to-purple-950">
      {/* HDFC Brand Colors Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 bg-[length:300%_300%]"
        />
        
        {/* Heart-shaped floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className="absolute"
            style={{
              left: `${20 + i * 12}%`,
              top: `${10 + i * 15}%`,
            }}
          >
            <Heart className="w-6 h-6 text-red-400/40" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="text-red-300 text-lg mb-4">Slide 3 of 14</div>
          
          {/* HDFC Life Logo Area */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl p-2"
            >
              <ImageWithFallback
                src={LOGOS.HDFC_LIFE}
                alt="HDFC Life Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl text-white mb-2">
                <motion.span
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%]"
                >
                  HDFC Life
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-blue-300"
              >
                "Sar Utha Ke Jiyo"
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 inline-block">
            <p className="text-white text-lg">
              <span className="text-red-400">Founded:</span> 2000 
              <span className="text-gray-400 mx-4">|</span> 
              <span className="text-blue-400">JV between HDFC Ltd & Standard Life</span>
            </p>
          </div>
        </motion.div>

        {/* Brand Personality */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white text-center mb-8">Brand Personality</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPersonality.map((item, index) => (
              <motion.div
                key={item.trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-500">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-red-500/25`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-white group-hover:text-red-300 transition-colors">
                    {item.trait}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white text-center mb-8">Focus Areas</h2>
          
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-red-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      backgroundColor: ['#ef4444', '#3b82f6', '#ef4444']
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="w-3 h-3 rounded-full flex-shrink-0"
                  />
                  <p className="text-white text-lg">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Communication Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <h2 className="text-3xl text-white text-center mb-8">Communication Strategy</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategies.map((strategy, index) => (
              <motion.div
                key={strategy.period}
                initial={{ opacity: 0, x: index === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.8 + index * 0.3 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${strategy.bgColor} backdrop-blur-xl rounded-3xl p-8 border border-white/20 h-full hover:border-white/40 transition-all duration-500`}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`inline-block px-6 py-3 bg-gradient-to-r ${strategy.color} rounded-2xl mb-6`}
                  >
                    <h3 className="text-xl text-white">{strategy.period}</h3>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    className="text-gray-200 text-lg leading-relaxed"
                  >
                    {strategy.strategy}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tagline Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-center mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                '0 0 20px rgba(239, 68, 68, 0.5)',
                '0 0 30px rgba(59, 130, 246, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.5)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl text-white"
          >
            "Live with your head held high"
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-32 h-32 border-2 border-red-500/30 rounded-full"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-24 h-24 border-2 border-blue-500/30 rounded-full"
      />
    </section>
  );
};

export default Slide03_HDFCOverview;