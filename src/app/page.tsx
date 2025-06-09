'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-fuchsia-600 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
          Welcome to <span className="text-yellow-300">Nomadule</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90">
          A place where nomadic freedom meets modular living.  
        </p>
      </motion.div>

      {/* Stay Tuned Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-8 bg-white text-purple-800 px-6 py-4 rounded-full text-sm font-semibold shadow-xl backdrop-blur-md animate-pulse z-10"
      >
        🌍 Stay Tuned – Something modular is coming!
      </motion.div>

      {/* Optional animated background blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-300 rounded-full mix-blend-overlay blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-40 right-[-120px] w-[300px] h-[300px] bg-fuchsia-400 rounded-full mix-blend-overlay blur-2xl opacity-25 animate-ping" />
    </main>
  );
}
