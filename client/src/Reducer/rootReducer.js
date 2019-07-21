import {FETCH_POSTS,FETCH_POST} from '../Actions/Types';
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
            };
        default: return state;
    }   
    
};

export default rootReducer;