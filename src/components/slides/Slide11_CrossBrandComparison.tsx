import React from 'react';
import { motion } from 'motion/react';
import { Heart, Brain, Zap, Target } from 'lucide-react';
import { LOGOS } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide11_CrossBrandComparison: React.FC = () => {
  const comparisonAspects = [
    {
      title: 'Tone of Communication',
      hdfc: 'Emotional, family-first, storytelling through bonds and collective resilience',
      icici: 'Rational + emotional blend, more product/decision-driven messaging',
      icon: Brain
    },
    {
      title: 'Emotions Used',
      hdfc: 'Family empowerment, dignity, pride, resilience, hope',
      icici: 'Concern for loved ones, urgency, practicality, reassurance',
      icon: Heart
    },
    {
      title: 'Post-Covid Consumer Connection',
      hdfc: 'Connected strongly by reflecting shared pandemic experiences → relatable, empathetic, and emotionally powerful',
      icici: 'Built trust with practical promises like claim settlement and urgency → appealed to rational decision-making',
      icon: Target
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-950 via-purple-950 to-orange-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-purple-500/15 to-orange-500/15 bg-[length:400%_400%]"
        />
        
        {/* Brand symbols floating */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
            style={{ left: `${8 + i * 8}%`, top: `${5 + i * 8}%` }}
          >
            {i % 2 === 0 ? (
              <Heart className="w-6 h-6 text-red-400/40" />
            ) : (
              <Brain className="w-6 h-6 text-orange-400/40" />
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
          <div className="text-purple-300 text-lg mb-4">Slide 11 of 14</div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-gradient-to-r from-red-400 via-purple-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Cross-Brand Comparison
            </motion.span>
          </h1>
          <p className="text-xl text-gray-300">HDFC Life vs ICICI Prudential</p>
        </motion.div>

        {/* Brand Headers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-xl rounded-3xl p-6 border border-red-400/30 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                <ImageWithFallback
                  src={LOGOS.HDFC_LIFE}
                  alt="HDFC Life Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-2xl text-white">HDFC Life</h2>
            </div>
            <p className="text-red-200">Emotional Storytelling Brand</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-orange-600/20 to-orange-800/20 backdrop-blur-xl rounded-3xl p-6 border border-orange-400/30 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                <ImageWithFallback
                  src={LOGOS.ICICI_PRUDENTIAL}
                  alt="ICICI Prudential Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h2 className="text-2xl text-white">ICICI Prudential</h2>
            </div>
            <p className="text-orange-200">Rational Assurance Brand</p>
          </motion.div>
        </motion.div>

        {/* Comparison Aspects */}
        <div className="space-y-12">
          {comparisonAspects.map((aspect, index) => (
            <motion.div
              key={aspect.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="bg-gradient-to-r from-purple-600/30 to-indigo-600/30 p-6 border-b border-white/10">
                <div className="flex items-center justify-center space-x-3">
                  <aspect.icon className="w-8 h-8 text-purple-300" />
                  <h3 className="text-2xl text-white text-center">{aspect.title}</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <motion.div
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(239, 68, 68, 0.1)' }}
                  className="p-8 border-r border-white/10"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <h4 className="text-lg text-red-300">HDFC Life</h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{aspect.hdfc}</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01, backgroundColor: 'rgba(249, 115, 22, 0.1)' }}
                  className="p-8"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    <h4 className="text-lg text-orange-300">ICICI Prudential</h4>
                  </div>
                  <p className="text-gray-200 leading-relaxed">{aspect.icici}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl text-white mb-8">Overall Insight</h3>
          
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(139, 69, 19, 0.3)',
                '0 0 60px rgba(147, 51, 234, 0.4)',
                '0 0 40px rgba(139, 69, 19, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 border border-purple-400/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-3"
              >
                <Heart className="w-8 h-8 text-red-300" />
                <div className="text-xl text-white">
                  <span className="text-red-300">HDFC</span> → Stronger emotional connect <span className="text-red-200">(hearts)</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-3"
              >
                <Brain className="w-8 h-8 text-orange-300" />
                <div className="text-xl text-white">
                  <span className="text-orange-300">ICICI</span> → Stronger rational assurance <span className="text-orange-200">(minds)</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="border-t border-white/20 pt-6"
            >
              <Zap className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
              <p className="text-lg text-gray-200 leading-relaxed">
                Together, they show how Covid reshaped IMC from <span className="text-blue-200">aspirational planning</span> → 
                <span className="text-green-200"> survival + protection</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide11_CrossBrandComparison;