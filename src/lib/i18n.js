import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from '../locale/en.json'
import ptbrTranslation from '../locale/ptbr.json'


const initTranslation = (lang) => {
    i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...enTranslation
        },
        ptbr: {
            ...ptbrTranslation
        }
    },
    lng: lang,
})}
const lang = localStorage.getItem('lang')
lang ? initTranslation(lang) : initTranslation('en')