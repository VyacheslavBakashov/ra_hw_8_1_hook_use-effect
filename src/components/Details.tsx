import { FC } from 'react';

import { UserInfoTypes } from '../types';

type PropsTypes = Partial<UserInfoTypes>;

export const Details: FC<PropsTypes> = (props) => {
  return (
    <div className="details">
      <img className="details__img" src={props.avatar} alt='avatar'/>
      <h2 className="details__title">{props.name}</h2>
      <p className="details__info">City: {props.details?.city}</p>
      <p className="details__info">Company: {props.details?.company}</p>
      <p className="details__info">Position: {props.details?.position}</p>
    </div>
  );
};
