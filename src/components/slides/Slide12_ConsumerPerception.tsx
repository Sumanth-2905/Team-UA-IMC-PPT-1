import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Shield, Heart } from 'lucide-react';

const Slide12_ConsumerPerception: React.FC = () => {
  const preCovidDrivers = ['Future goals', 'Lifestyle planning', 'Aspirations'];
  const postCovidDrivers = ['Security', 'Resilience', 'Immediate protection of loved ones', 'Peace of mind'];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-950 via-blue-950 to-purple-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 bg-[length:400%_400%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="text-green-300 text-lg mb-4">Slide 12 of 14</div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Consumer Perception Shifts
            </motion.span>
          </h1>
          <p className="text-xl text-gray-300">The Great Transformation in Consumer Mindset</p>
        </motion.div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Pre-Covid */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <DollarSign className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl text-white mb-4">Pre-Covid</h2>
              <p className="text-red-300 text-xl">"Good to Have"</p>
            </div>

            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-xl rounded-3xl p-8 border border-red-400/30">
              <h3 className="text-xl text-white mb-6">Perception & Usage</h3>
              <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  Life insurance seen mainly as a <span className="text-red-300">financial instrument</span> → long-term savings, 
                  tax benefits, child's education, and retirement planning.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Consumers viewed it as <span className="text-orange-300">optional or secondary</span> compared to investments 
                  like mutual funds or real estate.
                </p>
              </div>

              <h4 className="text-lg text-white mt-6 mb-4">Emotional Drivers</h4>
              <div className="space-y-3">
                {preCovidDrivers.map((driver, index) => (
                  <motion.div
                    key={driver}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        backgroundColor: ['#ef4444', '#f97316', '#ef4444']
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="w-3 h-3 rounded-full flex-shrink-0"
                    />
                    <span className="text-gray-300">{driver}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Post-Covid */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-3xl text-white mb-4">Post-Covid</h2>
              <p className="text-green-300 text-xl">"Must Have"</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-green-400/30">
              <h3 className="text-xl text-white mb-6">Perception & Usage</h3>
              <div className="space-y-4">
                <p className="text-gray-200 leading-relaxed">
                  Life insurance transformed into a <span className="text-green-300">necessity for survival and protection</span>.
                </p>
                <p className="text-gray-200 leading-relaxed">
                  Families became more <span className="text-blue-300">risk-aware</span> after witnessing loss of lives 
                  and financial instability.
                </p>
              </div>

              <h4 className="text-lg text-white mt-6 mb-4">Emotional Drivers</h4>
              <div className="space-y-3">
                {postCovidDrivers.map((driver, index) => (
                  <motion.div
                    key={driver}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        backgroundColor: ['#22c55e', '#3b82f6', '#22c55e']
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                      className="w-3 h-3 rounded-full flex-shrink-0"
                    />
                    <span className="text-gray-300">{driver}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Transformation Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl px-8 py-4 border border-red-400/30"
            >
              <span className="text-2xl text-red-300">"Investment for tomorrow"</span>
            </motion.div>
            
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl text-yellow-400"
            >
              →
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl px-8 py-4 border border-green-400/30"
            >
              <span className="text-2xl text-green-300">"Security for today"</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(34, 197, 94, 0.3)',
                '0 0 60px rgba(59, 130, 246, 0.4)',
                '0 0 40px rgba(139, 69, 19, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 border border-purple-400/30"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <TrendingUp className="w-10 h-10 text-purple-300" />
              <h3 className="text-2xl text-white">The Paradigm Shift</h3>
              <Heart className="w-10 h-10 text-purple-300" />
            </div>
            
            <p className="text-lg text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Insurance shifted from <span className="text-red-300">"good to have"</span> → to 
              <span className="text-green-300"> "must-have"</span>. COVID-19 fundamentally altered risk perception, 
              making protection-focused products essential rather than optional in family financial planning.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide12_ConsumerPerception;