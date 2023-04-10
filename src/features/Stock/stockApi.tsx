import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cloud.iexapis.com/'
})

const token = '' //insert your token

export const stockApi = {
  getStock(company: string) {
    return instance.get<StockType[]>(`stable/stock/${company}/chart/?token=${token}`)
      .then(res => res.data)
  }
}

//types
export type StockType = {
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