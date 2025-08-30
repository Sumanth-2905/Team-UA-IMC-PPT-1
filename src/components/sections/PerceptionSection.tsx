import React from 'react';
import { motion } from 'motion/react';
import { PiggyBank, Shield, TrendingUp, Heart, DollarSign, Home, Users, AlertTriangle } from 'lucide-react';

const PerceptionSection: React.FC = () => {
  const perceptionShift = {
    preCovid: {
      title: 'Life Insurance as Investment Tool',
      subtitle: 'Optional Financial Planning',
      description: 'Life insurance viewed mainly as long-term savings, tax benefits, and retirement planning',
      drivers: ['Future goals', 'Lifestyle planning', 'Aspirations', 'Tax savings'],
      color: 'red',
      bgGradient: 'from-red-100 to-red-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-800',
      iconColor: 'text-red-600'
    },
    postCovid: {
      title: 'Life Insurance as Survival Necessity',
      subtitle: 'Essential Protection Priority',
      description: 'Transformed into necessity for survival and protection after witnessing crisis impact',
      drivers: ['Security', 'Resilience', 'Immediate protection', 'Peace of mind'],
      color: 'green',
      bgGradient: 'from-green-100 to-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      iconColor: 'text-green-600'
    }
  };

  const comparisonAspects = [
    {
      icon: DollarSign,
      aspect: 'Primary Purpose',
      preCovid: 'Financial instrument for savings & tax benefits',
      postCovid: 'Essential protection for family survival'
    },
    {
      icon: TrendingUp,
      aspect: 'Priority Level',
      preCovid: 'Secondary to investments like mutual funds',
      postCovid: 'Primary necessity alongside health insurance'
    },
    {
      icon: Home,
      aspect: 'Investment Comparison',
      preCovid: 'Competed with real estate & other investments',
      postCovid: 'Viewed as non-negotiable family security'
    },
    {
      icon: Users,
      aspect: 'Target Audience',
      preCovid: 'High-income earners seeking tax planning',
      postCovid: 'All income segments prioritizing protection'
    }
  ];

  const emotionalDrivers = {
    preCovid: [
      { icon: TrendingUp, label: 'Future Goals', intensity: 70 },
      { icon: PiggyBank, label: 'Savings Plans', intensity: 85 },
      { icon: Home, label: 'Lifestyle Planning', intensity: 60 },
      { icon: DollarSign, label: 'Tax Benefits', intensity: 90 }
    ],
    postCovid: [
      { icon: Shield, label: 'Security', intensity: 95 },
      { icon: Heart, label: 'Family Protection', intensity: 90 },
      { icon: AlertTriangle, label: 'Risk Awareness', intensity: 85 },
      { icon: Users, label: 'Peace of Mind', intensity: 80 }
    ]
  };

  return (
    <section id="perception" className="min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">Consumer Perception Shifts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How COVID-19 fundamentally transformed consumer mindset towards life insurance
          </p>
        </motion.div>

        {/* Main Perception Shift Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {Object.entries(perceptionShift).map(([period, data], index) => (
            <motion.div
              key={period}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${data.bgGradient} p-8 rounded-2xl border-2 ${data.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="text-center mb-6">
                <div className={`inline-block px-4 py-2 rounded-full text-sm ${
                  period === 'preCovid' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
                } mb-4`}>
                  {period === 'preCovid' ? 'Pre-COVID Era' : 'Post-COVID Era'}
                </div>
                <h3 className={`text-2xl ${data.textColor} mb-2`}>{data.title}</h3>
                <p className={`text-lg ${data.iconColor} mb-4`}>{data.subtitle}</p>
                <p className="text-gray-700">{data.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className={`text-lg ${data.textColor} mb-3`}>Key Emotional Drivers:</h4>
                {data.drivers.map((driver, driverIndex) => (
                  <motion.div
                    key={driverIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: driverIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-3 rounded-lg"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      period === 'preCovid' ? 'bg-red-500' : 'bg-green-500'
                    }`}></div>
                    <span className="text-gray-700">{driver}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Comparison Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-gray-800 text-center mb-12">Detailed Perception Analysis</h3>
          
          <div className="space-y-8">
            {comparisonAspects.map((aspect, index) => (
              <motion.div
                key={aspect.aspect}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <aspect.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="text-xl text-gray-800">{aspect.aspect}</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-500 pl-6">
                    <div className="text-sm text-red-600 mb-2">Pre-COVID Mindset</div>
                    <p className="text-gray-700">{aspect.preCovid}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <div className="text-sm text-green-600 mb-2">Post-COVID Reality</div>
                    <p className="text-gray-700">{aspect.postCovid}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotional Driver Intensity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-gray-800 text-center mb-12">Emotional Driver Intensity</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {Object.entries(emotionalDrivers).map(([period, drivers], index) => (
              <div key={period} className="space-y-6">
                <h4 className={`text-xl text-center ${period === 'preCovid' ? 'text-red-800' : 'text-green-800'}`}>
                  {period === 'preCovid' ? 'Pre-COVID Drivers' : 'Post-COVID Drivers'}
                </h4>
                
                {drivers.map((driver, driverIndex) => (
                  <motion.div
                    key={driver.label}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: '100%' }}
                    transition={{ duration: 0.8, delay: driverIndex * 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <driver.icon className={`w-5 h-5 ${period === 'preCovid' ? 'text-red-600' : 'text-green-600'}`} />
                        <span className="text-gray-700">{driver.label}</span>
                      </div>
                      <span className="text-sm text-gray-500">{driver.intensity}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${driver.intensity}%` }}
                        transition={{ duration: 1, delay: driverIndex * 0.2 }}
                        viewport={{ once: true }}
                        className={`h-3 rounded-full ${
                          period === 'preCovid' 
                            ? 'bg-gradient-to-r from-red-400 to-red-600' 
                            : 'bg-gradient-to-r from-green-400 to-green-600'
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Transformation Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl mb-6">The Great Perception Shift</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-2xl">
            <div className="bg-white/20 px-6 py-3 rounded-full">
              <span className="text-red-200">"Good to Have"</span>
            </div>
            
            <div className="text-4xl">→</div>
            
            <div className="bg-white/20 px-6 py-3 rounded-full">
              <span className="text-green-200">"Must Have"</span>
            </div>
          </div>
          
          <p className="text-lg opacity-90 max-w-4xl mx-auto mt-6">
            COVID-19 didn't just change the insurance market—it fundamentally transformed how families view life insurance, 
            shifting from optional financial planning to essential survival protection.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PerceptionSection;