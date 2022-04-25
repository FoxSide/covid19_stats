import axios from "axios";
import {AxiosResponse} from "axios";

const instance = axios.create({
  baseURL: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/',
  headers: {'X-RapidAPI-Key': '64ddd2e629mshba401568c101552p191900jsn3a039ca649d3'}
});

export type ResponseType = {
  recovered: null,
  deaths: number,
  confirmed: number,
  lastChecked: string,
  lastReported: string,
  location: string
}

export const covidAPI = {
  totalNumber(city?: string) {
    return instance.get<AxiosResponse<ResponseType>>('total', { params: {country: city}})
  },
  totalCountry() {
    return instance.get('stats')
  }
}
//