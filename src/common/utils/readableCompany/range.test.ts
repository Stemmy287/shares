import {readableCompany} from "common/utils/readableCompany/readableCompany";

test('range' , () => {
  const companyName = readableCompany('tsla')
  expect(companyName).toBe('Tesla')
})