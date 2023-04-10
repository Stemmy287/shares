import React, {FC, memo} from 'react';
import s from 'common/compontnes/Table/TableHead/tableHead.module.scss'

type PropsType = {
  rows: string[]
}

export const TableHead:FC<PropsType> = memo(({rows}) => {
  return (
    <thead>
    <tr>
      {rows.map((el, i) => <th className={s.row} key={i}>{el}</th>)}
    </tr>
    </thead>
  );
});

