import { useState } from 'react';
import Container from '../Container/index';
import Text from '../Text/index';
import Input from '../Input/index';
import LinkBox from '../Link/index';
import Card from '../Card/index';
import {
	HeaderStyle,
	WelcomeStyle,
	SearchStyle,
	ShowUserStyle,
	NavStyle,
	SecondHeader,
	FilterStyle,
	SearchSectionStyle,
	CardSearchStyle,
	FooterStyle,
	DownloadStyle,
	NavigationStyle,
	LeftArrow,
	RightArrow,
	LeftArrowStyle,
	RightArrowStyle
} from './style';
import { Redirect } from 'react-router-dom';

const MaleUrl = 'https://randomuser.me/api/?gender=male&results=3';

const MalesScreen = ({ children }) => {
	const getUrl = window.location.href.split("/");
	 const page = getUrl[getUrl.length - 1];
	 console.log({page})
	const [ active, setActive ] = useState(page);
	const [redirect, setRedirect] = useState(false)
	const handleActivePage = (page) => {
		setActive(page==="all"?"":page)
		setRedirect(true)
		
	}
	

	return (
		<Container type="background">
		{redirect && <Redirect to={`/${active}`} />}

			<Container type="left-container">
				<HeaderStyle>
					<Text color="white" size="super-large" fontSize="37px">
						{' '}
						Hello,
					</Text>
					<Text color="white" size="extra-large" padding="8px" fontSize="28px">
						Emerald
					</Text>
				</HeaderStyle>
				<WelcomeStyle>
					<Text color="white" size="extra-small" fontSize="14px" opacity="0.8">
						Welcome to your dashboard, kindly sort through the user base
					</Text>
				</WelcomeStyle>
				<SearchStyle>
					<Input type="search" placeholder="Find a user" iconColor="white" backgroundColor=" #3c3f54" borderRadius="20px" />
				</SearchStyle>
				<ShowUserStyle>
					<Text color="white" size="large" fontSize="" opacity="0.7">
						Show Users
					</Text>
				</ShowUserStyle>
				<NavStyle>
					<LinkBox
						user="all"
						icon="fas fa-users"
						textColor="white"
						textSize="small"
						textFontSize="12px"
						textOpacity="0.6"
						active={active}
						setActive={handleActivePage}
					>
						All Users
					</LinkBox>
					<LinkBox
						user="male"
						icon="fas fa-male"
						textColor="white"
						textSize="small"
						textFontSize="12px"
						textOpacity="0.6"
						active={active}
						setActive={handleActivePage}
					>
						Male Users
					</LinkBox>
					<LinkBox
						user="female"
						icon="fas fa-female"
						textColor="white"
						textSize="small"
						textFontSize="12px"
						textOpacity="0.6"
						active={active}
						setActive={handleActivePage}
					>
						Female Users
					</LinkBox>
				</NavStyle>
			</Container>

			<Container type="right-container">
				<SecondHeader>
					<Text color="black" size="extra-large" fontSize="28px">
						Male Users
					</Text>
				</SecondHeader>
				<FilterStyle>
					<Text color="black" size="small" fontSize="14px">
						Filter by
					</Text>
				</FilterStyle>
				<SearchSectionStyle>
					<CardSearchStyle>
						<Input
							type="small-search"
							placeholder="Find in list"
							backgroundColor="#E2E2EA"
							borderRadius="30px"
                            iconColor="black"
                            opacity="0.2"
						/>
					</CardSearchStyle>
				</SearchSectionStyle>
				<Card fetchUrl={MaleUrl} />
				<FooterStyle>
					<DownloadStyle>
						<Text color="white" size="large" fontSize="13px">
							Download results
						</Text>
					</DownloadStyle>
					<NavigationStyle>
						<LeftArrowStyle>
							<LeftArrow />
						</LeftArrowStyle>
						<RightArrowStyle>
							<RightArrow />
						</RightArrowStyle>
					</NavigationStyle>
				</FooterStyle>
			</Container>
		</Container>
	);
};

export default MalesScreen;