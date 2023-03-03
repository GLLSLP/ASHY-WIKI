import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.css'

const Header = ({ siteTitle, addons }) => (
  <header className="header">
    <div>
      {/* <link rel="homepage icon" href="manggom.png"/> */}
      <h1 style={{ margin: 0 }}>
        <Link to="/" >{siteTitle}</Link>
      </h1>
    </div>
    {addons ? <div className="header__addons">{addons}</div>: null}
  </header>
)

Header.propTypes = {
  // siteTitle: PropTypes.string,
  siteTitle: 'ㅁㄴㅇㄹ',
}

Header.defaultProps = {
  siteTitle: `ㅁㄴㅇㄹ`,
}

export default Header
