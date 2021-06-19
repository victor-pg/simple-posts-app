import postsReducer from "./posts.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({posts:postsReducer})

export default rootReducer;