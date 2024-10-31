import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    otpId: null,
}

const userReducer = createSlice({
    name: 'otpid',
    initialState,
    reducers: {
        addOtpId: (state, {payload}) =>{
            state.otpId = payload
        },
    }
})

export const {addOtpId} = userReducer.actions
export default userReducer.reducer