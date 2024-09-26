import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/templates/Trending'
import Popular from './components/templates/Popular'
import Movies from './components/templates/Movies'
import TvShows from './components/templates/TvShows'
import People from './components/templates/People'
import MovieDetails from './components/templates/movieDetails'
import TvDetails from './components/templates/TvDetails'
import PersonDetails from './components/templates/PersonDetails'
import Trailer from './components/templates/Trailer'
import NotFound from './components/templates/NotFound'

function App() {

  return (
    <>
        <div className=' bg-slate-950 w-screen  flex ' >

          <Routes>

              <Route path='/' element={<Home/>} />
              <Route path='/popular' element={<Popular/>} />
              <Route path='/trending' element={<Trending/>}/>


      {/* not working in this wayyy, we can use Outlet or make them seprate */}

              {/* <Route path='/movie' element={<Movies/>} >
                  {/* <Route path='details/:id' element={ <MovieDetails/> } />
              </Route>

              <Route path='/people' element={<People/>} > 
                  <Route path='details/:id' element={ <PersonDetails/> } />
              </Route>

              <Route path='/tv' element={<TvShows/>} >
                 <Route path='details/:id' element={ <TvDetails/> } />
               </Route> */} 


              <Route path='/movie' element={<Movies/>} />
                  {/* <Route path='/details/:id' element={ <MovieDetails/> } />   -->> this is a absoulute path  */}
              <Route path='/movie/details/:id' element={ <MovieDetails/> } >
                  <Route path="/movie/details/:id/trailer" element={ <Trailer/> } />
              </Route>


              <Route path='/people' element={<People/>} /> 

              <Route path='/people/details/:id' element={ <PersonDetails/> } /> 

              <Route path='/tv' element={<TvShows/>} />
              <Route path='/tv/details/:id' element={ <TvDetails/> } >
                <Route path='/tv/details/:id/trailer' element={<Trailer/>} />
              </Route>

              <Route path='*' element={<NotFound/>} />  
                {/* wild card route with asterick, always in last.... */}


          </Routes>
          
        </div>
    </>
  )
}

export default App
