import axios from "axios";

const instance = axios.create({
  baseURL: 'https://cloud.iexapis.com/'
})

export const sharesApi = {
  getShares() {
    return instance.get<SharesType[]>('stable/tops/?token=pk_7aff2648ca544d38a1f4cdf7bbe7f11d')
      .then(res => res.data)
  }
}

//types
export type SharesType = {
  symbol: string,
  sector: string,
  securityType: string,
  bidPrice: number,
  bidSize: number,
  askPrice: number,
  askSize: number,
  lastUpdated: number,
  lastSalePrice: number,
  lastSaleSize: number,
  lastSaleTime: number,
  volume: number
}