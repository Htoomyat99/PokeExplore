import {useContext} from 'react';
import en from '../helper/local/en';
import mm from '../helper/local/mm';
import {AuthContext} from '../context/Context';

export const useLocal = () => {
  const {lang} = useContext(AuthContext);

  if (lang == 'en') {
    return en;
  } else {
    return mm;
  }
};
