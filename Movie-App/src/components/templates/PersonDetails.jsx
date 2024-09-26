  import React from 'react'
  import '../../index.css'
  import { useEffect, useState } from 'react'
  import Loading from './Loading';
  import HorizontalCards from './HorizontalCards'
  import { useDispatch, useSelector } from 'react-redux'
import { asyncLoadPerson, removePerson } from '../app/actions/personAction'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import DropDown from './DropDown'



  function PersonDetails() {

    const {pathname} = useLocation()
    // we extracting value here, not creating variable, sp predefined name should given like - pathname, and not pathName etc...
    const { id }     = useParams();
    const dispatch   = useDispatch();
    const navigate   = useNavigate();
    const { info }   = useSelector( state => state.person );
    const [Category, setCategory] = useState("movie")

    // console.log(info);
    // console.log(id);

    useEffect( () => {
        dispatch(asyncLoadPerson(id));
        return () => {
          dispatch(removePerson());  // previous data/movie will be removed and recently clicked movie details appear
        }
    }, [id]);


    return info ?  ( 
      // if div not present -> type annotation..........
            <div className='px-[7%] py-[3%] w-screen  flex flex-col bg-slate-950 select-none '>

                  <nav className='  w-full text-zinc-200 text-xl mb-4 '>

                      <Link
                        onClick={()=> navigate(-1)}
                        className= "text-3xl hover:text-[#6556CD] duration-300 ri-arrow-left-circle-line mr-4 ">                    
                      </Link>

                  </nav>


                  <div className='w-full flex '>


                        <div className='w-[20%]  ' >

                              <img 
                                alt="loading.." 
                                src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`} 
                                className='h-[50vh] w-[40vh] border-4 object-fill rounded-lg hover:shadow-[8px_17px_32px_2px_`rgba(0,0,0,.5)] z-10 hover:scale-105 duration-300  '
                              />

                              <hr className='mt-10 w-[88%] mb-3 ' />

                                {/* social mediaa links... */}
                              <div className='text-white flex gap-x-7 '>

                                      <a 
                                      target='_blank' 
                                      href={`https://www.facebook.com/${info.externalId.facebook_id}`}> 
                                      <i className="ri-facebook-box-fill text-2xl "></i> 
                                      </a>

                                      <a 
                                      target='_blank' 
                                      href={`https://www.instagram.com/${info.externalId.instagram_id}`}> 
                                      <i className="ri-instagram-fill text-2xl "></i> 
                                      </a>

                                      <a 
                                      target='_blank' 
                                      href={`https://twitter.com/${info.externalId.twitter_id}`}> 
                                      <i className="ri-twitter-x-fill text-2xl "></i> 
                                      </a>

                              </div>

                                {/* Personal Information... */}
                              <h1 className='text-2xl text-zinc-300 font-semibold tracking-widest mt-3 mb-1 '> Person's Details : </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-1 '> Known For : <br/> {info.detail.known_for_department} </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-3'> Gender : <br/> {info.detail.gender === 'male' ? "male" : "female"} </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-3'> Birthday : <br/> {info.detail.birthday} </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-3'> Deathday : <br/> {info.detail.deathday ? info.detail.deathday : "Fucking Alive"} </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-3'> Place of Birth : <br/> {info.detail.place_of_birth} </h1>
                              <h1 className='text-lg text-zinc-400 font-semibold mb-3'> Also Known as : <br/> {info.detail.also_known_as.join(", ")} </h1>

                        </div>



                        {/* right details and information */}
                        <div className='w-[80%] ml-[5%] -mt-[2%]'>

                              <h1 className='text-6xl text-zinc-300 font-semibold tracking-widest mt-3 mb-1 '> { info.detail.name } </h1>
                              <h1 className='text-xl text-zinc-300 font-semibold mb-1 '> Biography :  <br/> 
                                  <p className='text-zinc-400 text-lg '> {info.detail.biography} </p> 
                              </h1>
                              <h1 className='text-xl text-zinc-300 font-semibold mb-1 mt-3 '> Works : <br/>  </h1>
                              <HorizontalCards data={info.combined_credits.cast} />


                              <div className='w-full flex justify-between '>
                                  <h1 className='text-2xl text-zinc-300 font-semibold mb-1 mt-3 '> Acting  :  </h1>
                                  <DropDown title="Category" options={["movie", "tv"]} func={(e) => setCategory(e.target.value)} />
                              </div>



                              <div className='list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-md shadow-blue-200 mt-5 p-5 '>
                              {
                                  info[Category + "_credits"].cast.map((cast, idx)=>(
                                    <li key={idx} className='hover:text-white duration-300 cursor-pointer  '>  
                                                {/* / --> imp****/}
                                        <Link to={`/${Category}/details/${cast.id}`} className=''> 
                                          <span> { cast.name || cast.title || cast.original_name || cast.original_title } </span>
                                          <span className='block'> Character Name :  { cast.character } </span>
                                        </Link>
                                    </li>                            
                                ))
                              }
                          
                              </div>



                              
                        </div>

                  </div>







            </div>

      ) : <Loading/>
  }

  export default PersonDetails