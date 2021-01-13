import styled from 'styled-components';

export const ReturnSectionStyle = styled.div`
    width: 100%;
    height: 13%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    cursor: pointer;
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
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 25px;
`

export const NameAgeStyle = styled.div`
    width: 100%;
    height: 10%;
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
    margin-top: 15px;
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
