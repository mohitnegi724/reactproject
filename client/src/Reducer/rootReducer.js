import {
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST,
    POST_UNMOUNT,
    NO_POST_FOUND,
    POST_UPDATE
} from '../Actions/Types';
const DEFAULT_STATE={
    Posts: [],
    Post:{},
    postStatus:0,
    actionMessage:""
};
const rootReducer=(state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case FETCH_POSTS:
            return{
                ...state,
                Posts:action.Posts,
                actionMessage: action.actionMessage
            }
        case FETCH_POST:
            return {
                ...state,
                Post: action.Post,
                postStatus:action.status,
                actionMessage: action.actionMessage
            }
        case NO_POST_FOUND:
            return {
                ...state,
                postStatus:action.status,
                actionMessage: action.actionMessage
            }
        case DELETE_POST:
            return{
                ...state,
                actionMessage: action.actionMessage
            }
        case POST_UNMOUNT:
        return{
            ...state,
            Post:action.Post,
            actionMessage: action.actionMessage
        }
        case POST_UPDATE:
            return {
                ...state,
                Post: action.Post,
                actionMessage:action.actionMessage
            }
        default: return state;
    }   
    
};

export default rootReducer;