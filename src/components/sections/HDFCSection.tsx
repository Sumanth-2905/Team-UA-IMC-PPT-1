import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, TrendingUp, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const HDFCSection: React.FC = () => {
  const campaigns = [
    {
      period: 'Pre-COVID',
      title: 'Apno ko apne dum pe jeena sikhao',
      subtitle: '#MyMomentOfPride',
      description: 'A heartfelt father-daughter story showcasing empowerment and independence',
      keyPoints: [
        'Inspirational, empowering, warm tone',
        'Father-daughter bond storytelling',
        'Focus on dignity and trust',
        'Emotions: Pride, responsibility, love'
      ],
      bgGradient: 'from-red-100 to-red-50',
      iconColor: 'text-red-600',
      borderColor: 'border-red-200'
    },
    {
      period: 'Post-COVID',
      title: 'BounceBack Batch',
      subtitle: 'Resilience in Crisis',
      description: 'Celebrates families who emerged stronger through COVID challenges',
      keyPoints: [
        'Emotional, empathetic, motivational tone',
        'Collective COVID experiences',
        'Focus on recovery and strength',
        'Emotions: Empathy, hope, trust'
      ],
      bgGradient: 'from-blue-100 to-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    }
  ];

  const brandValues = [
    { icon: Heart, label: 'Family-Oriented', color: 'text-red-500' },
    { icon: Users, label: 'Empowerment', color: 'text-blue-500' },
    { icon: TrendingUp, label: 'Dignity', color: 'text-red-500' },
    { icon: Shield, label: 'Trust', color: 'text-blue-500' }
  ];

  return (
    <section id="hdfc-life" className="min-h-screen py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">H</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-800">HDFC Life</h2>
              <p className="text-xl text-gray-600">"Sar Utha Ke Jiyo"</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Family-oriented, emotional, and trustworthy - empowering families through dignity and independence
          </p>
        </motion.div>

        {/* Brand Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {brandValues.map((value, index) => (
            <motion.div
              key={value.label}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <value.icon className={`w-8 h-8 ${value.color} mx-auto mb-3`} />
              <span className="text-gray-700">{value.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Campaign Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.period}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${campaign.bgGradient} p-8 rounded-2xl border-2 ${campaign.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-6">
                <div className={`inline-block px-4 py-2 rounded-full text-sm ${
                  index === 0 ? 'bg-red-600 text-white' : 'bg-blue-600 text-white'
                } mb-4`}>
                  {campaign.period}
                </div>
                <h3 className="text-2xl text-gray-800 mb-2">{campaign.title}</h3>
                <p className={`text-lg ${index === 0 ? 'text-red-600' : 'text-blue-600'} mb-4`}>
                  {campaign.subtitle}
                </p>
                <p className="text-gray-700 mb-6">{campaign.description}</p>
              </div>

              {/* Campaign Image Placeholder */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1659352786973-82ae3af461a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwaW5zdXJhbmNlJTIwZmFtaWx5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NTY0NDgxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={`HDFC Life ${campaign.period} Campaign`}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  index === 0 ? 'from-red-900/20 to-transparent' : 'from-blue-900/20 to-transparent'
                }`}></div>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <h4 className="text-lg text-gray-800 mb-3">Key Communication Features:</h4>
                {campaign.keyPoints.map((point, pointIndex) => (
                  <motion.div
                    key={pointIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: pointIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full ${
                      index === 0 ? 'bg-red-500' : 'bg-blue-500'
                    } mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Evolution Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-4">HDFC Life Brand Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg mb-3 text-red-200">Pre-COVID Focus</h4>
              <p className="text-sm opacity-90">Future-oriented empowerment, individual family bonds, pride in independence</p>
            </div>
            <div>
              <h4 className="text-lg mb-3 text-blue-200">Post-COVID Shift</h4>
              <p className="text-sm opacity-90">Collective resilience, shared struggles, hope and recovery through trust</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HDFCSection;