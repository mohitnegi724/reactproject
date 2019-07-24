import axios from 'axios';
import {FETCH_POSTS,FETCH_POST,DELETE_POST,POST_UNMOUNT,NO_POST_FOUND} from './Types';
export const fetchPostsFromServer=()=>dispatch=>{
    axios.get("/articles")
    .then(db=>{
        return dispatch({type:FETCH_POSTS, Posts:db.data});
    })
    .catch(err=>console.log(err));
};

export const fetchPostFromServer=id=>dispatch=>{
    const postId = axios.get("/article/"+id)
    postId.then(db =>dispatch({type: FETCH_POST,Post: db.data, status:db.status}))
    .catch(err =>{
        return dispatch({type: NO_POST_FOUND, Post:{status:err.response.status}})
    })
}

export const deletePost=alias=>dispatch=>{
    axios.post("/delete/"+alias)
    .then(()=>{
        return dispatch({
            type:DELETE_POST,
            postId:alias
        });
    })
    .catch(err => console.log(err));
};


export const unmountPost=()=>dispatch=>{
    return dispatch({
        type:POST_UNMOUNT,
        Post:{}
    });
};