import { FC, Key, memo, useEffect, useState } from 'react';

import { urls } from '../constants';
import { UserTypes } from '../types';
import { ListItem } from './ListItem';

type PropsTypes = {
  userId: Key;
  onSelectUserId: (id: Key) => () => void;
};

export let List: FC<PropsTypes> = ({ userId, onSelectUserId }) => {
  const [users, setUsers] = useState<UserTypes[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetch(urls().users);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list">
      {users.map((u) => (
        <ListItem key={u.id} userId={userId} onSelectUserId={onSelectUserId} {...u} />
      ))}
    </div>
  );
};

List = memo(List);
