import React from 'react'
export const UserContext = createContext(null);

const UserContextProvider = ({children}) => {
    const serverUrl = "http://localhost:8000"
    const value={

    }
  return (
    <div>
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContext
