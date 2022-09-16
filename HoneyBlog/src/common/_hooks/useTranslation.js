import { useSelector } from 'react-redux';
import dictionary from '../_consts/dictionary';

export const useTranslation = () => {
    const currentLanguage = useSelector((state) => state.userSettings.language);
    const translate = key => dictionary?.[currentLanguage]?.[key];
    
    return translate;
}