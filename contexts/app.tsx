import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [session, setSession] = useState({});
  const [fixShipping, setFixShipping] = useState(''); 
  const [filter, setFilter] = useState({});
  return (
    <AppContext.Provider value={{session, setSession,fixShipping, setFixShipping,filter,setFilter}}>
      {children}
    </AppContext.Provider>
  );
};
