import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${props => props.scrollYValue ? `rgb(220, 220, 220, ${props.scrollYValue / 700})` : ''};
    height: 62px;
    position: fixed;
    top: 0;
`
const HeaderContainer = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const HeaderLogo = styled.a`
    align-self: center;
    font-size: 24px;
    color: white;
    text-decoration: none;
    font-weight: bold;
`
const NavigationContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    width: 30%;
`
const Link = styled.a`
    font-size: 20px;
    cursor: pointer;
    color: white;
    text-decoration: none;
`

const Header = () => {
    const { t, i18n } = useTranslation()
    const [selectedLang, setSelectedLang] = useState(null);
    const [scrollYValue, setScrolYValue] = useState(0);

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
        setSelectedLang(event.target.value)
        localStorage.setItem('lang', event.target.value)
    }

    function setScroll() {
        setScrolYValue(window.pageYOffset)
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", setScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", setScroll);
        };
    }, [])

    return (
        <MainContainer scrollYValue={scrollYValue}>
            <HeaderContainer>
                <HeaderLogo href="/">
                    {'<Junior Braga />'}
                </HeaderLogo>
                <NavigationContainer>
                    <Link href="/projects">{t('projects')}</Link>
                    <Link href="/aboutme">{t('about_me')}</Link>
                    <Link href="/contact">{t('contact')}</Link>
                </NavigationContainer>
                <Dropdown
                    style={{ width: '150px', height: '40px', alignSelf: "center" }}
                    value={selectedLang}
                    onChange={handleChangeLanguage}
                    options={[
                        { label: t('portuguese'), value: 'ptbr' },
                        { label: t('english'), value: 'en' },
                    ]}
                    placeholder="Lang"
                />
            </HeaderContainer>
        </MainContainer>
    )
}

export default Header