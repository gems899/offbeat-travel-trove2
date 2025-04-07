
import React from 'react';
import { Train, Bus, Plane, Car, Clock, Calendar, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Transport } from '@/data/destinations';

interface TransportInfoProps {
  transport: Transport[];
  isOpen: boolean;
}

const transportIcons = {
  train: <Train className="w-5 h-5" />,
  bus: <Bus className="w-5 h-5" />,
  flight: <Plane className="w-5 h-5" />,
  taxi: <Car className="w-5 h-5" />
};

const TransportInfo: React.FC<TransportInfoProps> = ({ transport, isOpen }) => {
  if (!isOpen || !transport || transport.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-md"
    >
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <Train className="mr-2 h-5 w-5 text-primary" />
        <span>How to Reach</span>
      </h3>
      <div className="space-y-4">
        {transport.map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className="p-3 bg-white dark:bg-gray-800/50 rounded shadow-sm"
          >
            <div className="flex items-start">
              <div className="mt-1 mr-3 text-primary">
                {transportIcons[item.type] || <Car className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100 flex items-center">
                  {item.name}
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                    from {item.from}
                  </span>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {item.details}
                </p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                  {item.duration && (
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  )}
                  {item.frequency && (
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{item.frequency}</span>
                    </div>
                  )}
                  {item.fareRange && (
                    <div className="flex items-center text-amber-600 dark:text-amber-400">
                      <Banknote className="h-3 w-3 mr-1" />
                      <span>{item.fareRange}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TransportInfo;
