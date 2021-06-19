import React, { useState } from 'react';
import { Row, Col, Input, Button } from 'antd';
import styled from 'styled-components';
import { Header,MAlert,MCol,MInput,MTextarea } from '../styles/commomStyles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const { TextArea } = Input;

const AddNewPage = () => {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState(null);
    const [showSuccessAlert, setShowSuccessAlert] = useState(null);
    const [redirect, setRedirect] = useState(null);

    const submitHandler = async () => {
        if (!title || !body) {
            setShowErrorAlert("Complete all input fields");
            setTimeout(() => setShowErrorAlert(null), 3000);
        }
        await axios.post('/api/posts', { title, body })
            .then(res => {
                setShowSuccessAlert(res.data.message + ' (redirect in 3 seconds)');
                setTimeout(() => setRedirect("/"), 3000);
            })
            .catch(err => {
                setShowErrorAlert(err.message);
                setTimeout(() => setShowErrorAlert(null), 3000);
            })
    }

    return (
        <>
            {redirect && <Redirect to={redirect} />}
            <Row>
                <MCol span={8}>
                    {showErrorAlert && <MAlert type="error" message={showErrorAlert} showIcon />}
                    {showSuccessAlert && <MAlert type="success" message={showSuccessAlert} showIcon />}
                    <Header>Add new post</Header>
                    <MInput placeholder="Title..." onChange={e => setTitle(e.target.value)} />
                    <MTextarea rows={5} placeholder="Body..." onChange={e => setBody(e.target.value)} />
                    <Button type="primary" onClick={submitHandler}>Submit</Button>
                </MCol>
            </Row>
        </>
    );
};

export default AddNewPage;