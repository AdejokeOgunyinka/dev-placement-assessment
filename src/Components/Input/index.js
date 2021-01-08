import React from 'react';
import {
    SearchIcon,
    SearchButton,
    InputBox,
    IconContainer,
    InputContainer,
} from './style'

const Input = ({type, placeholder, clickFunction}) => {
    if (type === 'search'){
        return(
            <InputContainer>
                <IconContainer>
                    <SearchButton onClick={clickFunction}>
                        <SearchIcon />
                    </SearchButton>
                </IconContainer>
                <InputBox placeholder={placeholder}/>
            </InputContainer>
        );
    }
}

export default Input;
