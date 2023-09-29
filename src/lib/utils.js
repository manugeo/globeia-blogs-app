import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Todo: Move basUrl to env.
const BASE_URL = 'https://bloglist-api-pcmo.onrender.com/api';
export const customFetch = async (url, method, body = null) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : null
  }).then(response => {
    if (!response.ok) throw new Error('Network response was not OK');
    return (response.status !== 204) ? response.json() : true;
  }).catch(error => {
    console.log('There has been a problem with your fetch operation:', error);
    return null;
  });
};

export const getTruncatedString = (str = '', maxLength = 100) => {
  if (str.length <= maxLength) return str;
  const slicedString = str.slice(0, maxLength);
  const lastSpaceIndex = slicedString.lastIndexOf(" ");
  const finalSlicedString = slicedString.slice(0, lastSpaceIndex);
  return finalSlicedString.trim() + '...';
};
