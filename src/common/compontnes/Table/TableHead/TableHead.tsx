import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableHead/tableHead.module.scss'

type PropsType = {
  rows: string[]
}

export const TableHead:FC<PropsType> = ({rows}) => {
  return (
    <thead>
    <tr>
      {rows.map((el, i) => <th className={s.row} key={i}>{el}</th>)}
    </tr>
    </thead>
  );
};

