import React from 'react'
import useDarkMode from 'use-dark-mode'

import './dark-mode-toggle.css'

const DarkModeToggle = (props: { showHint?: boolean}) => {
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode(false)
  const hint = isDark ? 'πλ°μμ§λ' : 'πμ΄λμμ§λ'

  return (
    //κΈ°μ‘΄ = κ²μ μ μμ΄μ½ μμ§μ
    // <label
    //   className="dark-mode-toggle"
    //   aria-label={hint}
    //   title={hint}
    // >
    //   <input type="checkbox" checked={!isDark} onChange={toggleDarkMode} />
    //   <div />
    //   {props.showHint && <span className="dark-mode-toggle__hint">{hint}</span>}
    // </label>

    //λ°κΎΌλ²μ  : μμ΄μ½ μμ κ³  μ΄λͺ¨μ§λ‘λ§
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
