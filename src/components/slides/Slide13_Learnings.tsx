import React from 'react';
import { motion } from 'motion/react';
import { Zap, Heart, Smartphone, Target } from 'lucide-react';

const Slide13_Learnings: React.FC = () => {
  const learnings = [
    {
      title: 'Adaptability is Key',
      description: 'Ads shifted tone from aspirational (dreams, independence, retirement) → to empathetic and protective (resilience, survival)',
      icon: Zap,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Emotional vs. Rational Appeals',
      description: 'HDFC → Stronger emotional connect through family bonds & shared struggles. ICICI → Balanced rational assurance with urgency and practical solutions',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Role of IMC Channels',
      description: 'Pre-Covid → TV, print, long-form storytelling dominated. Post-Covid → Digital-first, shorter videos, relatable pandemic narratives, social media amplification',
      icon: Smartphone,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Brand Strategy Shift',
      description: 'HDFC = "Family resilience and dignity." ICICI = "Practical assurance and claim trust." Both showcase how external crises reshape communication strategies',
      icon: Target,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-pink-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 bg-[length:400%_400%]"
        />
        
        {/* Floating learning symbols */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -35, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 7 + i,
              repeat: Infinity,
              delay: i * 0.6,
            }}
            className="absolute"
            style={{ left: `${10 + i * 9}%`, top: `${8 + i * 9}%` }}
          >
            {i % 4 === 0 ? (
              <Zap className="w-6 h-6 text-indigo-400/40" />
            ) : i % 4 === 1 ? (
              <Heart className="w-6 h-6 text-purple-400/40" />
            ) : i % 4 === 2 ? (
              <Smartphone className="w-6 h-6 text-pink-400/40" />
            ) : (
              <Target className="w-6 h-6 text-blue-400/40" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="text-indigo-300 text-lg mb-4">Slide 13 of 14</div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Learnings & Observations
            </motion.span>
          </h1>
          <p className="text-xl text-gray-300">Strategic Insights from Campaign Analysis</p>
        </motion.div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {learnings.map((learning, index) => (
            <motion.div
              key={learning.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 h-full hover:bg-white/10 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className={`w-16 h-16 bg-gradient-to-r ${learning.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/25`}
                >
                  <learning.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl text-white mb-6 group-hover:text-purple-300 transition-colors">
                  {learning.title}
                </h3>
                
                <motion.p
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  className="text-gray-300 leading-relaxed text-lg"
                >
                  {learning.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Strategic Framework */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl text-white text-center mb-8">Strategic Framework</h2>
          
          <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 backdrop-blur-xl rounded-3xl p-8 border border-indigo-400/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h3 className="text-xl text-indigo-300 mb-4">HDFC Life Strategy</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200">Emotional storytelling mastery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-200">Family-centric messaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-200">Collective resilience focus</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <h3 className="text-xl text-orange-300 mb-4">ICICI Prudential Strategy</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200">Rational assurance approach</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                    <span className="text-gray-200">Urgency-driven messaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-200">Practical solutions emphasis</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(79, 70, 229, 0.3)',
                '0 0 60px rgba(147, 51, 234, 0.4)',
                '0 0 40px rgba(236, 72, 153, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 border border-purple-400/30"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-10 h-10 text-yellow-400" />
              </motion.div>
              <h3 className="text-2xl text-white">Crisis-Adaptive IMC</h3>
            </div>
            
            <motion.p
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto"
            >
              Both brands demonstrate that successful IMC strategies must be <span className="text-yellow-300">crisis-adaptive</span>, 
              capable of rapid pivoting while maintaining <span className="text-pink-300">brand authenticity</span>. 
              The pandemic proved that external crises can fundamentally reshape <span className="text-indigo-300">communication paradigms</span> 
              and consumer behavior patterns.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide13_Learnings;