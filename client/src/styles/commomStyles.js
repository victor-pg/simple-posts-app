import styled from 'styled-components';
import { Spin,Alert,Col,Input } from 'antd';
const {TextArea} = Input;

export const ActionButton = styled.button`
            color:white;
            border:none;
            text-align:center;
            padding:10px 30px;

            cursor: ${props => (props.pointer && 'pointer') || (props.cell && 'cell')};
            background-color: ${props => (props.add && '#159F5C')
        || (props.edit && '#F6BF05')
        || (props.delete && '#CE1126')
    };
`;

export const Spinner = styled(Spin)`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

export const MAlert = styled(Alert)`
    width:${props=>props.width}%;
    margin: 0 auto;
`;

export const Header = styled.h1`
text-align:center;
font-weight:300;
font-size:50px;
`;


export const MCol = styled(Col)`
    margin: 0 auto;
`;
export const MInput = styled(Input)`
    margin:10px;
`;
export const MTextarea = styled(TextArea)`
    margin:10px;
`;