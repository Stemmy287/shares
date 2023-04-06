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
      <tr className={s.cells}>
        <td>{el.order}</td>
        <td>{el.symbol}</td>
        <td>{el.securityType}</td>
        <td>{el.bidPrice}</td>
        <td>{el.bidSize}</td>
        <td>{el.askPrice}</td>
        <td>{el.askSize}</td>
        <td>{el.lastUpdated}</td>
        <td>{el.lastSalePrice}</td>
        <td>{el.lastSaleSize}</td>
        <td>{el.lastSaleTime}</td>
        <td>{el.volume}</td>
      </tr>
    )}
    </tbody>
  );
};

