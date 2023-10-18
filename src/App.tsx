import { FC, Key, useEffect, useMemo, useState } from 'react';

import './App.css';
import { Details } from './components/Details';
import { List } from './components/List';
import { urls } from './constants';
import { UserInfoTypes } from './types';

const App: FC = () => {
  const [userId, setUserId] = useState<Key>('');
  const [userInfo, setUserInfo] = useState<Partial<UserInfoTypes>>();

  const onSelectUserId = useMemo(() => {
    return (id: Key) => () => setUserId(id);
  }, []);

  const getUserById = async (id: Key) => {
    try {
      const response = await fetch(urls(id).userById);
      const data = await response.json();
      setUserInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    userId && getUserById(userId);
  }, [userId]);

  return (
    <div className="app">
      <List userId={userId} onSelectUserId={onSelectUserId} />
      {userInfo && <Details {...userInfo} />}
    </div>
  );
};

export default App;