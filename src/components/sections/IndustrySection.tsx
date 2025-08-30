import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Shield, Users, Target } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const IndustrySection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Market Penetration', preCovid: '3.76%', postCovid: '4.2%' },
    { icon: TrendingUp, label: 'Annual Growth', preCovid: '12%', postCovid: '18%' },
    { icon: Shield, label: 'Term Plans Growth', preCovid: '25%', postCovid: '65%' },
    { icon: Target, label: 'Digital Adoption', preCovid: '15%', postCovid: '45%' }
  ];

  const timelineEvents = [
    { year: '2019', event: 'Traditional Investment Focus', type: 'pre' },
    { year: '2020', event: 'COVID-19 Impact', type: 'crisis' },
    { year: '2021', event: 'Protection-First Mindset', type: 'post' },
    { year: '2022', event: 'Digital Transformation', type: 'post' }
  ];

  return (
    <section id="industry" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            Life Insurance Market in India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From investment planning to survival necessity - how COVID-19 transformed the industry
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-4 text-center">{stat.label}</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Pre-COVID</span>
                  <span className="text-lg text-red-600">{stat.preCovid}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Post-COVID</span>
                  <span className="text-lg text-green-600">{stat.postCovid}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-gray-800 text-center mb-12">Industry Evolution Timeline</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-red-400 via-yellow-400 to-green-400 rounded-full"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`inline-block p-4 rounded-xl shadow-lg ${
                      event.type === 'pre' ? 'bg-red-100 text-red-800' :
                      event.type === 'crisis' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      <div className="text-2xl mb-2">{event.year}</div>
                      <div className="text-lg">{event.event}</div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full ${
                      event.type === 'pre' ? 'bg-red-400' :
                      event.type === 'crisis' ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-4">Key Industry Transformation</h3>
          <div className="text-lg opacity-90 max-w-4xl mx-auto">
            <span className="text-red-200">"Good to Have"</span>
            {' → '}
            <span className="text-green-200">"Must Have"</span>
            <div className="mt-4 text-base">
              COVID-19 fundamentally shifted consumer perception from viewing life insurance as an investment tool to recognizing it as essential protection for family survival and financial security.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustrySection;