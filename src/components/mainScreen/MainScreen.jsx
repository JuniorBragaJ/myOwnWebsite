import { t } from "i18next"
import { useTranslation } from "react-i18next"
import styled, { keyframes } from "styled-components"

const animateBg = keyframes`
    0% {
        background-position: left;
    }
    100% {
        background-position: right;
    }
`

const MainContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(45deg, #12100E, #6B2D5C, #2B4162);
    background-size: 1000%;
    animation: ${animateBg} 20s infinite alternate;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledTitle = styled.div`
    height: 100px;
    font-size: 96px;
    color: white;
`
const StyledPhrase = styled.p`
    font-size: 22px;
    color: white;
`


const MainScreen = () => {
    const { t } = useTranslation()

    return (
        <MainContainer>
            <StyledTitle>Junior Braga</StyledTitle>
            <StyledPhrase>Passionate about new knowledge in the world of programming.</StyledPhrase>
        </MainContainer>
    )
}

export default MainScreen