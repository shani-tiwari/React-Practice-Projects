import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../../../public/noImage.webp'

function HorizontalCards( {data} ) {
    
  return (

        <div className='w-[100%]  flex overflow-x-auto overflow-y-hidden scrollbar-hide p-2 '> 
            {   
                data.length > 0 ? 
                    data.map( (card, idx) => (

                            <Link to={`/${card.media_type}/details/${card.id}`} key={idx} className='min-w-[17%] h-[45vh] mr-3 bg-zinc-900 mb-5 overflow-hidden p-2 rounded'>

                                <img 
                                  src={
                                        card.poster_path ?`https://image.tmdb.org/t/p/original/${card.poster_path }` : noImage
                                  } 
                                 alt="loading..."
                                 className='w-full h-[55%] object-top object-fill rounded hover:scale-105 duration-300 ' />

                                <div className='text-white p-2 h-[45%] select-none overflow-y-auto'>
                                    <h1 className=" text-xl font-semibold leading-5 mb-1">
                                        { card.name || card.title || card.original_title ||  card.original_name}
                                    </h1>

                                    <p className='text-zinc-400 leading-4  '>
                                        { card.overview.slice(0, 50) } ...<span className="text-zinc-400 " to={""}>more</span>
                                    </p>
                                </div>

                            </Link>

                    )) : <h1 className='text-3xl text-zinc-400 mx-auto  font-black text-center mt-5 content-center '> Nothing to Show.....</h1>
            }
        </div>
  )
}

export default HorizontalCards