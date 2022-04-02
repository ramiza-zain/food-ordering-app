import React from 'react'
import './LeftMenu.css';
import {BiFoodMenu} from 'react-icons/bi';
function LeftMenu() {
  return (
    <div className='containerLeft'>
      <div className='menuContainer'>
        <BiFoodMenu width={20} height={20} color={'#3cc274'} />
        <h4 className='menuText'>MENU</h4>
      </div>
    </div>
  )
}

export default LeftMenu