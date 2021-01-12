import {
	LinkContainer,
	BlueContainer,
	PinkContainer,
	PurpleContainer,
	TextContainer,
	Icon
} from './style';
import Text from '../Text/index';


const LinkBox = ({ user, icon, textColor, textSize, textFontSize, textOpacity, children, active, setActive }) => {
	const getUrl = window.location.href.split("/");
	const page = getUrl[getUrl.length - 1] ===""? "all":getUrl[getUrl.length - 1];
	 
	if (user === 'male') {
		return (
			<LinkContainer active={page} user={user} onClick={() => setActive('male')}>
				<BlueContainer>

					<Icon className={icon} />
				</BlueContainer>
				<TextContainer>
					<Text size={textSize} fontSize={textFontSize} opacity={textOpacity} color={textColor}>
						{children}
					</Text>
				</TextContainer>
			</LinkContainer>
		);
	} else if (user === 'female') {
		return (
			<LinkContainer active={page} user={user} onClick={() => setActive('female')}>
				<PurpleContainer>
					<Icon className={icon} />
				</PurpleContainer>
				<TextContainer>
					<Text size={textSize} fontSize={textFontSize} opacity={textOpacity} color={textColor}>
						{children}
					</Text>
				</TextContainer>
			</LinkContainer>
		);
	} else if (user === 'all') {
		return (
			<LinkContainer active={page} user={user} onClick={() => setActive('all')}>
				<PinkContainer>
					<Icon className={icon} />
				</PinkContainer>
				<TextContainer>
					<Text size={textSize} fontSize={textFontSize} opacity={textOpacity} color={textColor}>
						{children}
					</Text>
				</TextContainer>
			</LinkContainer>
		);
	}
};

export default LinkBox;
