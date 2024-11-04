import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    otpId: null,
    users: null,
}

const userReducer = createSlice({
    name: 'otpid',
    initialState,
    reducers: {
        addOtpId: (state, {payload}) =>{
            state.otpId = payload
        },
        UserLogin: (state, {payload}) =>{
            state.users = payload
        }
    }
})

export const {addOtpId, UserLogin} = userReducer.actions
export default userReducer.reducer