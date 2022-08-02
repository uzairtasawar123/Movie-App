import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import {apiKey} from '../../Apis/ApiKey';
import baseUrl from '../../Apis/AxiosBaseUrl';


/////////////////////////////   Middleware Thunk for fetching Movies  /////////////////////
export const fetchData = createAsyncThunk('movies/fetchData' , async (name) => {
    try {
      //const name = "harry";
      const res = await baseUrl.get(`?apikey=${apiKey}&s=${name}&type=movie`);
      console.log("Response :" ,res)
        return res.data
    } catch (error) {
       console.log("We have an error"  ,error)
    }
  }) 

  /////////////////////////////   Middleware Thunk for fetching Series /////////////////////
  export const fetchSeries = createAsyncThunk('Series/fetchSeries' , async (name) => {
    try {
      //const name = "friends";
      const res = await baseUrl.get(`?apikey=${apiKey}&s=${name}&type=series`);
      console.log("Response :" ,res)
        return res.data
    } catch (error) {
       console.log("We have an error"  ,error)
    }
  }) 


  /////////////////////////////   Middleware Thunk for Showing Detail of Movie or Series /////////////////////
  export const fetchDetails = createAsyncThunk('Series/fetchDetails' , async (id) => {
    try {
      const res = await baseUrl.get(`?apikey=${apiKey}&i=${id}&Plot=full`);
      console.log("Response :" ,res)
        return res.data
    } catch (error) {
       console.log("We have an error"  ,error)
    }
  }) 
    

///////////////////////////
const initialState = {
    movie : {},
    series:{},
    details:{}
}
///////////////////////////


const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        
    },
           //////////////////    Extra Reducers   ///////////////////
    extraReducers:{
        [fetchData.pending]: ()=>{
            console.log("Pending")
        },
        [fetchData.fulfilled]: (state , action)=>{
            console.log('Fullfilled');
            return {...state , movie: action.payload}

        },
        [fetchData.rejected]:()=>{
            console.log('Rejected')
        },
        [fetchSeries.fulfilled]:(state , action)=>{
             console.log('Fullfilled Series');
             return {...state , series:action.payload}
        },
        [fetchDetails.fulfilled]:(state , action)=>{
             console.log('Details Fullfilled')
             return {...state , details:action.payload}
        }
            
        
    }

})

export default movieSlice.reducer;