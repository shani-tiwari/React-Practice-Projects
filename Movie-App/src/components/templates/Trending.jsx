import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from './TopNav';
import DropDown from './DropDown';
import axios from '../../utils/axios';
import VerticalCards from './VerticalCards';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';





function Trending() {

    const navigate                = useNavigate();
    const [page, setPage]         = useState(1);
    const [trending, setTrending] = useState([]);
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [HasMore, setHasMore]   = useState(true)
    
    
    document.title = `Movies App | Trending Page ${category.toUpperCase()} ` ;


    const GetTrendingData = async() =>{
        try {
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
        //   setTrending(data.results);
        //   setTrending( (prev)=> [...prev, ...data.results] );
            
            if(data.results.length > 0){

                setTrending((prev) => [
                    ...prev, 
                    ...data.results,
                    // ...data.results.filter((item) => !prev.some((prevItem) => prevItem.id !== item.id))
                    // causing -> not loading data
                    // code auto changes page count on scroll, and then function called with next page, so new data every time...
                ]);   
                setPage(page + 1);
            }
            else{
                setHasMore(false);
            }

            // console.log(trending);
        } catch (error) {
          console.log(error); 
        }
      }


      const RefreshHandler = () => {
        if(trending.length === 0) {GetTrendingData();}
        else {
            setPage(1);
            setTrending([]);
            GetTrendingData();
        }
      }

      useEffect(()=>{
        //  GetTrendingData();
           RefreshHandler();
      }, [category, duration])


  return trending.length > 0 ? 
        (
            <div className='w-screen p-[2%] select-none '>

                <div className='w-full flex justify-between '>

                    {/* <Link onClick={()=> navigate(-1)}></Link> */}
                    <h1 className='text-3xl text-zinc-300 font-semibold mt-2 border-b-2 '>
                        <i 
                         onClick={()=> navigate(-1)}
                         className=" text-zinc-300 text-3xl hover:text-[#6556CD] duration-300 ri-arrow-left-circle-line mr-4 shadow-white ">                    
                        </i>
                        Trending <sup className='text-xs text-zinc-500 '>({category})</sup>
                    </h1>

                    <div className='flex w-[70%] items-center m-0' >

                        <TopNav/>

                            {/*  array elems should be in lowercase, coz they will add in api to call and filter data */}
                        <DropDown title={category} options={["all", "movie", "tv"]} 
                         func={ (e)=> setCategory(e.target.value)}
                        />

                        <div className='w-[2%]'></div>

                        <DropDown title={duration} options={['day', 'week']} 
                         func={ (e)=> setDuration(e.target.value)}
                        />
                    </div>

                </div>


                <InfiniteScroll
                 hasMore={HasMore}
                 loader={ <Loading/>}
                 next={GetTrendingData}
                 dataLength={trending.length}
                >
                    {/* cards */}
                    <VerticalCards data={trending} title={category} />
                </InfiniteScroll>



            </div>

        ) : 
        ( <Loading/> )
}

export default Trending