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
            console.log("FETCH_POST ", action)
            return {
                ...state,
                Post: action.Post,
                postStatus:action.status,
                actionMessage: action.actionMessage
            }
        case NO_POST_FOUND:
            console.log("FETCH_POST 404Error ", action)
            return {
                ...state,
                postStatus:action.status,
                actionMessage: action.actionMessage
            }
        case DELETE_POST:
            console.log("Delete post ", action)
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
            console.log("Post Update ", action)
            return {
                ...state,
                Post: action.Post,
                actionMessage:action.actionMessage
            }
        default: return state;
    }   
    
};

export default rootReducer;