import {
	BackgroundContainer,
	LeftContainer,
	RightContainer,
} from './style';

const Container = ({ type, children }) => {
	if (type === 'background') {
		return <BackgroundContainer>{children}</BackgroundContainer>;
	} else if (type === 'left-container') {
		return <LeftContainer>{children}</LeftContainer>;
	} else if (type === 'right-container') {
		return <RightContainer>{children}</RightContainer>;
	}
};

export default Container;
