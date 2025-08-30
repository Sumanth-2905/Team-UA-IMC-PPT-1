import React from 'react';
import { motion } from 'motion/react';
import { Zap, Heart, Smartphone, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const LearningsSection: React.FC = () => {
  const learnings = [
    {
      icon: Zap,
      title: 'Adaptability is Key',
      description: 'Brands successfully pivoted their communication strategies in response to external crisis',
      details: [
        'Shifted from aspirational dreams to empathetic protection',
        'Changed messaging tone from future-focused to present-aware',
        'Adapted visuals from lifestyle to survival scenarios',
        'Maintained brand essence while evolving communication'
      ],
      gradient: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Heart,
      title: 'Emotional vs Rational Appeals',
      description: 'Different brands leveraged distinct psychological approaches to connect with consumers',
      details: [
        'HDFC Life: Stronger emotional storytelling through family bonds',
        'ICICI Prudential: Balanced rational assurance with urgency',
        'Emotional campaigns created deeper brand loyalty',
        'Rational appeals drove immediate purchase decisions'
      ],
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Smartphone,
      title: 'Role of IMC Channels',
      description: 'Digital transformation accelerated communication channel evolution',
      details: [
        'Pre-COVID: TV, print, and long-form storytelling dominated',
        'Post-COVID: Digital-first approach with shorter, impactful content',
        'Social media became primary amplification channel',
        'Mobile-optimized content gained critical importance'
      ],
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Target,
      title: 'Brand Strategy Shift',
      description: 'External crises fundamentally reshape long-term brand positioning strategies',
      details: [
        'HDFC Life: Reinforced "Family resilience and dignity" positioning',
        'ICICI Prudential: Enhanced "Practical assurance and claim trust"',
        'Both brands strengthened their unique value propositions',
        'Crisis communication became part of brand identity'
      ],
      gradient: 'from-orange-500 to-yellow-600',
      bgGradient: 'from-orange-50 to-yellow-50',
      borderColor: 'border-orange-200'
    }
  ];

  const keyInsights = [
    {
      title: 'Consumer Behavior Evolution',
      insight: 'COVID-19 permanently altered risk perception, making protection-focused products essential rather than optional',
      impact: 'High'
    },
    {
      title: 'Brand Differentiation',
      insight: 'Emotional storytelling (HDFC) vs. rational assurance (ICICI) both proved effective in different contexts',
      impact: 'Medium'
    },
    {
      title: 'Channel Transformation',
      insight: 'Digital channels became primary touchpoints, requiring immediate adaptation of content strategy',
      impact: 'High'
    },
    {
      title: 'Message Personalization',
      insight: 'Generic aspirational messaging gave way to highly personalized, crisis-relevant communication',
      impact: 'Medium'
    }
  ];

  return (
    <section id="learnings" className="min-h-screen py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">Learnings & Observations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic insights from analyzing pre and post-COVID communication campaigns
          </p>
        </motion.div>

        {/* Main Learnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {learnings.map((learning, index) => (
            <motion.div
              key={learning.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className={`h-full border-2 ${learning.borderColor} bg-gradient-to-br ${learning.bgGradient} hover:shadow-xl transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${learning.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <learning.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl text-gray-800">{learning.title}</h3>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{learning.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-sm text-gray-600 uppercase tracking-wide">Key Observations:</h4>
                    {learning.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${learning.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-gray-600 leading-relaxed">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Strategic Insights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl text-gray-800 text-center mb-12">Strategic Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg text-gray-800">{insight.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    insight.impact === 'High' 
                      ? 'bg-red-100 text-red-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {insight.impact} Impact
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">{insight.insight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Note */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mb-16"
        >
          <h3 className="text-2xl text-gray-800 mb-4 text-center">Research Methodology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-blue-600">📊</span>
              </div>
              <h4 className="text-sm text-gray-800">Content Analysis</h4>
              <p className="text-xs text-gray-600">Analyzed 4 major campaigns across 2 brands</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-green-600">🎯</span>
              </div>
              <h4 className="text-sm text-gray-800">Comparative Study</h4>
              <p className="text-xs text-gray-600">Pre vs Post COVID messaging strategies</p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-purple-600">📈</span>
              </div>
              <h4 className="text-sm text-gray-800">Industry Analysis</h4>
              <p className="text-xs text-gray-600">Market trends and consumer behavior shifts</p>
            </div>
          </div>
        </motion.div>

        {/* Final Strategic Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl mb-6">Strategic Recommendation</h3>
          <p className="text-lg opacity-90 max-w-4xl mx-auto leading-relaxed">
            Future IMC strategies should maintain <span className="text-yellow-200">crisis-adaptive frameworks</span> that can 
            rapidly pivot messaging while preserving core brand values. The most successful brands will be those that 
            can seamlessly blend <span className="text-red-200">emotional storytelling</span> with 
            <span className="text-blue-200"> rational assurance</span>, creating communication that resonates both 
            with hearts and minds across different crisis scenarios.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningsSection;