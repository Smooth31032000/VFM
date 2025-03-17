import { ChangeEvent } from 'react';

export const takeAll = (event: ChangeEvent<HTMLInputElement>): string => {
  return event.target.value;
};

export const takeOnlyNumber = (
  event: ChangeEvent<HTMLInputElement>
): string => {
  const value = event.target.value;
  const numbersArray = value.match(/\d+/g) ?? [];
  return numbersArray.join('');
};

export const takeOnlyWord = (event: ChangeEvent<HTMLInputElement>): string => {
  const inputValue = event.target.value;
  const wordsOnly = inputValue.replace(/[^a-zA-Z\s]/g, '').trim();
  return wordsOnly;
};
