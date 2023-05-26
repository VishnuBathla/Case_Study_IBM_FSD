import { createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'
export const fetchCurrentUser = createAsyncThunk('user/current',async ()=>{
    const response = await axios.get('http://localhost:9090/api/current')
    
    const res= await axios.post('http://localhost:9090/api/instructors',response.data["user_id"],{ headers: { 'Content-Type': 'text/plain' } })
   return res.data
})
const InstructorSlice =createSlice({
    name:'current_user',
    initialState:{
        name:'',
		expertise:'',
		email:'',
		description:'',
		imageUrl:'',
		phone:'',
		courses:[],
		login_id:''
        
    },
    

    reducers:{
    },
    extraReducers :{
        [fetchCurrentUser.fulfilled] : (state,action) =>{
            state.initialState={...state.initialState,...action.payload}
            // console.log(action)

        },
        [fetchCurrentUser.rejected] : () =>{
            console.log('err')
            
        },
    }
    

})
export const CredentialActions = InstructorSlice.actions
export default InstructorSlice.reducer