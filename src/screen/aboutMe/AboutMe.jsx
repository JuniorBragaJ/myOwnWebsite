import { t } from "i18next"
import { useTranslation } from "react-i18next"
import styled from "styled-components"


const AboutMe = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>
                {t('about_me')}
            </h1>
        </div>
    )
}

export default AboutMe