import { createContext, useContext, useState, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

type ErrorContextType = {
  showError: (message: string) => void;
};

const ErrorContext = createContext<ErrorContextType | null>(null);

export const useError = () => useContext(ErrorContext)!;

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  const showError = (message: string) => {
    setError(message);
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-5 right-5 bg-red-600 text-white rounded-lg shadow-lg p-4 flex items-center space-x-3 z-50"
        >
          <AlertCircle className="w-5 h-5" />
          <p>{error}</p>
          <button
            className="ml-3 bg-white/20 px-2 py-1 rounded text-sm"
            onClick={() => setError(null)}
          >
            Close
          </button>
        </motion.div>
      )}
    </ErrorContext.Provider>
  );
};
