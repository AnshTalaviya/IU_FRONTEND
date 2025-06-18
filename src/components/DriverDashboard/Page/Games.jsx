import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Games() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [hoveredGame, setHoveredGame] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });
  }, []);

  const games = [
    {
      id: 1,
      title: 'Memory',
      description: 'Enhance your memory and concentration with this pattern-matching game',
      icon: '🧙‍♀',
      color: 'from-green-400 to-green-600',
      features: [
        'Improves Short-term Memory',
        'Enhances Pattern Recognition',
        'Boosts Concentration'
      ],
      difficulty: 'Medium',
      progress: 75,
      highScore: 1200,
      benefits: [
        'Strengthens neural connections',
        'Improves focus and attention span',
        'Helps in better information retention',
        'Develops spatial awareness'
      ],
      ageGroup: 'All Ages'
    },
    {
      id: 2,
      title: 'Snack',
      description: 'Sharpen your mathematical skills with engaging problem-solving exercises',
      icon: '🔢',
      color: 'from-green-400 to-green-600',
      features: [
        'Mental Math Practice',
        'Logical Reasoning',
        'Quick Calculations'
      ],
      difficulty: 'Medium',
      progress: 60,
      highScore: 950,
      benefits: [
        'Enhances numerical reasoning',
        'Improves problem-solving abilities',
        'Develops analytical thinking',
        'Boosts mental calculation speed'
      ],
      ageGroup: 'All Ages'
    }
  ];

  const renderGameContent = () => {
    switch (selectedGame) {
      case 1:
        return <MemoryMatrix gameData={games[0]} />;
      case 2:
        return <MathChallenge gameData={games[1]} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto p-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-green-400">
              Game Zone
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
              Challenge your mind and enhance your cognitive abilities with our engaging brain training games!
            </p>
          </motion.div>

          {!selectedGame ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
              {games.map((game, index) => (
                <motion.div
                  key={game.id}
                  className="group relative rounded-3xl p-8 bg-gray-800/10 backdrop-blur-lg cursor-pointer border border-white/20 hover:border-white/60"

                  onMouseEnter={() => setHoveredGame(game.id)}
                  onMouseLeave={() => setHoveredGame(null)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -10 }}
                >
                  {/* Animated border gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                  {/* Glowing effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${game.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>

                  <div className="relative z-10">
                    <motion.div
                      className="flex items-start space-x-6 mb-8"
                      animate={hoveredGame === game.id ? { x: 10 } : { x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className={`w-24 h-24 bg-gray-900/50 rounded-2xl flex items-center justify-center border border-white/30 group-hover:border-white/80 transition-all duration-500`}>
                        <motion.span
                          className="text-5xl"
                          animate={hoveredGame === game.id ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {game.icon}
                        </motion.span>
                      </div>
                      <div className="flex-1">
                        {/* 
                        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-green-600 to-green-500">
                           {game.title}
                        </h2> */}


                        <h2 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${game.color} text-green-600`}>
                          {game.title}
                        </h2>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-4 py-1.5 bg-gray-900/50 rounded-full text-sm text-green-500 border border-green-500/20">
                            {game.difficulty}
                          </span>
                          <span className="px-4 py-1.5 bg-gray-900/50 rounded-full text-sm text-green-500 border border-green-500/20">
                            {game.ageGroup}
                          </span>
                        </div>
                      </div>
                    </motion.div>

                    <p className="text-white/80 text-lg mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {game.description}
                    </p>

                    {/* Game Stats */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <motion.div
                        className="bg-gray-900/50 rounded-2xl p-5 border border-2 border-green-500 group-hover:border-green-500 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-center">
                          <div className="text-sm text-green-500 mb-1">High Score</div>
                          <div className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">
                            {game.highScore}
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        className="bg-gray-900/50 rounded-2xl p-5 border border-2 border-green-500 group-hover:border-green-500 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-center">
                          <div className="text-sm text-green-500 mb-1">Progress</div>
                          <div className="text-3xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">
                            {game.progress}%
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Quick Features */}
                    <div className="space-y-3 mb-8">
                      {game.features.slice(0, 2).map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          whileHover={{ x: 10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-8 h-8 bg-gray-900/50 rounded-full flex items-center justify-center border border-green-500/30 group-hover:border-green-500/50">
                            <span className="text-green-500">✓</span>
                          </div>
                          <span className="text-white/80 group-hover:text-white transition-colors duration-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Click to Play Hint */}
                    <motion.div
                      className="text-center"
                      animate={hoveredGame === game.id ? { y: 5 } : { y: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={() => setSelectedGame(game.id)}
                    >
                      <p className="text-green-500/70 text-sm font-medium group-hover:text-green-400 transition-colors duration-300">
                        Click to play and see more details
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={() => setSelectedGame(null)}
                className="mb-8 px-6 py-3 bg-gray-800/50 text-white rounded-xl hover:bg-gray-700/50 transition-all duration-300 flex items-center space-x-3 border border-green-500 hover:border-green-500/50"
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-left"></i>
                <span>Back to Games</span>
              </motion.button>
              {renderGameContent()}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

// Memory Matrix Game Component
function MemoryMatrix({ gameData }) {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <div className="bg-green-900/30 from-green-500/30 to-green-700/30 rounded-2xl p-8 shadow-2xl border-2 border-green-400 border-opacity-30 h-[80vh]">
      <div className="flex h-full gap-8">
        {/* Left Side - Fixed Image */}
        <div className="w-1/3 flex-shrink-0">
          <div className="h-full bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center border-2 border-green-400/30 overflow-hidden">
            <div className="relative w-full h-[60%] mb-6 rounded-xl overflow-hidden">
              <img
                src="https://img.gamemonetize.com/3u86sd48o7wxn5ws7hf4gjfxhot064wj/512x384.jpg"
                alt="Memory Matrix Game"
                className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">{gameData.title}</h2>
            <motion.button
              className="bg-green-600 hover:bg-green-700 border-2 border-green-400/30 rounded-lg transition-all px-6 py-4 w-full text-white font-bold text-lg text-center mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://v0-memory-matching-game-phi.vercel.app/', '_blank')}


            >
              Start New Game
            </motion.button>

          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-2/3 overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-8">
            {/* Key Features Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30">
              <h3 className="text-white text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-3">
                {gameData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-700/20 rounded-full flex items-center justify-center border border-green-700/30">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white opacity-90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30">
              <h3 className="text-white text-xl font-semibold mb-4">Benefits</h3>
              <div className="space-y-3">
                {gameData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-700/20 rounded-full flex items-center justify-center border border-green-700/30">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-white opacity-90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Game Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30 text-center w-full max-w-md mx-auto">
              <div className="text-center">

                <p className="text-white text-lg mb-6">
                  Coming soon: Challenge your mathematical abilities with engaging problems!
                </p>
                <div className="flex justify-center">
                  <motion.button
                    type="button"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all border-2 border-green-400/30 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Tutorial
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Math Challenge Game Component
function MathChallenge({ gameData }) {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  return (
    <div className="bg-green-900/30 from-green-500/30 to-green-700/30 rounded-2xl p-8 shadow-2xl border-2 border-green-400 border-opacity-30 h-[80vh]">
      <div className="flex h-full gap-8">
        {/* Left Side - Fixed Image */}
        <div className="w-1/3 flex-shrink-0">
          <div className="h-full bg-gray-800/50 rounded-xl p-6 flex flex-col items-center justify-center border-2 border-green-400/30 overflow-hidden">
            <div className="relative w-full h-[60%] mb-6 rounded-xl overflow-hidden">
              <img
                src="https://poisonwebgames.com/wp-content/uploads/thumbs/gamedistribution/M/math-games-for-adults.jpeg"
                alt="Math Challenge Game"
                className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <h2 className="text-3xl font-bold text-white text-center mb-4">{gameData.title}</h2>
            <motion.button
              className="bg-green-600 hover:bg-green-700 border-2 border-green-400/30 rounded-lg transition-all px-6 py-4 w-full text-white font-bold text-lg text-center mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://v0-mobile-snake-game-lemon.vercel.app/', '_blank')}

            >
              Start New Game
            </motion.button>
          </div>
        </div>

        {/* Right Side - Scrollable Content */}
        <div className="w-2/3 overflow-y-auto pr-4 custom-scrollbar">
          <div className="space-y-8">
            {/* Key Features Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30">
              <h3 className="text-white text-xl font-semibold mb-4">Key Features</h3>
              <div className="space-y-3">
                {gameData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-700/20 rounded-full flex items-center justify-center border border-green-700/30">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-white opacity-90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30">
              <h3 className="text-white text-xl font-semibold mb-4">Benefits</h3>
              <div className="space-y-3">
                {gameData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-green-700/20 rounded-full flex items-center justify-center border border-green-700/30">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-white opacity-90">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Game Section */}
            <div className="bg-green-500/10 rounded-xl p-6 backdrop-blur-sm border-2 border-green-400/30 text-center w-full max-w-md mx-auto">
              <div className="text-center">

                <p className="text-white text-lg mb-6">
                  Coming soon: Challenge your mathematical abilities with engaging problems!
                </p>
                <div className="flex justify-center">
                  <motion.button
                    type="button"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all border-2 border-green-400/30 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Tutorial
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this CSS at the top of your file or in your global CSS
const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(34, 197, 94, 0.3);
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 197, 94, 0.5);
  }
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Games;
