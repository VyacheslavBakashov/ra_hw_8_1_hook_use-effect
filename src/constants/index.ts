import { Key } from 'react';
const BASE_URL = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data'

export const urls = (id?:Key) => ({
  users: `${BASE_URL}/users.json`,
  userById:`${BASE_URL}/${id}.json`,
});
