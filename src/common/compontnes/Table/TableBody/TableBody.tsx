import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableBody/tableBody.module.scss'
import {DomainSharesType} from "features/Shares/sharesSlice";

type PropsType = {
  items: DomainSharesType[]
}

export const TableBody:FC<PropsType> = ({items}) => {
  return (
    <tbody>
    {items.map((el) =>
      <tr key={el.order} className={s.cells}>
        <td>{el.order}</td>
        <td>{el.symbol}</td>
        <td>{el.open}</td>
        <td>{el.close}</td>
        <td>{el.high}</td>
        <td>{el.low}</td>
        <td>{el.volume}</td>
        <td>{el.date}</td>
      </tr>
    )}
    </tbody>
  );
};

