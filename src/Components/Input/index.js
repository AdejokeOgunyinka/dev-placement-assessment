import React from 'react';
import {
    SearchIcon,
    SearchButton,
    InputBox,
    IconContainer,
    InputContainer,
} from './style'

const Input = ({type, placeholder}) => {
    if (type === 'search'){
        return(
            <InputContainer>
                <IconContainer>
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </IconContainer>
                <InputBox placeholder={placeholder}/>
            </InputContainer>
        );
    }
}

export default Input;
