import axios from 'axios';

export const fetchPosts=()=>{
    return async(dispatch)=>{
        dispatch(showLoader());
        await axios.get('/api/posts')
            .then(res=>{
                dispatch(fetchPostsSuccess(res.data))
                dispatch(hideLoader())
            })
            .catch(err=>{
                dispatch(fetchDataFailed(err.message))
                dispatch(hideLoader());
            })
    }
}

export const fetchOnePost=(id)=>{
    return async(dispatch)=>{
        dispatch(showLoader());
        await axios.get(`/api/posts/${id}`)
            .then(res=>{
                dispatch(fetchOnePostSuccess(res.data[0]))
                dispatch(hideLoader())
            })
            .catch(err=>{
                dispatch(fetchOnePostFailed(err.message))
                dispatch(hideLoader());
            })
    }
}

export const deletePost=(id)=>{
    return{
        type:'DELETE_POST',
        payload:id
    }
}

const fetchPostsSuccess=(posts)=>{
    return{
        type:'FETCH_DATA_SUCCESS',
        payload:posts
    }
}

const fetchDataFailed=(error)=>{
    return{
        type:'FETCH_DATA_FAILED',
        payload:error
    }
}

const fetchOnePostSuccess=(post)=>{
    return{
        type:'FETCH_ONE_POST_SUCCESS',
        payload:post
    }
}
const fetchOnePostFailed=(error)=>{
    return{
        type:'FETCH_ONE_POST_FAILED',
        payload:error
    }
}


const showLoader=()=>{
    return{
        type:'SHOW_LOADER'
    }
}
const hideLoader=()=>{
    return{
        type:'HIDE_LOADER'
    }
}