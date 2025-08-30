import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Star } from 'lucide-react';

const Slide09_HDFCComparison: React.FC = () => {
  const similarities = [
    'Family and children are central to both ads',
    'Strong emotional storytelling, rooted in Indian family values',
    'HDFC Life consistently ties its message to trust, dignity, and empowerment ("Sar Utha Ke Jiyo")'
  ];

  const differences = [
    {
      aspect: 'Orientation',
      preCovid: 'Future-oriented, empowering children for independence',
      postCovid: 'Past-oriented, reflecting on resilience during collective struggle'
    },
    {
      aspect: 'Narrative Perspective',
      preCovid: 'Individual/familial (father-daughter bond)',
      postCovid: 'Collective "we" of a generation'
    },
    {
      aspect: 'Emotional Driver',
      preCovid: 'Pride & independence',
      postCovid: 'Hope & resilience'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-950 via-purple-950 to-blue-950">
      <div className="absolute inset-0">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 bg-gradient-to-r from-red-500/15 via-purple-500/15 to-blue-500/15 bg-[length:400%_400%]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="text-red-300 text-lg mb-4">Slide 9 of 14</div>
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{ backgroundPosition: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
              className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Comparison Within HDFC Life
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
            <Heart className="w-8 h-8 text-red-400" />
            <span>Similarities</span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 backdrop-blur-xl rounded-3xl p-8 border border-red-400/30">
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
                      backgroundColor: ['#ef4444', '#3b82f6', '#ef4444']
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
            <TrendingUp className="w-8 h-8 text-blue-400" />
            <span>Differences</span>
          </h2>
          
          <div className="space-y-8">
            {differences.map((diff, index) => (
              <motion.div
                key={diff.aspect}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-2xl text-white mb-6 text-center">{diff.aspect}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-red-600/20 to-red-800/20 backdrop-blur-md rounded-2xl p-6 border border-red-400/30"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Pre</span>
                      </div>
                      <h4 className="text-lg text-red-300">Pre-Covid</h4>
                    </div>
                    <p className="text-gray-200 leading-relaxed">{diff.preCovid}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
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
                '0 0 30px rgba(239, 68, 68, 0.3)',
                '0 0 50px rgba(59, 130, 246, 0.4)',
                '0 0 30px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-8 border border-purple-400/30"
          >
            <div className="flex items-center justify-center space-x-6 mb-4">
              <Users className="w-10 h-10 text-white" />
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl text-white mb-4">HDFC Life Evolution Insight</h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              HDFC Life successfully maintained its core <span className="text-red-200">emotional DNA</span> while 
              adapting to pandemic realities, shifting from <span className="text-blue-200">individual empowerment</span> to 
              <span className="text-purple-200">collective resilience</span> without losing brand authenticity.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide09_HDFCComparison;