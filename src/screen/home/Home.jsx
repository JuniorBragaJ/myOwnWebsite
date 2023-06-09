import { t } from "i18next"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import MainScreen from "../../components/mainScreen/MainScreen"


const Home = () => {
    const { t } = useTranslation()

    return (
        <div style={{height: '200vh'}}>
            <MainScreen />
            <h1>
                {t('home')}
            </h1>
        </div>
    )
}

export default Home