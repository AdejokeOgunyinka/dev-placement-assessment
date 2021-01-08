import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchIcon = styled(FaSearch)`
    align-self: center;
    color: white;
    width: 100%;
    height: 100%;
    size: 100%;
    stroke-width: 0.5;
`

export const SearchButton = styled.button`
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    background: transparent;
`

export const InputBox = styled.input`  
    background-color: #3C3F54;
    width: 20%;
    height: 20%;
    box-sizing: border-box;
    align-self: center;
    border: none;
    outline: none;
    ::placeholder{
        color: white;
        letter-spacing: -0.02px;
    }
`

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 30%;
    border: none;
    justify-content: center;
    align-items: center;
    flex-basis: 20%;
    box-sizing: border-box;
    margin-left: 20px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 28px;
    opacity: 1;
    width: 50%;
    height: 15%;
    background-color: #3C3F54;
    align-items: center;
`
