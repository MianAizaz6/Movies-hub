import React from 'react';
import '../Styles/header.css'

function Header() {
  return (
    <div>
        <span className="header" onClick={()=> window.scroll(0,0)}>🎬   Entertainment Hub     🎦</span>
    </div>
  )
}

export default Header
