import React from 'react';
import { RiShoppingCartLine,RiHeart2Line } from "react-icons/ri";
const Header = () => {
  return (
    <header className=' h-[10vh] text-gray-400 px-10 py-4 flex items-center justify-between bg-[#181A20] z-40'>
      {/*Menu*/}
      <ul className='flex items-center gap-6'>
        <li>
          <a href="#" className='hover:text-[#E58D27] transition-colors'>Home</a>
        </li>
        <li>
          <a href="#" className='hover:text-[#E58D27] transition-colors' >Streams</a>
        </li>
        <li>
          <a href="#" className='text-[#E58D27] transition-colors'>Game Store</a>
        </li>
        <li>
          <a href="#" className='hover:text-[#E58D27] transition-colors'>News</a>
        </li>
      </ul>
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