import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background: gray;
`

const Header = () => {
    const { t, i18n } = useTranslation()
    const [selectedLang, setSelectedLang] = useState(null);

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        setSelectedLang(event.target.value)
        localStorage.setItem('lang', event.target.value)
    }

    return (
        <MainContainer>
            <h1>
                {t('header')}
            </h1>
            <div>
                <Dropdown
                    style={{ width: '200px' }}
                    value={selectedLang}
                    onChange={handleChangeLanguage}
                    options={[
                        { label: t('portuguese'), value: 'ptbr' },
                        { label: t('english'), value: 'en' },
                    ]}
                    placeholder="Lang"
                />
            </div>
        </MainContainer>
    )
}

export default Header