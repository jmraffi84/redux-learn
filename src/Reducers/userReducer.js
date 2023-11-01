import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "userInfo",
    initialState: {
        data: { name: "", password: "" },
    },
    reducers: {
        loginUser: (state, action) => {
            state.data = action.payload
        },
        logoutUser: (state, action) => {
            state.data = { name: "", password: "" }
        }
    }

})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer