import React, { useState, useEffect } from 'react';
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
	CountryListStyle,
	FooterStyle,
	DownloadStyle,
	NavigationStyle,
	LeftArrow,
	RightArrow,
	LeftArrowStyle,
	RightArrowStyle
} from './style';
import { generatePath, Redirect } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Switch from 'react-switch';
import { CSVDownload } from 'react-csv';

const GeneralUrl = 'https://randomuser.me/api/?results=15';

const UsersScreen = ({ children }) => {
	const getUrl = window.location.href.split('/');
	const page = getUrl[getUrl.length - 1];
	// console.log({ page });
	const [ active, setActive ] = useState(page);
	const [ redirect, setRedirect ] = useState(false);
	const handleActivePage = (page) => {
		setActive(page === 'all' ? '' : page);
		setRedirect(true);
	};

	const [ checked, setChecked ] = useState(false);
	const [ values, setItems ] = useState([]);
	const [paginatedValues, setPaginatedValues] = useState([])

	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
	};
	const [ currentPage, setPage ] = useState(1);
	const handlePagination = (type) => {
		if (type === 'next') {
			setPage(currentPage + 1);
			const start = (currentPage + 1) * 3 - 3;
			const stop = start + 3;
			setPaginatedValues(values.slice(start,stop))
		} else if (type ==="prev") {
			setPage(currentPage - 1);
			const start = currentPage - 1 === 0 ? 0 : (currentPage - 1) * 3 - 3;
			const stop = start + 3;
			setPaginatedValues(values.slice(start,stop))
		}
	};
	const fetchFunction = async () => {
		const data = await fetch(GeneralUrl);
		const results = await data.json()
		// console.log(results.results)
		setItems(()=>[...results.results]);
		setPaginatedValues(()=>[...results.results.slice(0,3)]);
		localStorage.setItem("users", JSON.stringify(results.results))
	};
	useEffect(() => {
		fetchFunction();
	}, []);

	return (
		<Container className="page" type="background">
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
					<Input
						type="search"
						placeholder="Find a user"
						iconColor="white"
						backgroundColor=" #3c3f54"
						borderRadius="20px"
					/>
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
						setActive={setActive}
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
						All Users
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
						onColor="#75d6d1"
						onHandleColor="white"
						handleDiameter={17}
						uncheckedIcon={false}
						checkedIcon={false}
						height={19}
						width={33}
						className="react-switch"
						id="material-switch"
					/>
					<Text color="black" size="large" fontSize="13px" opacity="0.7" padding="5px">
						Show Country
					</Text>
				</SearchSectionStyle>
				<Card paginatedValues={paginatedValues} />
				<FooterStyle>
					<DownloadStyle onClick={<CSVDownload data={page} target="_blank" />}>
						<Text color="white" size="large" fontSize="13px">
							Download results
						</Text>
					</DownloadStyle>
					<NavigationStyle>
						<LeftArrowStyle onClick={() => handlePagination('prev')}>
							<LeftArrow />
						</LeftArrowStyle>
						<RightArrowStyle onClick={() => handlePagination('next')}>
							<RightArrow />
						</RightArrowStyle>
					</NavigationStyle>
				</FooterStyle>
			</Container>
		</Container>
	);
};

export default UsersScreen;
