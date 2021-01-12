import styled from 'styled-components';

export const SmallBlackText = styled.p`
	color: black;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 200;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const ExtraSmallWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 200;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const SmallWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	padding: ${({ padding }) => padding};
	font-weight: 600;
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const MediumBlackText = styled.p`
	color: #262a41;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-style: italic;
	font-weight: 100;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const MediumWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 200;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const LargeBlackText = styled.p`
	color: #262a41;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 600;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const LargeWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 600;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const ExtraLargeBlackText = styled.p`
	color: #262a41;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 700;
	padding: ${({ padding }) => padding};
	text-align: left;
	opacity: ${({ opacity }) => opacity};
`;

export const ExtraLargeWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 700;
	padding: ${({ padding }) => padding};
	text-align: left;
	letter-spacing: -0.04px;
	opacity: ${({ opacity }) => opacity};
	${'' /* top: 251px;
	left: 301px;
	width: 159px;
	height: 52px;
	text-align: left;
	font: normal normal bold 37px/122px Poppins;
	letter-spacing: -0.04px;
	color: #FFFFFF;
	opacity: 1; */};
`;

export const SuperLargeWhiteText = styled.p`
	color: white;
	font-size: ${({ fontSize }) => fontSize};
	font-family: 'Poppins';
	font-weight: 200;
	padding: ${({ padding }) => padding};
	text-align: left;
	letter-spacing: -0.05px;
	opacity: ${({ opacity }) => opacity};
	${'' /* top: 243px;
	left: 168px;
	width: 122px;
	height: 68px;
	text-align: left;
	font: normal normal 200 49px/120px Poppins;
	letter-spacing: -0.05px;
	color: #FFFFFF;
	opacity: 1; */};
`;
