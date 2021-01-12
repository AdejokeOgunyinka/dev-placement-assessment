import styled from 'styled-components';
import {FaAngleRight, FaAngleLeft, FaArrowLeft, FaRegEnvelope, FaPhoneAlt, FaMobileAlt} from 'react-icons/fa'

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
    width: 80%;
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
    justify-content: space-between;
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
    width: 45%;
    height: 100%;
    margin-top: 1%;
`
export const ReturnSectionStyle = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
`

export const BackArrow = styled(FaArrowLeft)`
    color: #75d6d1;
    fontSize: 30px;
    margin-right: 10px;
    align-self: center;
`

export const ProfileStyle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    background: transparent;
`

export const PictureStyle = styled.div`
    flex-basis: 33%;
    width: 50%;
    height: 53%;
    display: flex;
`

export const ProfileInfoStyle = styled.div`
    flex-basis: 65%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 25px;
`

export const NameAgeStyle = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const EmailEnvelope = styled(FaRegEnvelope)`
    font-size: 17px;
    padding-right: 10px;
    align-self: center;
    color: black;
    opacity: 0.2;
`

export const ProfileEmailStyle = styled.div`
    width: 70%;
    height: 10%;
    background-color: #E2E2EA;
    border-radius: 18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ProfileDateStyle = styled.div`
    background: #FFD1E0 0% 0% no-repeat padding-box;
    ${'' /* opacity: 0.15;   */}
    border-radius: 18px;
    justify-content: center;
    display: flex;
    width: 45%;
    margin-top: 20px;
    height: 10%;
    align-items: center;
`

export const ProfilePhoneStyle = styled.div` 
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
`

export const PhoneIcon = styled(FaPhoneAlt)`
    font-size: 17px;
    padding-right: 10px;
    align-self: center;
    color: black;
    opacity: 0.2;
`

export const ProfileCellStyle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
`

export const CellIcon = styled(FaMobileAlt)`
    font-size: 20px;
    padding-right: 10px;
    align-self: center;
    color: black;
    opacity: 0.2;
`

export const DownloadStyle = styled.div `
    flex-basis: 30%;
    width: 100%;
    height: 100%;
    background-color: #7946c1;
    border-radius: 20px;
    display: flex;
    justify-content: center;
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
`

export const RightArrowStyle = styled.div`
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
`