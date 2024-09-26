
import React from 'react';
import { Link } from 'react-router-dom';

function VerticalCards({data, title}) {

    // console.log(title);

  return (
    <div className='flex flex-wrap gap-6 mt-16 '>
        {
            data.map( (card, idx) =>

                <Link to={`/${card.media_type || title }/details/${card.id}`}  key={idx} className='relative flex flex-col justify-end  w-[32vh] rounded p-2 duration-300 hover:shadow-[8px_17px_32px_2px_rgba(0,0,0,.5)] hover:scale-105 mb-4 bg-slate-900 text-center border-b-2 border-t-2 ' >

                    <img 
                     src={`https://image.tmdb.org/t/p/original/${ card.poster_path || card.backdrop_path || card.profile_path }`} 
                     alt="loading.." 
                     className='h-[32vh] object-fill rounded hover:shadow-[8px_17px_32px_2px_rgba(0,0,0,.5)] z-10 hover:scale-105 duration-300 mb-1 '
                    />

                     <div className='my-auto'>
                        <span className='text-xl text-zinc-200 font-semibold z-20 '>
                            {
                                card.name || card.title || card.original_title ||  card.original_name
                            }
                        </span>
                     </div>

                     {
                        card.vote_average ? 
                            <div className='absolute right-[-3%] bottom-[25%] z-40 text-white text-md overflow-hidden w-[5vh] h-[5vh] flex justify-center items-center bg-yellow-700 rounded-full font-semibold '>
                                { (card.vote_average* 10).toFixed() } <sup>%</sup>
                            </div>
                            :
                        null
                     }


                </Link>
            )
        }
    </div>
  )
}

export default VerticalCards