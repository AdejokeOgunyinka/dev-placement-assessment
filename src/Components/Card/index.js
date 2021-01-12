import {
	CardStyle,
	ImageStyle,
	InformationStyle,
	ButtonStyle,
	NameStyle,
	AddressStyle,
	OtherStyle,
	IconStyle,
	EnvelopeIcon,
	PhoneIcon,
	AngleStyle,
	NavButtonStyle
} from './style';
import Thumbnail from '../Thumbnail/index';
import Text from '../Text/index';

const Card = ({ children, imageUrl }) => {
	return (
		<CardStyle>
			<ImageStyle>
				<Thumbnail url={imageUrl} />
			</ImageStyle>
			<InformationStyle>
				<NameStyle>
					<Text color="black" size="extra-large" fontSize="18px">
						Shalom Chioma
					</Text>
				</NameStyle>
				<AddressStyle>
					<Text color="black" size="medium" fontSize="14px">
						9278, New Road, Kilcole, Waterford
					</Text>
				</AddressStyle>
				<OtherStyle>
					<IconStyle>
						<EnvelopeIcon />
						<Text color="black" size="small" fontSize="14px" opacity="0.5">
							shalom.chioma@gmail.com
						</Text>
					</IconStyle>
					<IconStyle>
						<PhoneIcon />
						<Text color="black" size="small" fontSize="14px" opacity="0.5">
							011-962-7516
						</Text>
					</IconStyle>
				</OtherStyle>
			</InformationStyle>
            <ButtonStyle>
                <NavButtonStyle>
                    <AngleStyle />
                </NavButtonStyle>
            </ButtonStyle>
		</CardStyle>
	);
};

export default Card;
