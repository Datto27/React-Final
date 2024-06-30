import { motion } from "framer-motion";
import React from "react";

const LoadingAnimaton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'rgb(8, 32, 90)',
          marginRight: 10,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'rgb(8, 32, 90)',
          marginRight: 10,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'rgb(8, 32, 90)',
        }}
      />
    </div>
  );
}

export default LoadingAnimaton;