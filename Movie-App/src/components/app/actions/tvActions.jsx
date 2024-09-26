

export { removetv } from '../Reducers/tvSlice'

import axios from '../../../utils/axios';
import { loadtv } from '../Reducers/tvSlice';


    
// export const asyncLoadtvs = async(id) => (dispatch, getState) => {
export const asyncLoadtv = (id) => async (dispatch, getState) => {

        try {
            
            const detail          = await axios.get(`/tv/${id}`);
            const videos          = await axios.get(`/tv/${id}/videos`);
            const similar         = await axios.get(`/tv/${id}/similar`);
            const externalId      = await axios.get(`/tv/${id}/external_ids`);
            const translations      = await axios.get(`/tv/${id}/translations`);
            const recommendations = await axios.get(`/tv/${id}/recommendations`);
            const watchProviders  = await axios.get(`/tv/${id}/watch/providers`);


               let theData = {   
                //    detail         : detail.data.results,   == but they not contain result, so umappropriate result,   
                //    similar        : similar.data.results,   -- API understanding is important............
                //    externalId     : externalId.data.results,
                   detail         : detail.data,
                   similar        : similar.data,
                   externalId     : externalId.data,
                   recommendations: recommendations.data.results,
                   watchProviders : watchProviders.data.results.IN,   
                   videos         : videos.data.results.find( (tv) => tv.type === "Trailer" ),
                   translations   : translations.data.translations.map( (tran) => tran.english_name ),
                }
            
            // console.log(theData);
            dispatch(loadtv(theData));  // tv added to data 

 
        } catch (error) {
            console.log(error);
    }

}