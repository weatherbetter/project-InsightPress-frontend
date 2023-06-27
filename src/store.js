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
        0: "Politics",
        1: "Economy",
    },
});

const article_highlight = createSlice({
    name: "article_highlight",
    initialState: "",
    reducers: {
        setArticle_highlight(state, action) {
            return action.payload;
        },
    },
});

const article = createSlice({
    name: "article",
    initialState: "",
    reducers: {
        setArticle(state, action) {
            return action.payload;
        },
    },
});

// 로그인 여부
// const [isLogin, setIsLogin] = useState(false);
const isLogin = createSlice({
    name: "isLogin",
    initialState: false,
    reducers: {
        setIsLogin(state, action) {
            return action.payload;
        },
    },
});

export let { setUpdatePost } = updatePost.actions;
export let { setArticle_highlight } = article_highlight.actions;
export let { setIsLogin } = isLogin.actions;

export default configureStore({
    reducer: {
        updatePost: updatePost.reducer,
        article_category: article_category.reducer,
        article_highlight: article_highlight.reducer,
        isLogin:isLogin.reducer
    },
});
