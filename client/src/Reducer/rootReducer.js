import {FETCH_POSTS,FETCH_POST,DELETE_POST, POST_UNMOUNT} from '../Actions/Types';
const DEFAULT_STATE={
    Posts: [],
    Post:{}
};
const rootReducer=(state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                Posts:action.Posts
            };
        case FETCH_POST:
            return {
                ...state,
                Post: action.Post
            }
        case DELETE_POST:
            console.log("Delete post ", action)
            return{
                ...state
            }
        case POST_UNMOUNT:
        return{
            ...state,
            Post:action.Post
        }
        default: return state;
    }   
    
};

export default rootReducer;