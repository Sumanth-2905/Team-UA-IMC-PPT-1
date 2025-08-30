import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import NavigationButtons from './components/NavigationButtons';

// Import all 14 slides
import Slide01_Introduction from './components/slides/Slide01_Introduction';
import Slide02_Industry from './components/slides/Slide02_Industry';
import Slide03_HDFCOverview from './components/slides/Slide03_HDFCOverview';
import Slide04_ICICIOverview from './components/slides/Slide04_ICICIOverview';
import Slide05_HDFCPreCovid from './components/slides/Slide05_HDFCPreCovid';
import Slide06_HDFCPostCovid from './components/slides/Slide06_HDFCPostCovid';
import Slide07_ICICIPreCovid from './components/slides/Slide07_ICICIPreCovid';
import Slide08_ICICIPostCovid from './components/slides/Slide08_ICICIPostCovid';
import Slide09_HDFCComparison from './components/slides/Slide09_HDFCComparison';
import Slide10_ICICIComparison from './components/slides/Slide10_ICICIComparison';
import Slide11_CrossBrandComparison from './components/slides/Slide11_CrossBrandComparison';
import Slide12_ConsumerPerception from './components/slides/Slide12_ConsumerPerception';
import Slide13_Learnings from './components/slides/Slide13_Learnings';
import Slide14_Team from './components/slides/Slide14_Team';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showPartyBomb, setShowPartyBomb] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const slides = [
    { component: Slide01_Introduction, title: 'Introduction' },
    { component: Slide02_Industry, title: 'Industry Overview' },
    { component: Slide03_HDFCOverview, title: 'HDFC Life Overview' },
    { component: Slide04_ICICIOverview, title: 'ICICI Prudential Overview' },
    { component: Slide05_HDFCPreCovid, title: 'HDFC Pre-Covid Campaign' },
    { component: Slide06_HDFCPostCovid, title: 'HDFC Post-Covid Campaign' },
    { component: Slide07_ICICIPreCovid, title: 'ICICI Pre-Covid Campaign' },
    { component: Slide08_ICICIPostCovid, title: 'ICICI Post-Covid Campaign' },
    { component: Slide09_HDFCComparison, title: 'HDFC Brand Comparison' },
    { component: Slide10_ICICIComparison, title: 'ICICI Brand Comparison' },
    { component: Slide11_CrossBrandComparison, title: 'Cross-Brand Comparison' },
    { component: Slide12_ConsumerPerception, title: 'Consumer Perception Shifts' },
    { component: Slide13_Learnings, title: 'Learnings & Observations' },
    { component: Slide14_Team, title: 'Team & Thank You' }
  ];

  // Force scroll to top function
  const forceScrollToTop = () => {
    // Multiple approaches to ensure scroll to top works
    
    // Method 1: Direct scrollTop assignment
    if (slideContainerRef.current) {
      slideContainerRef.current.scrollTop = 0;
    }
    
    // Method 2: Window scroll
    window.scrollTo(0, 0);
    
    // Method 3: Document scroll
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Method 4: Using requestAnimationFrame for after DOM updates
    requestAnimationFrame(() => {
      if (slideContainerRef.current) {
        slideContainerRef.current.scrollTop = 0;
      }
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Double RAF for extra safety
      requestAnimationFrame(() => {
        if (slideContainerRef.current) {
          slideContainerRef.current.scrollTop = 0;
        }
        window.scrollTo(0, 0);
      });
    });
  };

  // Handle slide navigation with smooth transitions
  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < slides.length && slideIndex !== currentSlide) {
      // Check if navigating from slide 13 to slide 14 (final slide)
      const isGoingToFinalSlide = currentSlide === 12 && slideIndex === 13;
      
      // Force scroll to top immediately
      forceScrollToTop();
      
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide(slideIndex);
        // Force scroll again after slide change
        forceScrollToTop();
        setIsTransitioning(false);
        
        // Trigger party bomb animation for final slide
        if (isGoingToFinalSlide) {
          setTimeout(() => {
            setShowPartyBomb(true);
            // Auto-hide party bomb after animation
            setTimeout(() => setShowPartyBomb(false), 5000);
          }, 400); // Delay to let slide transition complete
        }
        
        // Additional scroll reset after transition completes
        setTimeout(() => {
          forceScrollToTop();
        }, 100);
      }, 300);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      forceScrollToTop();
      goToSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      forceScrollToTop();
      goToSlide(currentSlide - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle navigation if the user is not focused on an input or if Ctrl/Cmd is pressed
      const isInputFocused = event.target instanceof HTMLInputElement || 
                            event.target instanceof HTMLTextAreaElement ||
                            (event.target as Element)?.closest('[contenteditable="true"]');
      
      if (isInputFocused) return;

      if (event.key === 'ArrowRight' || (event.key === ' ' && !event.shiftKey)) {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      } else if (event.key >= '1' && event.key <= '9') {
        event.preventDefault();
        const slideNum = parseInt(event.key) - 1;
        if (slideNum < slides.length) {
          goToSlide(slideNum);
        }
      }
      // Remove ArrowUp and ArrowDown from navigation to allow page scrolling
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Handle swipe gestures for mobile
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (event: TouchEvent) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = event.changedTouches[0].clientX;
      const endY = event.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;

      // Only trigger slide navigation for horizontal swipes with significant distance
      // and when horizontal movement is much greater than vertical movement
      if (Math.abs(diffX) > Math.abs(diffY) * 2 && Math.abs(diffX) > 80) {
        if (diffX > 0) {
          handleNext(); // Swipe left - next slide
        } else {
          handlePrevious(); // Swipe right - previous slide
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSlide]);

  // Ensure scroll to top when slide changes
  useEffect(() => {
    forceScrollToTop();
    
    // Additional safety measure with slight delay
    const timeoutId = setTimeout(() => {
      forceScrollToTop();
    }, 50);
    
    return () => clearTimeout(timeoutId);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Slide Container */}
      <div
        ref={slideContainerRef}
        className="slide-container w-full min-h-screen overflow-y-auto overflow-x-hidden"
      >
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: isTransitioning ? 0 : 1, scale: isTransitioning ? 0.95 : 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full min-h-screen"
        >
          <CurrentSlideComponent />
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                forceScrollToTop();
                goToSlide(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}
              title={`Slide ${index + 1}: ${slides[index].title}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <NavigationButtons
        currentIndex={currentSlide}
        totalSections={slides.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {/* Slide Progress */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="fixed top-8 left-8 z-50"
      >
        <div className="bg-black/50 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/20">
          <div className="text-white text-sm">
            <span className="text-blue-400">{currentSlide + 1}</span>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-300">{slides.length}</span>
          </div>
          <div className="text-xs text-gray-400 mt-1 max-w-48 truncate">
            {slides[currentSlide].title}
          </div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (currentSlide + 1) / slides.length }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ width: '100%' }}
      />

      {/* Instructions Overlay (appears only on first slide) */}
      {currentSlide === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="fixed bottom-20 right-8 z-40"
        >
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-white/20 max-w-72">
            <div className="text-white text-sm space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">← →</span>
                <span>Navigate slides</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">↑ ↓</span>
                <span>Scroll within slide</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">1-9</span>
                <span>Jump to slide</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-pink-400">Swipe</span>
                <span>Mobile navigation</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Party Bomb Animation */}
      {showPartyBomb && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {/* Confetti explosion from center */}
          {[...Array(75)].map((_, i) => (
            <motion.div
              key={`confetti-${i}`}
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                rotate: 0,
                opacity: 1
              }}
              animate={{
                x: `${50 + (Math.random() - 0.5) * 280}vw`,
                y: `${50 + (Math.random() - 0.5) * 280}vh`,
                scale: [0, 1.8, 0.9, 0],
                rotate: [0, Math.random() * 360, Math.random() * 720],
                opacity: [1, 1, 0.8, 0]
              }}
              transition={{
                duration: 3.5 + Math.random() * 2,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: Math.random() * 0.6
              }}
              className={`absolute w-4 h-4 ${
                ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-red-400', 'bg-orange-400', 'bg-cyan-400', 'bg-lime-400'][
                  Math.floor(Math.random() * 9)
                ]
              } rounded-full shadow-lg`}
              style={{
                boxShadow: `0 0 10px ${
                  ['#facc15', '#f472b6', '#60a5fa', '#4ade80', '#a855f7', '#ef4444', '#fb923c', '#22d3ee', '#84cc16'][
                    Math.floor(Math.random() * 9)
                  ]
                }`
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${25 + Math.random() * 50}vw`,
                y: `${25 + Math.random() * 50}vh`,
                scale: [0, 1.5, 2.2, 0],
                opacity: [0, 0.8, 1, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: Math.random() * 0.8
              }}
              className="absolute text-2xl"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))'
              }}
            >
              ✨
            </motion.div>
          ))}
          
          {/* Party bomb explosion center */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 1.5, 4, 0], 
              opacity: [1, 1, 0.8, 0],
              rotate: [0, 90, 180, 360]
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.68, -0.55, 0.265, 1.55]
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl"
          >
            💥
          </motion.div>
          
          {/* Secondary explosion effects */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1, 2.5, 0], 
              opacity: [0, 0.8, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 2,
              ease: [0.175, 0.885, 0.32, 1.275],
              delay: 0.4
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl"
          >
            🎆
          </motion.div>
          

          
          {/* Shooting stars */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                scale: [0, 0.8, 1.2, 0],
                opacity: [0, 0.6, 1, 0],
                rotate: [0, 45, 90]
              }}
              transition={{
                duration: 3,
                ease: [0.25, 0.1, 0.25, 1],
                delay: Math.random() * 1.2
              }}
              className="absolute"
            >
              <div className={`w-2 h-8 bg-gradient-to-t ${
                ['from-yellow-400', 'from-pink-400', 'from-blue-400', 'from-purple-400', 'from-green-400'][
                  Math.floor(Math.random() * 5)
                ]
              } to-transparent transform rotate-45`} />
            </motion.div>
          ))}
          
          {/* Additional floating particles for smoothness */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                x: '50vw',
                y: '50vh',
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${30 + Math.random() * 40}vw`,
                y: `${30 + Math.random() * 40}vh`,
                scale: [0, 1, 0.5, 0],
                opacity: [0, 0.4, 0.8, 0],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: 4,
                ease: [0.165, 0.84, 0.44, 1],
                delay: Math.random() * 2
              }}
              className={`absolute w-2 h-2 ${
                ['bg-yellow-300', 'bg-pink-300', 'bg-blue-300', 'bg-purple-300', 'bg-green-300'][
                  Math.floor(Math.random() * 5)
                ]
              } rounded-full blur-sm`}
            />
          ))}
        </div>
      )}

      {/* Custom CSS for smooth animations */}
      <style>{`
        body {
          overflow-x: hidden !important;
          background: #000 !important;
        }
        
        /* Disable text selection during transitions */
        .transitioning * {
          user-select: none;
          pointer-events: none;
        }

        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        /* Smooth focus transitions */
        button:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5) !important;
          outline-offset: 2px !important;
        }
        
        /* Smooth scrolling - but allow instant when needed */
        html {
          scroll-behavior: smooth;
        }
        
        /* Override smooth scrolling for slide container when transitioning */
        .slide-container {
          scroll-behavior: auto !important;
        }
      `}</style>
    </div>
  );
}