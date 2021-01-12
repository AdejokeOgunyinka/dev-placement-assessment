import styled from 'styled-components';

export const BackgroundContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	background-color: #262a41;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
`;

export const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 49.5%;
	background: transparent;
	padding-top: 13.3%;
	height: 100%;
	padding-left: 8.7%;
	box-sizing: border-box;
`;

export const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 50.5%;
	background-color: #f7f7ff;
	border-radius: 2.5%;
	height: 96.35%;
	margin-right: 1%;
	box-sizing: border-box;
	padding-left: 6%;
	padding-top: 1.5%;
`;
