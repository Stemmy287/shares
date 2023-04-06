import React, {FC} from 'react';
import s from 'common/compontnes/Table/TableBody/tableBody.module.scss'

type PropsType = {
  items: any[]
}

export const TableBody:FC<PropsType> = ({items}) => {
  return (
    <tbody>
    {items.map((el) =>
      <tr key={el.id} className={s.cells}>
        <td>{el.order}</td>
        <td>{el.title}</td>
        <td>{el.date}</td>
      </tr>
    )}
    </tbody>
  );
};

