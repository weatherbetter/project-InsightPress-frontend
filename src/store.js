import { configureStore, createSlice } from "@reduxjs/toolkit";

let updatePost = createSlice({
    name: "updatePost",
    initialState: {},
    reducers: {
        setUpdatePost(state, action) {
            return { ...action.payload };
        },
    },
});

const article_category = createSlice({
    name: "article_category",
    initialState: {
        0: "정치",
        1: "경제",
    }
});

export let { setUpdatePost } = updatePost.actions;

export default configureStore({
    reducer: {
        updatePost: updatePost.reducer,
        article_category: article_category.reducer,
    },
});
