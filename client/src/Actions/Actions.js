import axios from 'axios';
import {FETCH_POSTS,FETCH_POST,DELETE_POST,POST_UNMOUNT} from './Types';
export const fetchDataFromServer=()=>dispatch=>{
    axios.get("/articles")
    .then(db=>{
        return dispatch({type:FETCH_POSTS, Posts:db.data});
    })
    .catch(err=>console.log(err));
};

export const fetchPostFromServer=id=>dispatch=>{
    axios.get("/article/"+id)
        .then(db => {
            return dispatch({
                type: FETCH_POST,
                Post: db.data
            });
        })
        .catch(err => console.log(err));
}

export const deletePost=alias=>dispatch=>{
    axios.post("/delete/"+alias)
    .then(alias=>{
        return dispatch({
            type:DELETE_POST,
            postId:alias
        })
    })
    .catch(err => console.log(err));
}


export const unmountPost=()=>dispatch=>{
    return dispatch({
        type:POST_UNMOUNT,
        Post:{}
    })
}