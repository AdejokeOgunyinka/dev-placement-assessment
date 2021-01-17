import { useState } from 'react';
import Container from '../Container/index';
import Text from '../Text/index';
import Input from '../Input/index';
import LinkBox from '../Link/index';
import Thumbnail from '../Thumbnail/index';
// import Card from '../Card/index';
// import {useHistory } from 'react-router-dom';
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
	CountryListStyle,
    ReturnSectionStyle,
    BackArrow,
	FooterStyle,
	DownloadStyle,
	NavigationStyle,
	LeftArrow,
	RightArrow,
	LeftArrowStyle,
    RightArrowStyle,
    ProfileStyle,
    PictureStyle,
    ProfileInfoStyle,
    NameAgeStyle,
    EmailEnvelope,
    ProfileEmailStyle,
    ProfileDateStyle,
    PhoneIcon,
    CellIcon,
    ProfilePhoneStyle,
    ProfileCellStyle
} from './style';

import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Switch from 'react-switch';

// const GeneralUrl = 'https://randomuser.me/api/?results=3';

const SpecificUser = ({ children, paginatedValues }) => {
	const getUrl = window.location.href.split("/");
	 const page = getUrl[getUrl.length - 2];
	//  console.log({page})
	const [ active, setActive ] = useState(page);
	const [redirect, setRedirect] = useState(false)
	const handleActivePage = (page) => {
		setActive(page==="all"?"":page)
		setRedirect(true)
		
	}

	const [checked, setChecked] = useState(false);
	const handleChange = nextChecked => {
		setChecked(nextChecked);
	};
	const userId = getUrl[getUrl.length - 1];
	const users = JSON.parse(localStorage.getItem("users"))
	const currentUser = users?.filter(user=> user?.id?.value===userId)[0]

	// console.log(localStorage);

	// const history = useHistory();

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
						User List
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
					<CountryListStyle>
						<Select placeholder=" Country " options={countryList().getData()} />
					</CountryListStyle>
					<Switch
						checked={checked}
						onChange={handleChange}
						onColor="#8dd"
						onHandleColor="#fff"
						handleDiameter={17}
						uncheckedIcon={false}
						checkedIcon={false}
						height={19}
						width={33}
						className="react-switch"
						id="material-switch"
					/>
					<Text color="black" size="large" fontSize="13px" opacity="0.7" padding="5px">Show Country</Text>
				</SearchSectionStyle>

				<ReturnSectionStyle onClick={() => window.history.go(-1)}>
                    <BackArrow/>
                    <Text color="black" size="medium" fontSize="17px" opacity="0.4" >RESULTS</Text>
                </ReturnSectionStyle>

                <ProfileStyle>
                    <PictureStyle>
                        <Thumbnail url={currentUser.picture.large}/>
                    </PictureStyle>
                    <ProfileInfoStyle>
                        <NameAgeStyle>
                            <Text color="black" size="extra-large" fontSize="25px"> {`${currentUser.name.title}. ${currentUser.name.first} ${currentUser.name.last}`} </Text>
                            <Text color="black" size="small" fontSize="30px" padding="5px"> {currentUser.dob.age} </Text>
                        </NameAgeStyle>
                        <Text color="black" size="small" fontSize="18px" opacity="0.7"> {`${currentUser.location.street.number}, ${currentUser.location.street.name}, ${currentUser.location.city}, ${currentUser.location.state}`}</Text>
                        <ProfileEmailStyle>
                            <EmailEnvelope/>
                            <Text color="black" size="large" fontSize="14px" opacity="0.4">{currentUser.email}</Text>
                        </ProfileEmailStyle>
                        <ProfileDateStyle>
                            <Text color="black" size="large" fontSize="13px" opacity="0.6">{`JOINED: ${currentUser.registered.date.split("T")[0]}`}</Text>
                        </ProfileDateStyle>
                        <ProfilePhoneStyle>
                            <PhoneIcon />
                            <Text color="black" size="large" fontSize="13px" opacity="0.4">{currentUser.phone}</Text>
                        </ProfilePhoneStyle>
                        <ProfileCellStyle>
                            <CellIcon/>
                            <Text color="black" size="large" fontSize="13px" opacity="0.4">{currentUser.cell}</Text>
                        </ProfileCellStyle>
                    </ProfileInfoStyle>
                </ProfileStyle>

				<FooterStyle>
					<DownloadStyle disabled="true">
						<Text color="white" size="large" fontSize="13px">
							Download results
						</Text>
					</DownloadStyle>
					<NavigationStyle>
						<LeftArrowStyle >
							<LeftArrow />
						</LeftArrowStyle>
						<RightArrowStyle >
							<RightArrow />
						</RightArrowStyle>
					</NavigationStyle>
				</FooterStyle>
			</Container>
		</Container>
	);
};

export default SpecificUser;
