import React from 'react'
import { useState } from "react";
import { RiMoneyDollarCircleLine,RiFacebookLine, RiInstagramLine,RiYoutubeLine,RiTwitterLine,RiFilter3Line, RiCloseLine} from "react-icons/ri";

const Sidebar = () => {
  const [showSideBar,setShowSideBar] = useState(false);
  
  return (
    <>
      <div className={`z-50 w-[80%] md:w-[40%] fixed lg:static top-0 lg:w-80 h-full overflow-y-scroll text-gray-400 transition-all bg-[#181A20] lg:p-0 p-4 shadow-2xl lg:shadow-none ${showSideBar ? "left-0":"-left-full"}`} >
          {/*Search */}
          <div className='bg-[#362c29]/50 rounded-2xl p-4 mb-4'>
              <h4 className='text-white text3 -lg mb-4git'>Categories</h4>
              <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Adventure'  className='accent-[#e58d27] ' />
                  <label htmlFor='Adventure'>Adventure</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='MOO' className='accent-[#e58d27] ' />
                  <label htmlFor='MOO'>MOO</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Casual-Game' className='accent-[#e58d27] ' />
                  <label htmlFor='Casual-Game'>Casual Game</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Strategy'  className='accent-[#e58d27] '/>
                  <label htmlFor='Strategy'>Strategy</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Simulator'  className='accent-[#e58d27] ' />
                  <label htmlFor='Simulator'>Simulator</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Sport-Games'  className='accent-[#e58d27] ' />
                  <label htmlFor='Sport-Games'>Sport Games</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='action-game'  className='accent-[#e58d27] ' />
                  <label htmlFor='action-game'>Action Game</label>
              </div>
            </div>
            <h4 className='my-4 text-lg text-white'>Platform</h4>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='PC'  className='accent-[#e58d27] ' />
                  <label htmlFor='PC'>PC</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='PlayStation 5'  className='accent-[#e58d27] '/>
                  <label htmlFor='PlayStation 5'>PlayStation 5</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Play Station 4'  className='accent-[#e58d27] ' />
                  <label htmlFor='Play Station 4'>Play Station 4</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Xbox Series'  className='accent-[#e58d27] ' />
                  <label htmlFor='Xbox Series'>Xbox Series</label>
              </div>
              <div className='flex items-center gap-2'>
                  <input type="checkbox" id='Nintendo Switch' className='accent-[#e58d27] ' />
                  <label htmlFor='Nintendo Switch'>Nintendo Switch</label>
              </div>
            </div>
            <h4 className='mb-4'>Prices</h4>
            <form action="#" className='flex flex-col gap-8'>
              <div className='flex items-center justify-between gap-4'>
                <div className='relative'>
                  <RiMoneyDollarCircleLine className='absolute -translate-y-1/2 left-2 top-1/2'/>
                  <input type="number" className='bg-[#181a20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                </div>
                <span>-</span>
                <div className='relative'>
                  <RiMoneyDollarCircleLine className='absolute -translate-y-1/2 left-2 top-1/2'/>
                  <input type="number" className='bg-[#181a20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                </div>
              </div>
              
              <button type='submit' className='bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:bg-[#985d19] hover:-translate-y-1 transition-all duration-200'> Apply Filters
              </button>
            </form>
          </div>
         {/* Social media */}
        <ul className="flex items-center justify-between">
        <li>
                <a href="https://www.facebook.com/" className='text-2xl hover:text-[#E58D27] ' target='_blank'><RiFacebookLine className='transition-all duration-200 hover:-translate-y-1'/></a>
              </li>
              <li>
                <a href="https://www.instagram.com/" className='text-2xl hover:text-[#E58D27] ' target='_blank'><RiInstagramLine className='transition-all duration-200 hover:-translate-y-1'/></a>
              </li>
              <li>
                <a href="https://www.twitter.com/"  className='text-2xl hover:text-[#E58D27] ' target='_blank'><RiTwitterLine className='transition-all duration-200 hover:-translate-y-1'/></a>
              </li>
              <li>
                <a href="https://www.youtube.com/" className='text-2xl  hover:text-[#E58D27]  ' target='_blank'><RiYoutubeLine className='transition-all duration-200 hover:-translate-y-1'/></a>
              </li>
        </ul>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowSideBar(!showSideBar)}
        className="lg:hidden fixed bottom-4 right-4 bg-[#E58D27] p-4 rounded-full text-xl"
      >
        {showSideBar ? <RiCloseLine /> : <RiFilter3Line />}
      </button>
    </>
  );
};

export default Sidebar;