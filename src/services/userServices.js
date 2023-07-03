import axios from "axios";
import { loginSuccess } from "../redux/slices/userSlice";

const baseUrl = "https://project20230606170014.azurewebsites.net/api/authentication/login";


export const login = async ({email, password}, dispatch) =>  {
    const res = await axios.post(baseUrl, {email, password});
    dispatch(loginSuccess({user: res.data}))
}