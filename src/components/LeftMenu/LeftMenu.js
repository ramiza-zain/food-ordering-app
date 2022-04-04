import React from 'react'
import './LeftMenu.css';
function LeftMenu({icon, text}) {
  return (
    <div className='containerLeft'>
      <div className='menuContainer'>
        {icon}
        <h4 className='menuText'>{text}</h4>
      </div>
    </div>
  )
}

export default LeftMenu