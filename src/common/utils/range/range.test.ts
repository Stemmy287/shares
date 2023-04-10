import {range} from "common/utils/range/range";

test('range' , () => {
  const arrayRange = range(1, 10)

  expect(arrayRange[0]).toBe(1)
  expect(arrayRange[arrayRange.length - 1]).toBe(10)
  expect(arrayRange.length).toBe(10)
})