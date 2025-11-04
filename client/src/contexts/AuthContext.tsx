import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  logout: () => void;
  setUser: Dispatch<SetStateAction<User>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // const savedUser = localStorage.getItem('user');
    // if (savedUser) {
    //   setUser(JSON.parse(savedUser));
    // }
  }, []);

  

  // const register = async (name: string, email: string, password: string): Promise<boolean> => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/register`, {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ name, email, password }),
  //       })        
  //       if (!response.ok) {
  //         const errorData = await response.json().catch(() => ({}));
  //         console.error('Registration Failed', errorData.message || response.statusText)
  //         return errorData.message || response.statusText;
  //       }
  //       return true;
  //     }
  //     catch(error) {
  //       console.log(error);
  //       return false;
  //     }    
  // };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
