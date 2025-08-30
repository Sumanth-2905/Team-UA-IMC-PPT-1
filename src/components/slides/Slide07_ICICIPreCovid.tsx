import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Target, Shield } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide07_ICICIPreCovid: React.FC = () => {
  const communicationFeatures = [
    { feature: 'Tone', description: 'Emotional, persuasive, child-centered', icon: Heart },
    { feature: 'Storytelling', description: 'Innocent but impactful narration through the child\'s perspective', icon: Users },
    { feature: 'Visuals', description: 'Relatable daily life moments (playing, homework, cycling, bonding)', icon: Target },
    { feature: 'Emotions', description: 'Love, dependency, urgency, responsibility', icon: Shield }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-950 via-amber-950 to-yellow-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-yellow-500/15 bg-[length:400%_400%]"
        />
        
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.7,
            }}
            className="absolute"
            style={{ left: `${15 + i * 10}%`, top: `${10 + i * 11}%` }}
          >
            {i % 2 === 0 ? <Heart className="w-5 h-5 text-orange-400/40" /> : <Users className="w-5 h-5 text-amber-400/40" />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="text-orange-300 text-lg mb-4">Slide 7 of 14</div>
          
          <motion.div className="flex items-center justify-center space-x-4 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2"
            >
              <ImageWithFallback
                src={LOGOS.ICICI_PRUDENTIAL}
                alt="ICICI Prudential Logo"
                className="w-full h-full object-contain rounded-xl"
              />
            </motion.div>
            <h1 className="text-4xl md:text-5xl text-white">
              <motion.span
                animate={{ backgroundPosition: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent bg-[length:200%]"
              >
                Pre-Covid: ICICI Prudential
              </motion.span>
            </h1>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-orange-900/40 to-amber-900/40 backdrop-blur-xl rounded-3xl p-8 border border-orange-500/30 inline-block"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">"What affects us affects our children"</h2>
            <motion.p className="text-xl text-orange-300">Child-Centric Protection</motion.p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Brief Description</h3>
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <p className="text-xl text-gray-200 leading-relaxed text-center">
              A touching ad where a child emotionally appeals to parents, asking them to take care of their health. 
              The child highlights how their happiness, future experiences, and security depend on the parents' well-being.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-3xl text-white text-center mb-8">Key Idea / Focus</h3>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/30"
          >
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <p className="text-xl text-white leading-relaxed">
                Parents' <span className="text-orange-300">health and stability</span> directly affect a child's growth and future.
              </p>
              <p className="text-lg text-gray-300 mt-4">
                Insurance positioned as a safeguard ensuring children don't lose experiences or security due to parents' vulnerabilities.
              </p>
            </div>
          </motion.div>
        </motion.div>

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
                      className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0"
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-xl text-white mb-2">{item.feature}</h4>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
                '0 0 30px rgba(249, 115, 22, 0.3)',
                '0 0 50px rgba(245, 158, 11, 0.4)',
                '0 0 30px rgba(249, 115, 22, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 border border-orange-400/30"
          >
            <div className="flex items-center justify-center space-x-6">
              <Shield className="w-10 h-10 text-white" />
              <div className="text-2xl text-white">
                ICICI Prudential = <span className="text-orange-200">protector of families</span>
              </div>
              <Heart className="w-10 h-10 text-white" />
            </div>
            <p className="text-orange-100 mt-4">Branding less dominant compared to HDFC's ads</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide07_ICICIPreCovid;