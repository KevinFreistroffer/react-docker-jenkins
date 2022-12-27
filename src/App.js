import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import Registration from './Registration/Registration';
import { db } from './db/db';
import * as storageService from './services/storage';
import * as accountService from './services/account';
import { accounts } from './data/account';

const queryClient = new QueryClient();

const DATABASE = {
  accounts: [
    {
      username: 'admin',
      password: 'password',
      dateCreated: new Date(),
    },
  ],
  transactions: [
    {
      id: 1,
      date: new Date(),
      description: 'Transaction 1',
      amount: 100,
      type: 'debit',
      account: 'admin',
    },
  ],
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [browserSupportsLocalStorage, setBrowserSupportsLocalStorage] =
    useState(false);

  useEffect(() => {
    if (storageService.isSupported()) {
      setBrowserSupportsLocalStorage(true);
      const accounts = storageService.load('accounts');
      const transactions = storageService.load('transactions');
      if (!accounts || accounts.length === 0) {
        storageService.save('accounts', DATABASE.accounts);
      }

      if (!transactions || transactions.length === 0) {
        storageService.save('transactions', DATABASE.transactions);
      }
    }

    setTimeout(() => {
      setIsLoaded(true);
    }, Math.ceil(Math.random()) * 5);
  }, []);

  // Create the database if it doesn't exist
  useEffect(() => {}, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isLoaded ? (
          <div className="loading">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
          </div>
        ) : browserSupportsLocalStorage ? (
          <>
            <header className="App-header">
              <h1>React Jenkins Docker</h1>
            </header>
            <main>
              <Registration />
            </main>
          </>
        ) : (
          <div className="error">
            <p>Browser does not support local storage!</p>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
}

export default App;
