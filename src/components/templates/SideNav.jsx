// import axios from '../../utils/axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SideNav() {

  // const GetSearch = async() =>{
  //   try {
  //     const d = await axios.get(`/search/multi?query=${query}`);
  //     console.log(d);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   GetSearch();
  // })


  return (
        <div className=' w-[18%] h-full  border-r-2 border-zinc-400 p-5 select-none'>

            <h1 className=' text-emerald-700 text-2xl font-semibold '> 
                <i className="ri-tv-2-line mr-2 " ></i>
                Movie App 
            </h1>

            {/* <hr className='border-none h-[1px] bg-zinc-400 ' /> */}

            <nav className='flex flex-col text-zinc-400 text-lg  gap-3'>

               <h1 className='text-white font-semibold mt-8 text-xl '> New Feeds </h1>

               <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '> 
                 <i className="ri-fire-line mr-2"></i> Trending
               </Link>

               <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '> 
                 <i className="ri-bard-line mr-2"></i> Popular 
               </Link>

               <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '> 
                 <i className="ri-slideshow-3-line mr-2"></i> Movies 
               </Link>

               <Link to="/tv" className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '>
                 <i className="ri-tv-fill mr-2"></i> Tv Shows 
               </Link>

               <Link to='/people' className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '>
                 <i className="ri-team-fill mr-2"></i> People 
               </Link>

            </nav>

            <hr className='border-none h-[1px] bg-zinc-400 mt-8' />

            <nav className='flex flex-col text-zinc-400 text-lg gap-3'>

               <h1 className='text-white mt-10 font-semibold text-xl '> Website Information </h1>

               <Link className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '> 
                 <i className="ri-information-line mr-4 "></i>About
               </Link>

               <Link className='hover:bg-[#6556CD] hover:text-white hover:tracking-wider duration-300 p-3 rounded-xl '> 
                 <i className="ri-phone-fill mr-2 "></i> Contact Us 
               </Link>

            </nav>

        </div>
  )
}

export default SideNav