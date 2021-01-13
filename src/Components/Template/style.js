import styled from 'styled-components';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'

export const HeaderStyle = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
`

export const WelcomeStyle = styled.div`
    width: 100%;
    height: 3%;
    margin-top: 3.5px;
`

export const SearchStyle = styled.div`
    width: 85%;
    height: 10.5%;
    margin-top: 53px;
`

export const ShowUserStyle = styled.div`
    width: 100%;
    height: 5%;
    margin-top: 45px;
`

export const NavStyle = styled.div`
    width: 60%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

export const SecondHeader = styled.div`
    width: 100%;
    height: 7%;
`

export const FilterStyle = styled.div`
    width: 100%;
    height: 3%;
    margin-top: 1%;
`

export const SearchSectionStyle = styled.div`
    width: 100%;
    height: 6%;
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FooterStyle = styled.div`
    width: 100%;
    height: 6%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`

export const CardSearchStyle = styled.div`
    flex-basis: 40%;
    height: 100%;
    margin-top: 1%;
`
export const CountryListStyle = styled.div `
    flex-basis: 25%;
    height: 100%;
    margin-top: 1%;
    margin-left: 20px;
    margin-right: 20px;
    ${'' /* display: flex; */}
    justify-content: center;
    align-items: center;
`

export const DownloadStyle = styled.div `
    flex-basis: 30%;
    width: 100%;
    height: 100%;
    background-color: #7946c1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

export const NavigationStyle = styled.div `
    flex-basis: 70%;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: flex-end;
    margin-right: 55px;
`

export const LeftArrow = styled(FaAngleLeft)`
    font-size: 13px;
    color: black;
`

export const RightArrow = styled(FaAngleRight)`
    font-size: 13px;
    color: white;
`

export const LeftArrowStyle = styled.div`
    background-color: #E2E2EA;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
`

export const RightArrowStyle = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
`
