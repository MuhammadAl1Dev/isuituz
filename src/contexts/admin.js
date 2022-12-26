import { createContext, useState, useContext } from "react";

const ContextAdmin = createContext();

export default function Admin({ children }) {
  const [admin, setAdmin] = useState([
    {
      id: 1,
      name: '',
      password: 'admin11',
    }
  ]);

  return (
    <ContextAdmin.Provider value={[admin, setAdmin]}>
      {children}
    </ContextAdmin.Provider>
  );
}

const useAdmin = () => useContext(ContextAdmin);

export { useAdmin };
