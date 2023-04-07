import {CompanyType} from "features/Shares/sharesSlice";

export const readableCompany = (company: CompanyType) => {

  const companyDecoder = {
    tsla: 'Tesla',
    aapl: 'Apple',
    msft: 'Microsoft',
    amzn: 'Amazon'
  }

  return companyDecoder[company]

}