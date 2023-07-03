import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null
}

const useSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('access_token', action.payload.user.userToken)
        },
        logoutSuccess: (state, action) => {
            localStorage.removeItem('access_token')
        }
    }
})

export const {
    loginSuccess,
    logoutSuccess
} = useSlice.actions;

export default useSlice.reducer