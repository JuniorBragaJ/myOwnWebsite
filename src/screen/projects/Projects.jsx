import { useTranslation } from "react-i18next"
import styled from "styled-components"


const Projects = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>
                {t('projects')}
            </h1>
        </div>
    )
}

export default Projects