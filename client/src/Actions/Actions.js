import axios from 'axios';
import {
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST,
    POST_UNMOUNT,
    NO_POST_FOUND,
    POST_UPDATE
} from './Types';
export const fetchPostsFromServer=()=>dispatch=>{
    axios.get("/articles")
    .then(db=>{
        return dispatch({type:FETCH_POSTS, Posts:db.data, actionMessage:"Fetching Posts"});
    })
    .catch(err=>console.log(err));
};

export const fetchPostFromServer=id=>dispatch=>{
    const postId = axios.get("/article/"+id)
    postId.then(db =>{
        dispatch({type: FETCH_POST,Post: db.data, status:db.status,actionMessage:"Fetching Post"})
    })
    .catch(err =>{
        return dispatch({type: NO_POST_FOUND,status:err.response.status});
    });
};

export const deletePost=alias=>dispatch=>{
    axios.post("/delete/"+alias)
    .then(()=>{
        return dispatch({
            type:DELETE_POST,
            postId:alias,
            actionMessage: "Delete Post"
        });
    })
    .catch(err => console.log(err));
};


export const unmountPost=()=>dispatch=>{
    return dispatch({
        type:POST_UNMOUNT,
        Post:{},
        actionMessage: "Unmount Post"
    });
};


export const UpdatePost=id=>dispatch=>{
    axios.get("/article/"+id)
    .then(post=>{
        dispatch({
            type:POST_UPDATE,
            Post: post.data,
            actionMessage:"Article Update"
        });
    })
    .catch(err=>{
        console.log(err);
    });
};