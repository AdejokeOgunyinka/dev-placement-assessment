import React from 'react';
import { SearchIcon, SearchButton, InputBox, IconContainer, InputContainer, WhiteInputBox } from './style';

const Input = ({ type, placeholder, borderRadius, iconColor, backgroundColor, opacity, clickFunction, changeFunction }) => {
	if (type === 'search') {
		return (
			<InputContainer borderRadius={borderRadius} backgroundColor={backgroundColor}>
				<IconContainer>
					<SearchButton onClick={clickFunction}>
						<SearchIcon color={iconColor}/>
					</SearchButton>
				</IconContainer>
				<InputBox placeholder={placeholder}  onChange={changeFunction}/>
			</InputContainer>
		);
	}
	else if (type === 'small-search') {
		return(
			<InputContainer borderRadius={borderRadius} backgroundColor={backgroundColor}>
				<IconContainer>
					<SearchButton onClick={clickFunction}>
						<SearchIcon color={iconColor} opacity={opacity}/>
					</SearchButton>
				</IconContainer>
				<WhiteInputBox placeholder={placeholder}/>
			</InputContainer>
		)
	}
};

export default Input;
