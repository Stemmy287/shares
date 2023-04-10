import {CompanyType} from "features/Stock/stockSlice";

/**
 * returns the name in readable form
 * @param company - name company
 * @example
 * initial 'tsla';
 * return 'Tesla';
 */

export const readableCompany = (company: CompanyType) => {

  const companyDecoder = {
    tsla: 'Tesla',
    aapl: 'Apple',
    msft: 'Microsoft',
    amzn: 'Amazon'
  }

  return companyDecoder[company]

}