import {Dispatch} from "redux";
import {covidAPI} from "../../dal/main-api";

type InitialStateType = {
    recovered: null,
    deaths: number,
    confirmed: number,
    lastChecked: string,
    lastReported: string,
    location: string
}
type ActionType = ReturnType<typeof setDataAC>

const initialState = {
    recovered: null,
    deaths: 0,
    confirmed: 0,
    lastChecked: '',
    lastReported: '',
    location: ''
}

export const totalNumberReducer = (state: InitialStateType = initialState, action: ActionType) => {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, ...action.data}
    default:
      return state
  }
};

export const setDataAC = (data: InitialStateType) => {
  return {
    type: 'SET_DATA',
    data
  } as const
}

export const setDataTC = (city?: string) => (dispatch: Dispatch) => {
  covidAPI.totalNumber(city)
    .then(res => {
      dispatch(setDataAC(res.data.data))
      console.log(res.data.data)
    })
    .catch(() => {
      console.log('error')
    })
}