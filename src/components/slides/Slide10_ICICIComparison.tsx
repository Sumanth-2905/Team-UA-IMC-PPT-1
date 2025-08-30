import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, AlertTriangle } from 'lucide-react';

const Slide10_ICICIComparison: React.FC = () => {
  const similarities = [
    'Both ads emphasize protection of loved ones and family well-being',
    'Emotional undertone designed to trigger concern and responsibility',
    'Both link insurance to the idea of preparing for life\'s uncertainties'
  ];

  const differences = [
    {
      aspect: 'Approach',
      preCovid: 'Emotional plea from a child, focusing on parents\' health and its impact on the child\'s happiness',
      postCovid: 'Rational, urgent call to secure the family\'s future now due to unpredictability exposed by Covid'
    },
    {
      aspect: 'Narrative Perspective',
      preCovid: 'Child\'s innocent perspective',
      postCovid: 'Adult rational reflection'
    },
    {
      aspect: 'Emotional Driver',
      preCovid: 'Dependency & love',
      postCovid: 'Urgency & caution'
    },
    {
      aspect: 'Branding',
      preCovid: 'Subtler in pre-Covid',
      postCovid: 'Stronger and clearer in post-Covid campaign'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-950 via-indigo-950 to-blue-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-orange-500/15 via-indigo-500/15 to-blue-500/15 bg-[length:400%_400%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="text-orange-300 text-lg mb-4">Slide 10 of 14</div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Comparison Within ICICI Prudential
            </motion.span>
          </h1>
          <p className="text-xl text-gray-300">Pre-Covid vs Post-Covid Brand Evolution</p>
        </motion.div>

        {/* Similarities Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white text-center mb-8 flex items-center justify-center space-x-3">
            <Shield className="w-8 h-8 text-orange-400" />
            <span>Similarities</span>
          </h2>
          
          <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-orange-400/30">
            <div className="space-y-6">
              {similarities.map((similarity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.3, 1],
                      backgroundColor: ['#f97316', '#3b82f6', '#f97316']
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  />
                  <p className="text-lg text-gray-200 leading-relaxed">{similarity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Differences Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl text-white text-center mb-8 flex items-center justify-center space-x-3">
            <Target className="w-8 h-8 text-blue-400" />
            <span>Differences</span>
          </h2>
          
          <div className="space-y-8">
            {differences.map((diff, index) => (
              <motion.div
                key={diff.aspect}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl text-white mb-6 text-center">{diff.aspect}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-md rounded-2xl p-6 border border-orange-400/30"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Pre</span>
                      </div>
                      <h4 className="text-lg text-orange-300">Pre-Covid</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{diff.preCovid}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Post</span>
                      </div>
                      <h4 className="text-lg text-blue-300">Post-Covid</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{diff.postCovid}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(249, 115, 22, 0.3)',
                '0 0 50px rgba(59, 130, 246, 0.4)',
                '0 0 30px rgba(249, 115, 22, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-orange-600 to-blue-700 rounded-3xl p-8 border border-indigo-400/30"
          >
            <div className="flex items-center justify-center space-x-6 mb-4">
              <Users className="w-10 h-10 text-white" />
              <AlertTriangle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-4">ICICI Prudential Evolution Insight</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              ICICI Prudential evolved from <span className="text-orange-200">emotional child-centric appeals</span> to 
              <span className="text-blue-200"> rational urgency-driven messaging</span>, simultaneously strengthening 
              brand visibility while adapting to post-pandemic consumer psychology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide10_ICICIComparison;