import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, Star, Trophy, Zap } from 'lucide-react';
import { TEAM_MEMBERS, COMPANY_INFO } from '../../assets/placeholders';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const Slide14_Team: React.FC = () => {
  const teamMembers = [
    {
      name: TEAM_MEMBERS.MEMBER_1.name,
      image: TEAM_MEMBERS.MEMBER_1.image,
      color: 'from-pink-500 to-red-500'
    },
    {
      name: TEAM_MEMBERS.MEMBER_2.name,
      image: TEAM_MEMBERS.MEMBER_2.image,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: TEAM_MEMBERS.MEMBER_3.name,
      image: TEAM_MEMBERS.MEMBER_3.image,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: TEAM_MEMBERS.MEMBER_4.name,
      image: TEAM_MEMBERS.MEMBER_4.image,
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-pink-500/10 bg-[length:400%_400%]"
        />
        
        {/* Celebration Elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Thank You Header */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="text-purple-300 text-lg mb-4">Slide 14 of 14</div>
          
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-5xl mb-6"
          >
            🎉
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            <motion.span
              animate={{
                backgroundPosition: ['0%', '100%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%]"
            >
              Thank You
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            For your attention and engagement with our analysis of Integrated Marketing Communication 
            strategies in the Life Insurance sector during the COVID-19 transformation.
          </motion.p>
        </motion.div>

        {/* Team Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl text-white mb-4">Presented by</h2>
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              textShadow: [
                '0 0 20px rgba(139, 69, 19, 0.5)',
                '0 0 30px rgba(147, 51, 234, 0.5)',
                '0 0 20px rgba(236, 72, 153, 0.5)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl md:text-4xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent"
          >
{COMPANY_INFO.TEAM_NAME}
          </motion.div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h3 className="text-2xl text-white text-center mb-8">Our Team</h3>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.15 }}
                whileHover={{ 
                  scale: 1.08,
                  y: -5
                }}
                className="group flex flex-col items-center"
              >
                {/* Avatar with gradient border */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className={`w-32 h-32 rounded-full p-1 bg-gradient-to-r ${member.color} shadow-lg`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                      <ImageWithFallback
                        src={member.image}
                        alt={`${member.name} profile photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Floating Star */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                </motion.div>

                {/* Name */}
                <motion.h4 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + index * 0.15 }}
                  className="text-base text-white mt-4 text-center font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300"
                >
                  {member.name}
                </motion.h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl text-white text-center mb-6">Research Impact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-2"
              >
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto" />
                <h4 className="text-sm text-yellow-300">Comprehensive Analysis</h4>
                <p className="text-xs text-gray-300">4 major campaigns across 2 leading brands analyzed</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-2"
              >
                <Zap className="w-8 h-8 text-blue-400 mx-auto" />
                <h4 className="text-sm text-blue-300">Strategic Insights</h4>
                <p className="text-xs text-gray-300">Crisis-adaptive frameworks for future IMC strategies</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-2"
              >
                <Heart className="w-8 h-8 text-pink-400 mx-auto" />
                <h4 className="text-sm text-pink-300">Consumer Understanding</h4>
                <p className="text-xs text-gray-300">Deep insights into perception shifts and behavior changes</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 40px rgba(139, 69, 19, 0.3)',
                '0 0 60px rgba(147, 51, 234, 0.4)',
                '0 0 40px rgba(236, 72, 153, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 border border-purple-400/30"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl mb-3"
            >
              ✨
            </motion.div>
            
            <p className="text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
              This research demonstrates how <span className="text-purple-200">strategic communication</span> can adapt to unprecedented challenges 
              while maintaining <span className="text-pink-200">brand authenticity</span> and <span className="text-purple-200">consumer relevance</span>. 
              Thank you for joining us on this analytical journey.
            </p>
            
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-6"
            >
              <Heart className="w-6 h-6 text-pink-300 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Slide14_Team;