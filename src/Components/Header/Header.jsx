import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className=''>
        <div className="navbar bg-base-100 fixed top-0 left-0 z-[1000]">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='font-[100]'>Aegis</span><span className='text-[#e34d1c]'>-</span><span className='font-[500] text-success'>Nexus</span></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='/about'>About</Link></li>
                {/* <li tabIndex={0}>
                    <a>
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                    </a>
                    <ul className="p-2 bg-base-100">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    </ul>
                </li> */}
                <li><Link to='/contact'>Contact</Link></li>
                {/* <a href="#my-modal-2" className="btn">open modal</a> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header