

export { removePerson } from '../Reducers/peopleSlice'

import axios from '../../../utils/axios';
import { loadPerson } from '../Reducers/peopleSlice';




    
// export const asyncLoadpersons = async(id) => (dispatch, getState) => {
export const asyncLoadPerson = (id) => async (dispatch) => {

        try {
            
            const detail                 = await axios.get(`/person/${id}`);
            const externalId             = await axios.get(`/person/${id}/external_ids`);
            const combined_credits       = await axios.get(`/person/${id}/combined_credits`);
            const tv_credits             = await axios.get(`/person/${id}/tv_credits`);
            const movie_credits          = await axios.get(`/person/${id}/movie_credits`);


                    let theData = {   
                        detail           : detail.data,
                        externalId       : externalId.data,
                        combined_credits : combined_credits.data,
                        tv_credits       : tv_credits.data,
                        movie_credits    : movie_credits.data,
                    }
            
            // console.log(theData);
            dispatch(loadPerson(theData));  // person added to data 

 
        } catch (error) {
            console.log(error);
    }

}