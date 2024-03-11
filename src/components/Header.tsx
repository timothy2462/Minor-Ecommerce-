import logo from '../assets/logo.svg'
import cartIcon from "../assets/icon-cart.svg"
import avatar from '../assets/image-avatar.png'
import menuIcon from "../assets/icon-menu.svg"
import closeIcon from "../assets/icon-close.svg"
import { useState } from 'react'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowmenu() {
        setShowMenu(true)
    }

    function handleHidemenu() {
        setShowMenu(false)
    }

  return (
    <div>
    <header className='bg-white lg:w-[80%] md:w-[90%] mx-auto border-b border-[ hsl(220,14%,75%)] lg:flex md:flex items-center justify-between hidden'>
        <nav className='flex items-center lg:w-[60%] md:w-[70%]'>
        <img src={logo} alt="" className='py-10'/>
        <ul className='flex items-center justify-between ml-8 w-2/3 text-[hsl(219,9%,45%)]'> 
            <li><a href="#" className='hover:text-black hover:border-b-4 hover:border-[hsl(26,100%,55%)] py-10'>Collections</a></li>
            <li><a href="#" className='hover:text-black hover:border-b-4 hover:border-[hsl(26,100%,55%)] py-10'>Men</a></li>
            <li><a href="#" className='hover:text-black hover:border-b-4 hover:border-[hsl(26,100%,55%)] py-10'>Women</a></li>
            <li><a href="#" className='hover:text-black hover:border-b-4 hover:border-[hsl(26,100%,55%)] py-10'>About</a></li>
            <li><a href="#" className='hover:text-black hover:border-b-4 hover:border-[hsl(26,100%,55%)] py-10'>Contact</a></li>
        </ul>
        </nav>
        <div className='flex items-center'>
            <img src={cartIcon} alt="" />
            <img src={avatar} alt="" className='w-[40px] h-[40px] ml-8'/>
        </div>
    </header>
    <header className='bg-white w-[80%] mx-auto border-b border-[ hsl(220,14%,75%)] flex items-center justify-between lg:hidden md:hidden py-8'>
        <div className='flex items-center'>
            <img src={menuIcon} alt="" className='mr-4' onClick={handleShowmenu}/>
            <img src={logo} alt="" />
        </div>
        <div className='flex items-center'>
            <img src={cartIcon} alt="" />
            <img src={avatar} alt="" className='w-[30px] h-[30px] ml-4'/>
        </div>
    {showMenu && (<ul className='text-black bg-[rgba(0,0,0,0.5)] w-[100%] absolute h-[100vh] top-0 left-0'>
        <div className='h-[100vh] bg-white w-[60%] py-10 px-6 font-[700]'>
        <img src={closeIcon} alt="" className='mb-16' onClick={handleHidemenu}/>
            <li className='hover:text-hsl(219,9%,45%) mb-4'><a href="#">Collections</a></li>
            <li className='hover:text-hsl(219,9%,45%) mb-4'><a href="#">Men</a></li>
            <li className='hover:text-hsl(219,9%,45%) mb-4'><a href="#">Women</a></li>
            <li className='hover:text-hsl(219,9%,45%) mb-4'><a href="#">About</a></li>
            <li className='hover:text-hsl(219,9%,45%)'><a href="#">Contact</a></li>
        </div>
        </ul>)}
    </header>
    </div>
  )
}

export default Header