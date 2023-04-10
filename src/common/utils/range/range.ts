/**
 * returns array from start item to end item
 * @param start - start item
 * @param end - end item
 * @example
 * initial (1, 10);
 * return [1,2,3,4,5,6,7,8,9,10];
 */

export const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({length}, (_, index) => index + start)
}