import React, {useEffect} from 'react';
import s from './main-page.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setDataTC} from "../../bll/reducers/totalNumberReducer";
import {AppRootStateType} from "../../bll/redux-store/store";
import {CountrySelect} from "../country-select/CountrySelect";

export const MainPage = () => {
  const dispatch = useDispatch()
  const totalNumbers = useSelector((state: AppRootStateType) => state.totalNumbers)
  useEffect(() => {
    dispatch(setDataTC('Ukraine'))
  }, [])

  return (
    <div className={s.wrapp}>
      <div className={s.contentWrapp}>
        <span>Country: {totalNumbers.location}</span>
        <span>Confirmed: {totalNumbers.confirmed}</span>
        <span>Death: {totalNumbers.deaths}</span>
      </div>
      <CountrySelect/>
    </div>
  );
};