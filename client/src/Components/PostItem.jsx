import React from 'react';
import styled from 'styled-components';
import { ActionButton } from '../styles/commomStyles';
import {Link} from 'react-router-dom';

const PostItem = ({ item,deleteHandler }) => {
    return (
        <Item>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemBody>{item.body}</ItemBody>
            <ButtonGroup>
                <Link to={`/edit/${item.id}`}><ActionButton edit pointer>Edit</ActionButton></Link>
                <ActionButton delete pointer onClick={deleteHandler}>Delete</ActionButton>
            </ButtonGroup>
        </Item>
    );
};

export default PostItem;

const Item = styled.div`
    padding:20px;
    width:20vw;
    height:20vw;
    border:1px solid tomato;
    border-radius:4px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`;

const ItemTitle = styled.div`
    width:100%;
    font-size:20px;
    font-weight:600;
    text-align:center;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis;
`;
const ItemBody = styled.div`
    width:100%;
    text-align:center;
    white-space: normal; 
    overflow: hidden; 
    text-overflow: ellipsis;
`;
const ButtonGroup = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
