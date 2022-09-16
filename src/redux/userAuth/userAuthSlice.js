import { createSlice } from "@reduxjs/toolkit";

const getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return null;
    } else {
        return user;
    }
}

export const userAuthSlice = createSlice({
    name: "user",
    initialState: {
        user: getUser()
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { setUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;

export const selectUser = state => state.userAuth.user;