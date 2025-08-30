import React from 'react';
import { motion } from 'motion/react';
import { Heart, Star, TrendingUp, Users } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide05_HDFCPreCovid: React.FC = () => {
  const communicationFeatures = [
    { feature: 'Tone', description: 'Inspirational, empowering, warm', icon: Heart },
    { feature: 'Storytelling', description: 'Father-daughter bond, relatable everyday life', icon: Users },
    { feature: 'Visuals', description: 'Studying, emotional family scenes', icon: Star },
    { feature: 'Emotions', description: 'Pride, responsibility, love, empowerment', icon: TrendingUp }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-950 via-pink-950 to-purple-950">
      {/* Warm, emotional background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-pink-500/15 to-purple-500/15 bg-[length:400%_400%]"
        />
        
        {/* Floating hearts and family elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className="absolute"
            style={{
              left: `${10 + i * 11}%`,
              top: `${5 + i * 12}%`,
            }}
          >
            {i % 2 === 0 ? (
              <Heart className="w-5 h-5 text-red-400/40" />
            ) : (
              <Users className="w-5 h-5 text-pink-400/40" />
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
          <div className="text-pink-300 text-lg mb-4">Slide 5 of 14</div>
          
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
                  className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%]"
                >
                  Pre-Covid: HDFC Life
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
            className="bg-gradient-to-r from-red-900/40 to-pink-900/40 backdrop-blur-xl rounded-3xl p-8 border border-red-500/30 inline-block"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">
              "Apno ko apne dum pe jeena sikhao"
            </h2>
            <motion.p
              animate={{
                color: ['#f472b6', '#ec4899', '#f472b6'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl"
            >
              #MyMomentOfPride
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
              A heartfelt father-daughter story. Shows a father preparing his daughter to be confident and self-reliant, 
              highlighting his role in enabling her dreams.
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
            className="bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-8 border border-red-400/30"
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
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <p className="text-xl text-white leading-relaxed">
                Life insurance is not just about protection, but about <span className="text-red-300">empowering loved ones</span> to live <span className="text-pink-300">independently and freely</span>.
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
                      className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-red-500/25"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl text-white mb-2 group-hover:text-red-300 transition-colors">
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
                '0 0 30px rgba(239, 68, 68, 0.3)',
                '0 0 50px rgba(236, 72, 153, 0.4)',
                '0 0 30px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 border border-red-400/30"
          >
            <div className="flex items-center justify-center space-x-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
              <div className="text-2xl text-white">
                HDFC Life = <span className="text-red-200">dignity</span>, <span className="text-pink-200">trust</span>, <span className="text-red-200">empowerment</span>
              </div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-16 right-16 w-24 h-24 border-2 border-red-400/30 rounded-full"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-16 left-16 w-20 h-20 border-2 border-pink-400/30 rounded-full"
      />
    </section>
  );
};

export default Slide05_HDFCPreCovid;