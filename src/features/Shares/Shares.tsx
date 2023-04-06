import React, {useEffect} from 'react';
import s from './shares.module.scss'
import {TableBody} from "common/compontnes/Table/TableBody/TableBody";
import {TableHead} from "common/compontnes/Table/TableHead/TableHead";
import {useAppSelector} from "hooks/useAppSelector";
import {sharesSelector} from "features/Shares/sharesSelectors";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSharesTC} from "features/Shares/sharesSlice";

export const Shares = () => {

  const tableHeadRows = ['order', 'symbol', 'sector' , 'securityType', 'bid price', 'bid size', 'asc price', 'asc size', 'date', 'last sale price', 'last sale size', 'last sale time', 'volume']

  const shares = useAppSelector(sharesSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSharesTC())
  }, [dispatch])

  return (
    <div>
      <table className={s.table}>
        <TableHead rows={tableHeadRows}/>
        <TableBody items={shares}/>
      </table>
    </div>
  );
};

