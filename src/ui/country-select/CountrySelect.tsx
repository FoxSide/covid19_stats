import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/redux-store/store";
import {setDataTC} from "../../bll/reducers/totalNumberReducer";
import {setAllCountriesTC} from "../../bll/reducers/allCountriesReducer";

export const CountrySelect = () => {
  useEffect(() => {
    dispatch(setAllCountriesTC())
  }, [])

  const allCountries = useSelector((state: AppRootStateType) => state.allCountries)
  const dispatch = useDispatch()
  function selectChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.currentTarget.value
    dispatch(setDataTC(value))
  }
  return (
    <div>
        <select id={'selectBox'} onChange={selectChange}>
          {Object.values(allCountries).map((m: any) => {
            return <option selected={m === 'Ukraine'} value={m}>{m}</option>
          })}
        </select>
    </div>
  );
};