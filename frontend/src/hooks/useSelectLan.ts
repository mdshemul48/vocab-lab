import { useContext } from 'react';
import { SelectLanguageContext } from '../Contexts/SelectLanguageContext';

const useSelectLan = () => useContext(SelectLanguageContext);
export default useSelectLan;
