// components/ProfilePage.tsx
"use client"
import { motion } from 'framer-motion';

const ProfilePage = () => {
  const destinations = [
    { name: 'Paris', image: '/images/favicon.png' },
    { name: 'Tokyo', image: '/images/ujj.jpg' },
    { name: 'New York', image: '/images/logo-travel-web.png' },
    // { name: 'Sydney', image: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Section */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Picture and Personal Details */}
        <motion.div
          className="flex items-center mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/images/ujj.jpg"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full border-4 border-gray-300 mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Travel Enthusiast & Blogger</p>
            <p className="text-gray-600">john.doe@example.com</p>
            <p className="text-gray-600">Based in: New York, USA</p>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Hi! I'm John, a passionate traveler who has visited over 30 countries. I love exploring new cultures,
            cuisines, and landscapes, and I enjoy sharing my travel experiences with others.
          </p>
        </motion.div>

        {/* Interested Destinations */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interested Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {destinations.map((destination) => (
              <motion.div
                key={destination.name}
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 w-full py-2 text-center text-white text-lg font-semibold">
                  {destination.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
