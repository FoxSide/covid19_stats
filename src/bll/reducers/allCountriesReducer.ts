import {Dispatch} from "redux";
import {covidAPI} from "../../dal/main-api";

type ActionType = ReturnType<typeof setAllCountriesAC>

const initialState = ['']

export const allCountriesReducer = (state: string[] = initialState, action: ActionType) => {
  switch (action.type) {
    case "SET_ALL_COUNTRIES":
      return {...state, ...action.data}
    default:
      return state
  }
};

export const setAllCountriesAC = (data: any) => {
  return {
    type: 'SET_ALL_COUNTRIES',
    data
  }
}

export const setAllCountriesTC = () => (dispatch: Dispatch) => {
  covidAPI.totalCountry()
    .then(res => {
      let str = res.data.data.covid19Stats.map((m: any) => m.country)
      const removeDuplicate = (str: any) => {
        str = str.toString().split(",");
        let result = [];
        for(let i = 0; i < str.length ; i++) {
          if(result.indexOf(str[i]) === -1) result.push(str[i]);
        }
        return result;
      }
      dispatch(setAllCountriesAC(removeDuplicate(str)))
    })
}