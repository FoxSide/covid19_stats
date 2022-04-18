import React, {useEffect, useState} from 'react';
import s from './main-page.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {setDataTC} from "../../bll/reducers/totalNumberReducer";
import {AppRootStateType} from "../../bll/redux-store/store";
import {CountrySelect} from "../country-select/CountrySelect";
import {setAllCountriesTC} from "../../bll/reducers/allCountriesReducer";

export const MainPage = () => {
  const dispatch = useDispatch()
  const totalNumbers = useSelector((state: AppRootStateType) => state.totalNumbers)
  const [change, setChange] = useState<boolean>(false)
  useEffect(() => {
    dispatch(setDataTC('Ukraine'))
    dispatch(setAllCountriesTC())
  }, [dispatch])

  return (
    <div className={s.wrapp}>
      <CountrySelect/>
      <div className={s.contentWrapp}>
        <div className={s.contentContainer}>
          <span>Country: {totalNumbers.location}</span>
          <span>Confirmed: {totalNumbers.confirmed}</span>
          <span>Death: {totalNumbers.deaths}</span>
        </div>
        <button onClick={() => setChange(!change)}>Show More</button>
      </div>
    </div>
  );
};