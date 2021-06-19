import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { fetchOnePost } from '../redux/actions/posts.actions';
import { Result, Row } from 'antd';
import { Spinner, MCol, MInput, MTextarea, Header, ActionButton, MAlert } from '../styles/commomStyles';
import axios from 'axios';
import styled from 'styled-components';

const EditPost = () => {

    const { id } = useParams();
    const data = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [showErrorAlert, setShowErrorAlert] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(null);
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        dispatch(fetchOnePost(id));
        setTitle(data.onePost.title);
        setBody(data.onePost.body);
    }, [dispatch, id, data.onePost.title, data.onePost.body])

    const handleEdit = async () => {
        await axios.post(`/api/posts/update/${id}`, { title, body })
            .then(res => {
                setShowSuccessAlert(res.data.message + ' (redirect in 3 seconds)');
                setTimeout(() => setRedirect("/"), 3000);
            })
            .catch(err => {
                setShowErrorAlert(err.message);
                setTimeout(() => setShowErrorAlert(null), 3000);
            })
    }

    if (data.error) return (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, something went wrong. Try to refresh the page."
        />
    );

    if (data.onePost) {
        return (
            <>
                {redirect && <Redirect to={redirect} />}
                <Header>Edit post with id : {data.onePost.id}</Header>
                {showErrorAlert && <MAlert type="error" width={30} message={showErrorAlert} showIcon />}
                {showSuccessAlert && <MAlert type="success" width={30} message={showSuccessAlert} showIcon />}
                <Row>

                    <MCol span={8}>
                        <MInput value={title} onChange={e => setTitle(e.target.value)} />
                        <MTextarea rows={5} value={body} onChange={e => setBody(e.target.value)} />
                        <ActionButton add pointer onClick={handleEdit}>Save</ActionButton>
                    </MCol>
                </Row>
                <Row>
                    <MCol>
                        <PostTitle>{title}</PostTitle>
                        <PostSubtitle>{body}</PostSubtitle>
                    </MCol>
                </Row>
            </>
        );
    } else {
        return <Spinner tip="Loading" size="large"></Spinner>
    }
};

export default EditPost;

const PostTitle = styled.h3`
    font-size:30px;
    text-align-center;
`;
const PostSubtitle = styled.p`
    
`;