import React from 'react';
import { motion } from 'motion/react';
import { Heart, Shield, Users, Zap } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide06_HDFCPostCovid: React.FC = () => {
  const communicationFeatures = [
    { feature: 'Tone', description: 'Emotional, empathetic, motivational', icon: Heart },
    { feature: 'Storytelling', description: 'Collective narration of shared Covid experiences', icon: Users },
    { feature: 'Visuals', description: 'Online classes, empty schools, parents\' struggles', icon: Shield },
    { feature: 'Emotions', description: 'Empathy, hope, trust, strength', icon: Zap }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-purple-950">
      {/* Resilient, hopeful background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 bg-[length:400%_400%]"
        />
        
        {/* Floating recovery symbols */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -35, 0],
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              delay: i * 0.6,
            }}
            className="absolute"
            style={{
              left: `${8 + i * 9}%`,
              top: `${10 + i * 9}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Shield className="w-6 h-6 text-blue-400/50" />
            ) : i % 3 === 1 ? (
              <Heart className="w-6 h-6 text-indigo-400/50" />
            ) : (
              <Zap className="w-6 h-6 text-purple-400/50" />
            )}
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
          <div className="text-blue-300 text-lg mb-4">Slide 6 of 14</div>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2"
              >
                <ImageWithFallback
                  src={LOGOS.HDFC_LIFE}
                  alt="HDFC Life Logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </motion.div>
              <h1 className="text-4xl md:text-5xl text-white">
                <motion.span
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%]"
                >
                  Post-Covid: HDFC Life
                </motion.span>
              </h1>
            </div>
          </motion.div>
        </motion.div>

        {/* Campaign Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 inline-block"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              "BounceBack Batch"
            </h2>
            <motion.p
              animate={{
                color: ['#60a5fa', '#6366f1', '#60a5fa'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl"
            >
              Resilience in Crisis
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Brief Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Brief Description</h3>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <motion.p
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              className="text-xl text-gray-200 leading-relaxed text-center"
            >
              Celebrates the resilience of the "Covid Batch." Highlights challenges like online schooling, financial struggles, 
              and parental health issues — yet shows how families emerged stronger with trust and support.
            </motion.p>
          </div>
        </motion.div>

        {/* Key Idea */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Key Idea / Focus</h3>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30"
          >
            <motion.div
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-center"
            >
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-xl text-white leading-relaxed">
                Families can <span className="text-blue-300">bounce back</span> from even the toughest times, with <span className="text-indigo-300">resilience and financial security</span>.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features of Communication */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Features of Communication</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communicationFeatures.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {item.feature}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Brand Positioning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center"
        >
          <h3 className="text-3xl text-white mb-8">Brand Positioning</h3>
          
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(59, 130, 246, 0.3)',
                '0 0 50px rgba(99, 102, 241, 0.4)',
                '0 0 30px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 border border-blue-400/30"
          >
            <div className="flex items-center justify-center space-x-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <div className="text-2xl text-white">
                HDFC Life = <span className="text-blue-200">safety net for recovery</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 text-lg text-blue-100"
            >
              "Sar Utha Ke Jiyo"
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide06_HDFCPostCovid;