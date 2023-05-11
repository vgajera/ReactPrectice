import React, { useContext } from 'react';
import { ThemeContext } from '../../common/ThemeContext';


export default function Context() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
   <>
    <div className={`${theme === "light" ? "light" : "dark"} wrapper`}>
        <a onClick={toggleTheme} className='btn btn-brand'>Toggle dark theme</a>
      </div>
    </>
  )
}
