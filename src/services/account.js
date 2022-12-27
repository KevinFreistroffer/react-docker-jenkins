import { db } from '../db/db';
import * as storageService from './storage';

const success = {
  status: 200,
  data: 'Success!',
};

export const create = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response, response.data);

  return { ...success };
};

export const fetchByUsername = (username) => {
  const accounts = storageService.load('accounts');

  if (accounts && accounts.length > 0) {
    return accounts.find((account) => account.username === username);
  } else {
    return null;
  }
};
