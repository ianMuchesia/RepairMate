import { AppDispatch } from "./index"
import { baseURL } from "../Api"
import { setIsAuthenticated, setUser } from "./authSlice"
import axios from "axios"




const checkAuthentication=()=>{
  
    return async(dispatch:AppDispatch)=>{
        try {
            const {data} = await axios.get(`${baseURL}user/showMe`, {withCredentials: true})
         
            console.log(data)
            if(data.success){
                dispatch(setIsAuthenticated(true))
                dispatch(setUser(data.user))    
            }
            

        } catch (error) {
           
            dispatch(setIsAuthenticated(false))
        }
    }
}


export default checkAuthentication