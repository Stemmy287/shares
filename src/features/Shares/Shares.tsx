import React from 'react';
import s from './shares.module.scss'
import {TableBody} from "common/compontnes/Table/TableBody/TableBody";
import {TableHead} from "common/compontnes/Table/TableHead/TableHead";

const items = [
  {
    id: '1',
    order: '1',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '2',
    order: '2',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '3',
    order: '3',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '4',
    order: '4',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '5',
    order: '5',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '6',
    order: '6',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '7',
    order: '7',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '8',
    order: '8',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '9',
    order: '9',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  },
  {
    id: '10',
    order: '10',
    title: 'lorem porem sorem',
    date: '05.04.2022'
  }
]

export const Shares = () => {
  return (
    <div>
      <table className={s.table}>
        <TableHead rows={['order', 'title', 'date']}/>
        <TableBody items={items}/>
      </table>
    </div>
  );
};

