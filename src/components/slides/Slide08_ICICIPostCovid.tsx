import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Clock, Shield, Target } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide08_ICICIPostCovid: React.FC = () => {
  const communicationFeatures = [
    { feature: 'Tone', description: 'Serious, thought-provoking, reassuring', icon: AlertTriangle },
    { feature: 'Storytelling', description: 'Uses rhetorical questions and real-life examples to create urgency', icon: Clock },
    { feature: 'Visuals', description: 'Pandemic-linked scenes — lockdown, deserted streets, disrupted daily life', icon: Shield },
    { feature: 'Emotions', description: 'Urgency, caution, reassurance, responsibility', icon: Target }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-navy-950 to-indigo-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-navy-600/15 to-indigo-600/15 bg-[length:400%_400%]"
        />
        
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
            style={{ left: `${12 + i * 9}%`, top: `${8 + i * 10}%` }}
          >
            {i % 3 === 0 ? (
              <AlertTriangle className="w-6 h-6 text-blue-400/40" />
            ) : i % 3 === 1 ? (
              <Clock className="w-6 h-6 text-navy-400/40" />
            ) : (
              <Shield className="w-6 h-6 text-indigo-400/40" />
            )}
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
          <div className="text-blue-300 text-lg mb-4">Slide 8 of 14</div>
          
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
                className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%]"
              >
                Post-Covid: ICICI Prudential
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
            className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 inline-block"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-4">"Protect your tomorrow, today!"</h2>
            <motion.p className="text-xl text-blue-300">Urgency-Driven Action</motion.p>
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
              This campaign challenges the old saying "Kal kisne dekha hai?" (Who has seen tomorrow?) by reflecting on how 
              unpredictable life became during Covid. It stresses that families must act now to secure their tomorrow, 
              given the uncertainty of the future.
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
            className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/30"
          >
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <AlertTriangle className="w-10 h-10 text-blue-400" />
                <Clock className="w-10 h-10 text-indigo-400" />
              </div>
              <p className="text-xl text-white leading-relaxed">
                Life is <span className="text-blue-300">uncertain</span> — the pandemic proved how quickly everything can change.
              </p>
              <p className="text-lg text-gray-300">
                Insurance is about making <span className="text-indigo-300">proactive choices today</span> to protect tomorrow.
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
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0"
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
                '0 0 30px rgba(29, 78, 216, 0.3)',
                '0 0 50px rgba(67, 56, 202, 0.4)',
                '0 0 30px rgba(29, 78, 216, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-3xl p-8 border border-blue-400/30"
          >
            <div className="flex items-center justify-center space-x-6">
              <Shield className="w-12 h-12 text-white" />
              <div className="text-2xl text-white text-center">
                ICICI Prudential = <span className="text-blue-200">practical and rational protector</span>
              </div>
              <Target className="w-12 h-12 text-white" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-lg text-blue-100"
            >
              Instilling trust and encouraging immediate action
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide08_ICICIPostCovid;