import React, { useContext } from 'react'
import { ThemeContext } from '../../common/ThemeContext';

export default function Greet(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`${theme === "light-card" ? "light-card" : "dark-card"} card`}>
            <div className="card-title">
                <h3>Props example</h3>
            </div>
            <div className="card-caption">
                <h1>hellow {props.name}</h1>
                {props.children}
            </div>
        </div>
    )
}