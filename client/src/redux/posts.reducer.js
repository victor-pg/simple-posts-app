const initialState = {
    posts: [],
    onePost: [],
    loading: false,
    error: null
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return { ...state, posts: action.payload }
        case 'FETCH_DATA_FAILED':
            return { ...state, error: action.payload }
        case 'FETCH_ONE_POST_SUCCESS':
            return { ...state, onePost: action.payload }
        case 'FETCH_ONE_POST_FAILED':
            return { ...state, error: action.payload }
        case 'DELETE_POST':
            return { ...state, posts: state.posts.filter(item => action.payload !== item.id) }
        case 'SHOW_LOADER':
            return { ...state, loading: true }
        case 'HIDE_LOADER':
            return { ...state, loading: false }
        default:
            return state
    }
}

export default postsReducer;