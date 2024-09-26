
import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Reducers/movieSlice'
import tvReducer from './Reducers/tvSlice'
import personReducer from './Reducers/peopleSlice'

export const store = configureStore({

  reducer: {

      tv: tvReducer,

      movie: movieReducer,

      person: personReducer,
      
  },
})