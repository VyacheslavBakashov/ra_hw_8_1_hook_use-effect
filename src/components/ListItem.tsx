import { FC, Key, memo } from 'react';
import { UserTypes } from '../types';

type PropsTypes = UserTypes & {
  userId: Key;
  onSelectUserId: (id: Key) => () => void;
};

export let ListItem: FC<PropsTypes> = ({ id, name, userId, onSelectUserId }) => {
  let className = 'list-item';
  if (id === userId) {
    className += ' active';
  }

  return (
    <li className={className} onClick={onSelectUserId(id)}>
      {name}
    </li>
  );
};

ListItem = memo(ListItem);
