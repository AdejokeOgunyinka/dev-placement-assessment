import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const SearchIcon = styled(FaSearch)`
    align-self: center;
    color: ${({iconColor}) => iconColor};
    width: 100%;
    height: 100%;
    size: 100%;
    stroke-width: 0.5;
	opacity: ${(opacity) => opacity};
`;

export const SearchButton = styled.button`
	outline: none;
	border: none;
	width: 100%;
	height: 100%;
	background: transparent;
`;

export const InputBox = styled.input`
	background-color: transparent;
	width: 35%;
	height: 30%;
	box-sizing: border-box;
	align-self: center;
	border: none;
	outline: none;
	::placeholder {
		color: white;
		letter-spacing: -0.02px;
		font-family: 'Poppins';
		font-weight: 600;
		font-size: 15px;
		opacity: 0.7;
	}
`;

export const WhiteInputBox = styled.input`
	background-color: transparent;
	width: 30%;
	height: 25%;
	box-sizing: border-box;
	align-self: center;
	border: none;
	outline: none;
	::placeholder {
		color: black;
		letter-spacing: -0.02px;
		font-family: 'Poppins';
		font-weight: 600;
		font-size: 16px;
		opacity: 0.4;
	}
`

export const IconContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 35%;
	height: 35%;
	border: none;
	justify-content: center;
	align-items: center;
	flex-basis: 15%;
	box-sizing: border-box;
	margin-left: 3px;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	opacity: ${(opacity) => opacity};
	border-radius: ${({borderRadius}) => borderRadius};
	opacity: 1;
	width: 100%;
	height: 100%;
	background-color:  ${(backgroundColor) => backgroundColor};
	align-items: center;
	box-sizing: border-box;
`;
