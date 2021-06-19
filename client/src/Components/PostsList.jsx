import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts,deletePost } from '../redux/actions/posts.actions';
import PostItem from '../Components/PostItem';
import styled from 'styled-components';
import { ActionButton, Spinner, Header,MAlert } from '../styles/commomStyles';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';

const PostsList = () => {

    const data = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const [showErrorAlert, setShowErrorAlert] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    const deleteHandler = async (id) => {
        await axios.post(`/api/posts/delete/${id}`)
            .then(res => {
                dispatch(deletePost(id));
                setShowSuccessAlert(res.data.message);
                setTimeout(()=>setShowSuccessAlert(null),3000);
            })
            .catch(err => {
                setShowErrorAlert(err.message);
                setTimeout(()=>setShowErrorAlert(null),3000);
            })
    }


    if (data.loading) return <Spinner tip="Loading" size="large"></Spinner>

    if (data.error) return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong. Try to refresh the page."
        />
    );

    return (
        <>
            <Header>List of posts</Header>
            <Link to="/new"><ActionButton add cell>Add new</ActionButton></Link>
            {showErrorAlert && <MAlert type="error" width={30} message={showErrorAlert} showIcon />}
            {showSuccessAlert && <MAlert type="success" width={30} message={showSuccessAlert} showIcon />}
            <List>

                {
                    data.posts.map((post) => <PostItem item={post} key={post.id} deleteHandler={() => deleteHandler(post.id)} />)
                }
            </List>
        </>
    );
};

export default PostsList;


const List = styled.div`
    padding-top:100px;
    width:100%;
    display:flex;
    flex-flow:row wrap;
    align-items:center;
    justify-content:space-around;
`;
