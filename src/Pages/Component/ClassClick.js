import React, { Component, useContext } from 'react'
import { ThemeContext } from '../../common/ThemeContext';

export default function ClassClick() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const clickHendler = () => {
    alert("this is clicked event ")
  }

    return (
      <>
       <div className={`${theme === "light-card" ? "light-card" : "dark-card"} card`}>
          <div className="card-title">
              <h3>click event </h3>
          </div>
          <div className="card-caption">
              <button className='btn btn-sm btn-brand' onClick={clickHendler}>Click Me ...</button>
          </div>
        </div>
      </>
    )
}
