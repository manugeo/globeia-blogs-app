import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Todo: Implement login and retrieve token from response.
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWQiOiI2NTEzYmViNzVjMzIwNjUwOWJkYzMyOWMiLCJpYXQiOjE2OTU4MDA4MDAsImV4cCI6MTY5ODM5MjgwMH0.B0DJ0sw2bDD9XZt6fD_OiTJS-LP154eNmqJF93ybUu4';
// Todo: Move basUrl to env.
const BASE_URL = 'https://bloglist-api-pcmo.onrender.com/api';
export const customFetch = async (url, method, body = null) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    },
    body: body ? JSON.stringify(body) : null
  }).then(response => {
    if (!response.ok) throw new Error('Network response was not OK');
    return response.json();
  }).catch(error => {
    console.log('There has been a problem with your fetch operation:', error);
    return null;
  });
};
