import { Key } from 'react';

export type UserTypes = {
  id: Key;
  name: string;
};

export type UserInfoTypes = {
  id: Key;
  name: string;
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};
