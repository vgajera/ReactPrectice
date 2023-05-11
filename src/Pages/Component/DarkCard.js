import React, { useContext } from 'react'
import { ThemeContext } from '../../common/ThemeContext';

export default function DarkCard() {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card-row">  
    <div className={`${theme === "light-card" ? "light-card" : "dark-card"} card`}>
        <div className="card-title">
            <h3>context api card demo</h3>
        </div>                
        <div className="card-caption">
            This is dark card managed by context api provider 
        </div>
    </div>
    </div> 
  )
}
