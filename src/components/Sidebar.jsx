import React from 'react'
import { RiMoneyDollarCircleLine,RiFacebookLine, RiInstagramLine,RiYoutubeLine,RiTwitterLine} from "react-icons/ri";
const Sidebar = () => {
  return (
    <div className='h-full overflow-y-scroll text-gray-400 w-80 '>
        {/*Search */}
        <div className='bg-[#362c29]/50 rounded-2xl p-4 mb-4'>
            <h4 className='text3 -lg text-white mb-4git'>Categories</h4>
            <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Adventure' className='chec' />
                <label htmlFor='Adventure'>Adventure</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='MOO' className='chec' />
                <label htmlFor='MOO'>MOO</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Casual-Game' className='chec' />
                <label htmlFor='Casual-Game'>Casual Game</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Strategy' className='chec' />
                <label htmlFor='Strategy'>Strategy</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Simulator' className='chec' />
                <label htmlFor='Simulator'>Simulator</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Sport-Games' className='chec' />
                <label htmlFor='Sport-Games'>Sport Games</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='action-game' className='chec' />
                <label htmlFor='action-game'>Action Game</label>
            </div>
          </div>
          <h4 className='my-4 text-lg text-white'>Platform</h4>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='PC' className='chec' />
                <label htmlFor='PC'>PC</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='PlayStation 5' className='chec' />
                <label htmlFor='PlayStation 5'>PlayStation 5</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Play Station 4' className='chec' />
                <label htmlFor='Play Station 4'>Play Station 4</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Xbox Series' className='chec' />
                <label htmlFor='Xbox Series'>Xbox Series</label>
            </div>
            <div className='flex items-center gap-2'>
                <input type="checkbox" id='Nintendo Switch' className='chec' />
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
        {/*Social media */}
        <div>
          <ul className='flex items-center justify-between'>
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
    </div>
  )
}

export default Sidebar