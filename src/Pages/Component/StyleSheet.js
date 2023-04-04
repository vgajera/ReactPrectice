import React from 'react'
import './stylesheet.css'

export default function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div className={className}>StyleSheet</div>
  )
}
