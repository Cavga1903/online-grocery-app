import React, { createContext, useContext, useState, ReactNode } from 'react';

export type User = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string; // Profil resmi URI
};

const defaultUser: User = {
  name: 'Tolga Çavga',
  email: 'tolga@email.com',
  phone: '+90 5xx xxx xx xx',
  address: 'İzmir, Türkiye',
  avatar: '',
};

const UserContext = createContext<{
  user: User;
  setUser: (user: User) => void;
} | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used inside UserProvider');
  }
  return ctx;
};