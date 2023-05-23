import { useState } from "react";
import React from 'react';
import { RiShoppingCartLine,RiHeart2Line,RiMenu2Line,RiCloseLine} from "react-icons/ri";
import Header_Menu from "./Header_Menu";


const Header = () => {
  const headerDesktop ={
    container: 'hidden lg:flex items-center gap-6',
    hover: 'hover:text-[#E58D27]',
};
  const headerMobil ={
    container: 'mt-20',
    listItem: 'text-4xl block text-center p-4'
  }
  const [showMenu,setShowMenu]=useState(false);
  return (
    <header className='h-[7vh] lg:h-[10vh] text-gray-400 px-10 py-4 flex items-center justify-between bg-[#181A20] z-40'>
      {/*Mobil*/}
      <button onClick={()=>setShowMenu(!showMenu)} className='text-2xl lg:hidden'>
      <RiMenu2Line/>
      </button>
      <div className={`fixed left-0 w-full h-full bg-[#181A20] z-50 transition-all ${showMenu?"top-0":"-top-full"}`}>
      <button className="p-4 text-3xl">
          <RiCloseLine onClick={()=>setShowMenu(!showMenu)} className='text-2xl lg:hidden'/>
      </button>

       {/*Menu Mobil*/}
      <div>
        <Header_Menu stylesMobil={headerMobil}/>
      </div>
      </div>
      {/*Menu Desktop*/}
      <div>
        <Header_Menu styles={headerDesktop}/>
      </div>
     
      {/*User menu*/}
     <ul className='flex items-center gap-6 text-xl'>
      <li>
        <button className='hover:text-[#E58D27]'>
        <RiShoppingCartLine/>
        </button>
      </li>
      <li>
        <button className='hover:text-[#e58d27]'>
        <RiHeart2Line/>
        </button>
      </li>
      <li>
        <button>
        <img src="https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?" alt="perfil" className='w-8 h-8 object-cover rounded-full ring-2 hover:ring-[#E58D27]' />
        </button>
      </li>
     </ul>
    </header>
  );
};

export default Header;