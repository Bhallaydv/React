import React, { createContext } from 'react'

export const Theme=createContext();

const ThemeProvider = ({children}) => {
  return (
    <div>
      <Theme.Provider>

{children}
      </Theme.Provider>
    </div>
  )
}

export default ThemeProvider
