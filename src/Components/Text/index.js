import React from 'react';
import {
	ExtraSmallWhiteText,
	SmallBlackText,
	SmallWhiteText,
	MediumBlackText,
	MediumWhiteText,
	LargeBlackText,
	LargeWhiteText,
	ExtraLargeBlackText,
	ExtraLargeWhiteText,
	SuperLargeWhiteText
} from './style';

const Text = ({ color, size, fontSize, padding, opacity, children }) => {
	if (color === 'white' && size === 'extra-small') {
		return (
			<ExtraSmallWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</ExtraSmallWhiteText>
		);
	} else if (color === 'black' && size === 'small') {
		return (
			<SmallBlackText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</SmallBlackText>
		);
	} else if (color === 'white' && size === 'small') {
		return (
			<SmallWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</SmallWhiteText>
		);
	} else if (color === 'black' && size === 'medium') {
		return (
			<MediumBlackText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</MediumBlackText>
		);
	} else if (color === 'white' && size === 'medium') {
		return (
			<MediumWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</MediumWhiteText>
		);
	} else if (color === 'black' && size === 'large') {
		return (
			<LargeBlackText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</LargeBlackText>
		);
	} else if (color === 'white' && size === 'large') {
		return (
			<LargeWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</LargeWhiteText>
		);
	} else if (color === 'black' && size === 'extra-large') {
		return (
			<ExtraLargeBlackText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</ExtraLargeBlackText>
		);
	} else if (color === 'white' && size === 'extra-large') {
		return (
			<ExtraLargeWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</ExtraLargeWhiteText>
		);
	} else if (color === 'white' && size === 'super-large') {
		return (
			<SuperLargeWhiteText padding={padding} fontSize={fontSize} opacity={opacity}>
				{children}
			</SuperLargeWhiteText>
		);
	}
};

export default Text;
