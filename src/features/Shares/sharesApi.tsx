import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cloud.iexapis.com/'
})

export const sharesApi = {
  getShares(company: string) {
    return instance.get<SharesType[]>(`stable/stock/${company}/chart/?token=pk_7aff2648ca544d38a1f4cdf7bbe7f11d`)
      .then(res => res.data)
  }
}

//types
export type SharesType = {
  close: number
  high: number
  low: number
  open: number
  priceDate: string
  symbol: string
  volume: number
  id: string
  key: string
  subkey: string
  date: string
  updated: number
  changeOverTime: number
  marketChangeOverTime: number
  uOpen: number
  uClose: number
  uHigh: number
  uLow: number
  uVolume: number
  fOpen: number
  fClose: number
  fHigh: number
  fLow: number,
  fVolume: number
  label: string
  change: number
  changePercent: number
}