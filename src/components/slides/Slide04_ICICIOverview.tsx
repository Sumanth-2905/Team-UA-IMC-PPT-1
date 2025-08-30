import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, CheckCircle, DollarSign } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide04_ICICIOverview: React.FC = () => {
  const brandPersonality = [
    { trait: 'Reliable', icon: Shield, color: 'from-orange-500 to-red-500' },
    { trait: 'Secure', icon: CheckCircle, color: 'from-blue-600 to-indigo-600' },
    { trait: 'Practical', icon: Target, color: 'from-orange-500 to-amber-500' }
  ];

  const focusAreas = [
    'Financial protection',
    'Investments', 
    'Certainty in uncertain times'
  ];

  const strategies = [
    {
      period: 'Pre-Covid',
      strategy: 'Aspirational planning (retirement, family future security)',
      color: 'from-orange-600 to-yellow-600',
      bgColor: 'from-orange-900/30 to-yellow-900/30'
    },
    {
      period: 'Post-Covid',
      strategy: 'Strong reassurance → "protection today for tomorrow," claim settlement guarantee, trust-building in crisis',
      color: 'from-blue-700 to-indigo-700',
      bgColor: 'from-blue-900/30 to-indigo-900/30'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-950 via-blue-950 to-indigo-950">
      {/* ICICI Brand Colors Background */}
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
          className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-blue-700/10 to-orange-600/10 bg-[length:300%_300%]"
        />
        
        {/* Shield-shaped floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            className="absolute"
            style={{
              left: `${15 + i * 13}%`,
              top: `${8 + i * 12}%`,
            }}
          >
            <Shield className="w-7 h-7 text-orange-400/30" />
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
          <div className="text-orange-300 text-lg mb-4">Slide 4 of 14</div>
          
          {/* ICICI Prudential Logo Area */}
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
                src={LOGOS.ICICI_PRUDENTIAL}
                alt="ICICI Prudential Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl text-white mb-2">
                <motion.span
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%]"
                >
                  ICICI Prudential
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-blue-300"
              >
                Life Insurance
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
              <span className="text-orange-400">Founded:</span> 2000 
              <span className="text-gray-400 mx-4">|</span> 
              <span className="text-blue-400">JV between ICICI Bank & Prudential Corporation Holdings, UK</span>
            </p>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                '0 0 20px rgba(249, 115, 22, 0.5)',
                '0 0 30px rgba(29, 78, 216, 0.5)',
                '0 0 20px rgba(249, 115, 22, 0.5)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl text-white"
          >
            "Hum Aur Aap, #ClaimForSure"
          </motion.div>
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
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-orange-500/25`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl text-white group-hover:text-orange-300 transition-colors">
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
          
          <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/20">
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
                      backgroundColor: ['#f97316', '#1d4ed8', '#f97316']
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

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-600 to-blue-700 rounded-3xl p-8 border border-orange-500/30">
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center space-x-4"
            >
              <DollarSign className="w-8 h-8 text-white" />
              <span className="text-2xl text-white">Practical Financial Protection</span>
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 right-20 w-28 h-28 border-2 border-orange-500/30 rounded-lg"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 left-20 w-20 h-20 border-2 border-blue-600/30 rounded-lg"
      />
    </section>
  );
};

export default Slide04_ICICIOverview;