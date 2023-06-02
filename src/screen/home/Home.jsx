import { t } from "i18next"
import { useTranslation } from "react-i18next"
import styled from "styled-components"


const Home = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>
                {t('home')}
            </h1>
        </div>
    )
}

export default Home