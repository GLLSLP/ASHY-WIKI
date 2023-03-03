import React from 'react'
import useDarkMode from 'use-dark-mode'

import './dark-mode-toggle.css'

const DarkModeToggle = (props: { showHint?: boolean}) => {
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode(false)
  const hint = isDark ? '🌔밝아지는' : '🌒어두워지는'

  return (
    //기존 = 검정색 아이콘 움직임
    // <label
    //   className="dark-mode-toggle"
    //   aria-label={hint}
    //   title={hint}
    // >
    //   <input type="checkbox" checked={!isDark} onChange={toggleDarkMode} />
    //   <div />
    //   {props.showHint && <span className="dark-mode-toggle__hint">{hint}</span>}
    // </label>

    //바꾼버전 : 아이콘 없애고 이모지로만
        <label
        className="dark-mode-toggle"
        aria-label={hint}
        title={hint}
        onClick={toggleDarkMode}
      >
        {/* <input type="checkbox" checked={!isDark} onChange={toggleDarkMode}/> */}
        <div />
        {props.showHint && <span className="dark-mode-toggle__hint">{hint}</span>}
      </label>
  )
}

export default DarkModeToggle
