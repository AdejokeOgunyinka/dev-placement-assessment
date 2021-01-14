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
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Switch from 'react-switch';
import { CSVLink } from 'react-csv';

const Template = ({ children, header, url }) => {
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
	const [ paginatedValues, setPaginatedValues ] = useState([]);

	const [ searchQuery, setSearchQuery ] = useState([]);
	const [ filteredData, setFilteredData ] = useState([]);
	const [ country, setCountry] = useState([]);

	const handleFiltering = (query) => {
		const filtered = values.filter(
			(name) =>
				name.name.first.toLowerCase().includes(query.toLowerCase()) ||
				name.name.last.toLowerCase().includes(query.toLowerCase()) ||
				name.location.country.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredData(filtered);
		setPaginatedValues(() => [ ...filtered.slice(0, 3) ]);
	};

	const { Parser } = require('json2csv');
	const json2csvParser = new Parser();
	const csv = json2csvParser.parse({ paginatedValues });

	// console.log(countryList().getValue());

	const handleChange = (nextChecked) => {
		setChecked(nextChecked);
	};

	const [ currentPage, setPage ] = useState(1);

	const handlePagination = (type) => {
		if (type === 'next') {
			setPage(currentPage + 1);
			const start = (currentPage + 1) * 3 - 3;
			const stop = start + 3;
			if (filteredData.length > 0) {
				setPaginatedValues(filteredData.slice(start, stop));
			} else {
				setPaginatedValues(values.slice(start, stop));
			}
		} else if (type === 'prev') {
			setPage(currentPage - 1);
			const start = currentPage - 1 === 0 ? 0 : (currentPage - 1) * 3 - 3;
			const stop = start + 3;
			if (filteredData.length > 0) {
				setPaginatedValues(filteredData.slice(start, stop));
			} else {
				setPaginatedValues(values.slice(start, stop));
			}
		}
	};

	const fetchFunction = async () => {
		const data = await fetch(url);
		const results = await data.json();
		setItems(() => [ ...results.results ]);
		setPaginatedValues(() => [ ...results.results.slice(0, 3) ]);
		localStorage.setItem('users', JSON.stringify(results.results));
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
						changeFunction={(e) => handleFiltering(e.target.value)}
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
						{header}
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
							changeFunction={(e) => handleFiltering(e.target.value)}
						/>
					</CardSearchStyle>
					<CountryListStyle>
						<Select
							placeholder=" Country "
							options={countryList().getData()}
							// value={countryList().getValue()}
							// onChange={(e) => console.log(e.target.value)}
						/>
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
				<Card paginatedValues={paginatedValues} page={page} />
				<FooterStyle>
					<CSVLink data={csv} style={{ textDecoration: 'none', color: 'white', width: '200px' }}>
						<DownloadStyle>
							<Text color="white" size="large" fontSize="13px">
								Download results
							</Text>
						</DownloadStyle>
					</CSVLink>
					<NavigationStyle>
						<LeftArrowStyle
							onClick={() => {
								handlePagination('prev');
							}}
						>
							<LeftArrow />
						</LeftArrowStyle>
						<RightArrowStyle
							onClick={() => {
								handlePagination('next');
							}}
						>
							<RightArrow />
						</RightArrowStyle>
					</NavigationStyle>
				</FooterStyle>
			</Container>
		</Container>
	);
};

export default Template;
