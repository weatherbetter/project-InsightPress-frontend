import { configureStore, createSlice } from "@reduxjs/toolkit";

let updatePost = createSlice({
    name: "updatePost",
    initialState: {},
    reducers: {
        setUpdatePost(state, action) {
            // 기존 state
            return { ...action.payload };
        },
    },
});

export let { setUpdatePost } = updatePost.actions;

export default configureStore({
    reducer: {
        updatePost: updatePost.reducer,
    },
});
