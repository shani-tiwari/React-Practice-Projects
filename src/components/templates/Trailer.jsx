import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NotFound from './NotFound';

function Trailer() {

    const navigate = useNavigate();
    const { pathname } = useLocation();
    const category =pathname.includes("movie") ? "movie" : "tv";
    const ytVideo = useSelector(state => state[category].info.videos);


  return  (
    <div className='absolute top-0 left-0 z-40 bg-[rgba(0,0,0,0.8)] w-screen h-screen flex items-center justify-center text-white '>

        <Link
            onClick={()=> navigate(-1)}
            className=" absolute text-5xl right-[5%] top-[5%] hover:text-[hsl(240,100%,99%)] duration-300 ri-close-fill mr-4 shadow-white ">              
        </Link>


        {
            ytVideo ? 
                <ReactPlayer 
                    controls
                    url={`https://www.youtube.com/watch?v=${ytVideo.key}`} 
                    height={600}
                    width={1200}
                />
                : <NotFound/>
        }

    </div>
  ) 
}

export default Trailer