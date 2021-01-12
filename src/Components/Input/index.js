import React from 'react';
import { SearchIcon, SearchButton, InputBox, IconContainer, InputContainer, WhiteInputBox } from './style';

const Input = ({ type, placeholder, borderRadius,  backgroundColor, opacity, clickFunction }) => {
	if (type === 'search') {
		return (
			<InputContainer borderRadius={borderRadius} backgroundColor={backgroundColor}>
				<IconContainer>
					<SearchButton onClick={clickFunction}>
						<SearchIcon />
					</SearchButton>
				</IconContainer>
				<InputBox placeholder={placeholder}  />
			</InputContainer>
		);
	}
	else if (type === 'small-search') {
		return(
			<InputContainer borderRadius={borderRadius} backgroundColor={backgroundColor} opacity={opacity}>
				<IconContainer>
					<SearchButton onClick={clickFunction}>
						<SearchIcon />
					</SearchButton>
				</IconContainer>
				<WhiteInputBox placeholder={placeholder}/>
			</InputContainer>
		)
	}
};

export default Input;
