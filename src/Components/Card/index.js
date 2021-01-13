import {
	CardTotal,
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
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Card = ({ children, fetchUrl, paginatedValues }) => {
	const history = useHistory()

	return (
		<CardTotal >
			{paginatedValues?.map((result) => (
				<CardStyle>
					<ImageStyle>
						<Thumbnail url={result.picture['large']} />
					</ImageStyle>
					<InformationStyle>
						<NameStyle>
							<Text color="black" size="extra-large" fontSize="18px">
								{`${result.name.first} ${result.name.last}`}
							</Text>
						</NameStyle>
						<AddressStyle>
							<Text color="black" size="medium" fontSize="14px">
								{`${result.location['street']["number"]} ${result.location['street']["name"]} , ${result.location['city']}, ${result.location['state']}, ${result.location['country']}`}
							</Text>
						</AddressStyle>
						<OtherStyle>
							<IconStyle>
								<EnvelopeIcon />
								<Text color="black" size="small" fontSize="14px" opacity="0.5">
									{result.email}
								</Text>
							</IconStyle>
							<IconStyle>
								<PhoneIcon />
								<Text color="black" size="small" fontSize="14px" opacity="0.5">
									{result.phone}
								</Text>
							</IconStyle>
						</OtherStyle>
					</InformationStyle>
					<ButtonStyle onClick={()=>history.push(`/user/${result.id.value}`)}>
						<NavButtonStyle>
							<AngleStyle />
						</NavButtonStyle>
					</ButtonStyle>
				</CardStyle>
			))}
		</CardTotal>
	);
};

export default Card;
