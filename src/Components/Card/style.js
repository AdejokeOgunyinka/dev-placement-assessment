import styled from 'styled-components';
import {FaRegEnvelope, FaPhoneAlt, FaArrowRight} from 'react-icons/fa';

export const CardTotal = styled.div`
    width: 100%;
    height: 72%;
`

export const CardStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 94%;
    height: 26%;
    background-color: #FCFCFF;
    margin-top: 30px;
    border-radius: 18px;
    box-shadow: 10px 10px 40px #0000000D;
`

export const ImageStyle = styled.div `
    display: flex;
    flex-basis: 15%;
    margin-top: 30px;
    width: 50%;
    height: 60%;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`

export const InformationStyle = styled.div `
    display: flex;
    flex-basis: 75%;
    width: 100%;
    height: 100%;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 15px;
    margin-top: 10px;
`

export const ButtonStyle = styled.div `
    flex-basis: 10%;
    display: flex;
    width: 100%;
    height: 100%;
`

export const OtherStyle = styled.div `
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;

`

export const NameStyle = styled.div `
    width: 100%;
    height: 30%;
`

export const AddressStyle = styled.div `
    width: 100%;
    height: 30%
`

export const EnvelopeIcon = styled(FaRegEnvelope) `
    color: black;
    opacity: 0.4;
    font-size: 15px;
    margin-right: 15px;
`

export const PhoneIcon = styled(FaPhoneAlt) `
    color: black;
    opacity: 0.4;
    font-size: 14px;
    margin-right: 15px;
`

export const IconStyle = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 15px;
`

export const AngleStyle = styled(FaArrowRight)`
    color: white;
    font-size: 15px;
`

export const NavButtonStyle = styled.div `
    display: flex;
    width: 45px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: #75d6d1;
    border-radius: 10px;
    align-self: flex-end;
    margin-bottom: 15px;
    box-shadow: 2px 15px 30px #30BBB574;
    cursor: pointer;
`
