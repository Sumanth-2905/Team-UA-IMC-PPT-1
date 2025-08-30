import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, AlertTriangle, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const ICICISection: React.FC = () => {
  const campaigns = [
    {
      period: 'Pre-COVID',
      title: 'What affects us affects our children',
      subtitle: 'Child-Centric Protection',
      description: 'Emotional appeal through child\'s perspective on parental health and security',
      keyPoints: [
        'Emotional, persuasive, child-centered tone',
        'Innocent but impactful narration',
        'Daily life moments and bonding',
        'Emotions: Love, dependency, urgency'
      ],
      bgGradient: 'from-orange-100 to-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      period: 'Post-COVID',
      title: 'Protect your tomorrow, today!',
      subtitle: 'Urgency-Driven Action',
      description: 'Challenges "Kal kisne dekha hai?" - emphasizing immediate action for uncertain future',
      keyPoints: [
        'Serious, thought-provoking, reassuring tone',
        'Rhetorical questions and real examples',
        'Pandemic-linked disrupted scenes',
        'Emotions: Urgency, caution, responsibility'
      ],
      bgGradient: 'from-blue-100 to-navy-50',
      iconColor: 'text-blue-800',
      borderColor: 'border-blue-200'
    }
  ];

  const brandValues = [
    { icon: Shield, label: 'Reliable', color: 'text-orange-500' },
    { icon: CheckCircle, label: 'Secure', color: 'text-blue-800' },
    { icon: Target, label: 'Practical', color: 'text-orange-500' },
    { icon: AlertTriangle, label: 'Trust-Building', color: 'text-blue-800' }
  ];

  return (
    <section id="icici" className="min-h-screen py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
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
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-800 rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">I</span>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl text-gray-800">ICICI Prudential</h2>
              <p className="text-xl text-gray-600">"Hum Aur Aap, #ClaimForSure"</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable, secure, and practical - focusing on financial protection and certainty in uncertain times
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
                  index === 0 ? 'bg-orange-600 text-white' : 'bg-blue-800 text-white'
                } mb-4`}>
                  {campaign.period}
                </div>
                <h3 className="text-2xl text-gray-800 mb-2">{campaign.title}</h3>
                <p className={`text-lg ${index === 0 ? 'text-orange-600' : 'text-blue-800'} mb-4`}>
                  {campaign.subtitle}
                </p>
                <p className="text-gray-700 mb-6">{campaign.description}</p>
              </div>

              {/* Campaign Image Placeholder */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1589060181082-083883ffe19d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBzZWN1cml0eSUyMGZhbWlseXxlbnwxfHx8fDE3NTY1NjQ1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt={`ICICI Prudential ${campaign.period} Campaign`}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  index === 0 ? 'from-orange-900/20 to-transparent' : 'from-blue-900/20 to-transparent'
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
                      index === 0 ? 'bg-orange-500' : 'bg-blue-800'
                    } mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rational vs Emotional Appeal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-8 rounded-2xl border-2 border-orange-200">
            <h4 className="text-xl text-orange-800 mb-4">Emotional Connect</h4>
            <p className="text-gray-700 mb-4">Child's innocent perspective creates strong emotional bond with parents</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Love & Dependency</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Family Happiness</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-2xl border-2 border-blue-200">
            <h4 className="text-xl text-blue-800 mb-4">Rational Assurance</h4>
            <p className="text-gray-700 mb-4">Post-COVID focus on practical decision-making and claim guarantee</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span className="text-sm text-gray-600">Urgency & Action</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full"></div>
                <span className="text-sm text-gray-600">Trust & Reliability</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Evolution Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-600 to-blue-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-4">ICICI Prudential Brand Evolution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg mb-3 text-orange-200">Pre-COVID Approach</h4>
              <p className="text-sm opacity-90">Emotional plea from child's perspective, subtle branding, focus on parental responsibility</p>
            </div>
            <div>
              <h4 className="text-lg mb-3 text-blue-200">Post-COVID Strategy</h4>
              <p className="text-sm opacity-90">Rational urgency, stronger branding, practical promises and claim assurance</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ICICISection;