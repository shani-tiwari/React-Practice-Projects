

export { removeMovie } from '../Reducers/movieSlice'

import axios from '../../../utils/axios';
import { loadMovie } from '../Reducers/movieSlice';


    
// export const asyncLoadMovies = async(id) => (dispatch, getState) => {
export const asyncLoadMovies = (id) => async (dispatch, getState) => {

        try {
            
            const detail          = await axios.get(`/movie/${id}`);
            const videos          = await axios.get(`/movie/${id}/videos`);
            const similar         = await axios.get(`/movie/${id}/similar`);
            const externalId      = await axios.get(`/movie/${id}/external_ids`);
            const translations      = await axios.get(`/movie/${id}/translations`);
            const recommendations = await axios.get(`/movie/${id}/recommendations`);
            const watchProviders  = await axios.get(`/movie/${id}/watch/providers`);


               let theData = {   
                //    detail         : detail.data.results,   == but they not contain result, so umappropriate result,   
                //    similar        : similar.data.results,   -- API understanding is important............
                //    externalId     : externalId.data.results,
                   detail         : detail.data,
                   similar        : similar.data,
                   externalId     : externalId.data,
                   recommendations: recommendations.data.results,
                   watchProviders : watchProviders.data.results.IN,   
                   videos         : videos.data.results.find( (movie) => movie.type === "Trailer" ),
                   translations   : translations.data.translations.map( (tran) => tran.english_name ),
                }
            
            // console.log(theData);
            dispatch(loadMovie(theData));  // movie added to data 

 
        } catch (error) {
            console.log(error);
    }

}