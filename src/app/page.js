'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Page 1
      </motion.div>
    </Layout>
  );
}
