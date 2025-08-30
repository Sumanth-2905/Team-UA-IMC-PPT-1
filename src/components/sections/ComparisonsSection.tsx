import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Heart, Brain, Target, Zap } from 'lucide-react';

const ComparisonsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('within-hdfc');

  const withinBrandComparisons = {
    hdfc: {
      similarities: [
        'Family and children central to both campaigns',
        'Strong emotional storytelling rooted in Indian values',
        'Consistent "Sar Utha Ke Jiyo" brand positioning',
        'Trust, dignity, and empowerment themes'
      ],
      differences: [
        {
          aspect: 'Orientation',
          preCovid: 'Future-oriented empowerment',
          postCovid: 'Past-oriented resilience reflection'
        },
        {
          aspect: 'Narrative',
          preCovid: 'Individual father-daughter bond',
          postCovid: 'Collective "we" generation story'
        },
        {
          aspect: 'Emotional Driver',
          preCovid: 'Pride & independence',
          postCovid: 'Hope & resilience'
        }
      ]
    },
    icici: {
      similarities: [
        'Protection of loved ones emphasis',
        'Family well-being central theme',
        'Emotional undertone for responsibility',
        'Preparation for life\'s uncertainties'
      ],
      differences: [
        {
          aspect: 'Perspective',
          preCovid: 'Child\'s innocent viewpoint',
          postCovid: 'Adult rational reflection'
        },
        {
          aspect: 'Approach',
          preCovid: 'Emotional plea for health',
          postCovid: 'Rational urgency for action'
        },
        {
          aspect: 'Branding',
          preCovid: 'Subtle brand presence',
          postCovid: 'Stronger, clearer branding'
        }
      ]
    }
  };

  const crossBrandComparison = {
    tone: {
      hdfc: 'Emotional, family-first storytelling through bonds and collective resilience',
      icici: 'Rational + emotional blend, more product/decision-driven messaging'
    },
    emotions: {
      hdfc: 'Family empowerment, dignity, pride, resilience, hope',
      icici: 'Concern for loved ones, urgency, practicality, reassurance'
    },
    postCovidConnection: {
      hdfc: 'Connected through shared pandemic experiences - relatable and empathetic',
      icici: 'Built trust with practical promises and urgency - rational decision-making'
    },
    insight: {
      hdfc: 'Stronger emotional connect (hearts)',
      icici: 'Stronger rational assurance (minds)'
    }
  };

  return (
    <section id="comparisons" className="min-h-screen py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">Brand Comparisons</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Analyzing communication strategies within and across brands
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="within-hdfc" className="text-sm md:text-base">
              HDFC Life Evolution
            </TabsTrigger>
            <TabsTrigger value="within-icici" className="text-sm md:text-base">
              ICICI Evolution
            </TabsTrigger>
            <TabsTrigger value="cross-brand" className="text-sm md:text-base">
              HDFC vs ICICI
            </TabsTrigger>
          </TabsList>

          <TabsContent value="within-hdfc">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* HDFC Similarities */}
              <Card className="border-red-200 bg-gradient-to-r from-red-50 to-red-25">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-red-800">
                    <Heart className="w-6 h-6" />
                    <span>Consistent Brand Elements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {withinBrandComparisons.hdfc.similarities.map((similarity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 bg-white rounded-lg"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{similarity}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* HDFC Differences */}
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-25">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-800">
                    <Zap className="w-6 h-6" />
                    <span>Evolution & Changes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {withinBrandComparisons.hdfc.differences.map((diff, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl"
                      >
                        <h4 className="text-lg text-gray-800 mb-4">{diff.aspect}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border-l-4 border-red-500 pl-4">
                            <div className="text-sm text-red-600 mb-1">Pre-COVID</div>
                            <div className="text-gray-700">{diff.preCovid}</div>
                          </div>
                          <div className="border-l-4 border-blue-500 pl-4">
                            <div className="text-sm text-blue-600 mb-1">Post-COVID</div>
                            <div className="text-gray-700">{diff.postCovid}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="within-icici">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* ICICI Similarities */}
              <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-orange-25">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-orange-800">
                    <Heart className="w-6 h-6" />
                    <span>Consistent Brand Elements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {withinBrandComparisons.icici.similarities.map((similarity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 bg-white rounded-lg"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{similarity}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ICICI Differences */}
              <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-blue-25">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-800">
                    <Zap className="w-6 h-6" />
                    <span>Evolution & Changes</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {withinBrandComparisons.icici.differences.map((diff, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl"
                      >
                        <h4 className="text-lg text-gray-800 mb-4">{diff.aspect}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="border-l-4 border-orange-500 pl-4">
                            <div className="text-sm text-orange-600 mb-1">Pre-COVID</div>
                            <div className="text-gray-700">{diff.preCovid}</div>
                          </div>
                          <div className="border-l-4 border-blue-800 pl-4">
                            <div className="text-sm text-blue-800 mb-1">Post-COVID</div>
                            <div className="text-gray-700">{diff.postCovid}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="cross-brand">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {Object.entries(crossBrandComparison).map(([key, comparison], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-red-100 via-purple-100 to-orange-100">
                      <CardTitle className="flex items-center space-x-2 text-gray-800 capitalize">
                        {key === 'tone' && <Brain className="w-6 h-6" />}
                        {key === 'emotions' && <Heart className="w-6 h-6" />}
                        {key === 'postCovidConnection' && <Target className="w-6 h-6" />}
                        {key === 'insight' && <Zap className="w-6 h-6" />}
                        <span>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 bg-gradient-to-r from-red-50 to-red-25 border-r border-gray-200">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                            <span className="text-red-800">HDFC Life</span>
                          </div>
                          <p className="text-gray-700">
                            {typeof comparison === 'object' ? comparison.hdfc : comparison}
                          </p>
                        </div>
                        <div className="p-6 bg-gradient-to-r from-orange-50 to-orange-25">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                            <span className="text-orange-800">ICICI Prudential</span>
                          </div>
                          <p className="text-gray-700">
                            {typeof comparison === 'object' ? comparison.icici : comparison}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Overall Insight */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center"
              >
                <h3 className="text-2xl mb-4">Key Strategic Insight</h3>
                <p className="text-lg opacity-90 max-w-4xl mx-auto">
                  Both brands showcase how external crises reshape communication strategies: 
                  <span className="text-red-200"> HDFC connects hearts</span> through emotional storytelling, while 
                  <span className="text-orange-200"> ICICI convinces minds</span> through rational assurance. 
                  Together, they demonstrate the shift from aspirational planning to survival-focused protection.
                </p>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ComparisonsSection;