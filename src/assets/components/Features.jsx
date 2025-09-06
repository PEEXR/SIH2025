import { motion } from "framer-motion";

export default function App() {
  const coreFeatures = [
    "Automated Booking System.",
    "Chatbot: To reduce the friction between students wanting to get help and giving them access to professionals.",
    "Support Rooms (for encrypted conversation between student and helper).",
    "Inclusive for all: All members of the institution will have access to the psychologists, and any student can apply freely anytime."
  ];

  const usps = [
    "Offline access to psychologists often needs a written psych eval test, that drastically reduces the willingness of people to reach out.",
    "The psychologists sessions are costly and not everyone believes in talking to trained professionals. Making them free and accessible as supplied by the educational institutions will make students more willing to seek help."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full space-y-12">
        
        {/* Header */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Features & Unique Selling Points
        </motion.h1>

        {/* Core Features */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Core Features
          </h2>
          <ul className="space-y-4">
            {coreFeatures.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-blue-500"></span>
                <p>{feature}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* USP Section */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Unique Selling Points
          </h2>
          <ul className="space-y-4">
            {usps.map((usp, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <span className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-green-500"></span>
                <p>{usp}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
