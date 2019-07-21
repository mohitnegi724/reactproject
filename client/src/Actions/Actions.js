import axios from 'axios';
import {FETCH_POSTS,FETCH_POST} from './Types';
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