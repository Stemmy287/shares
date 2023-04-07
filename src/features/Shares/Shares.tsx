import React, {useEffect} from 'react';
import s from './shares.module.scss'
import {TableBody} from "common/compontnes/Table/TableBody/TableBody";
import {TableHead} from "common/compontnes/Table/TableHead/TableHead";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSharesTC} from "features/Shares/sharesSlice";
import {sharesSelector} from "features/Shares/sharesSelectors";

export const Shares = () => {

  const tableHeadRows = ['Order', 'Company', 'Open', 'Close', 'High', 'Low', 'Volume', 'Date']

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

