import styled from 'styled-components';

export const LinkContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: transparent;
	outline: none;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	${({ active, user }) =>
		active === user &&
		`
    transform: scale(1.2,1.2)
    `};
`;

export const BlueContainer = styled.div`
	background-color: #30bbb5;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90px;
	height: 100px;
	border-radius: 23%;
	flex-basis: 90%;
	align-self: center;
`;

export const PinkContainer = styled.div`
	background-color: #f935a9;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90px;
	height: 100px;
	border-radius: 23%;
	flex-basis: 90%;
	align-self: center;
`;

export const PurpleContainer = styled.div`
	background-color: #7946c1;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90px;
	height: 100px;
	border-radius: 23%;
	flex-basis: 90%;
	align-self: center;
`;

export const TextContainer = styled.div`
	display: flex;
	width: 130px;
	background: transparent;
	flex-basis: 30%;
	align-self: center;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.i`
	color: white;
	font-size: 45px;
`;
