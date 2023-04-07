import React, {useEffect} from 'react';
import s from './shares.module.scss'
import {TableBody} from "common/compontnes/Table/TableBody/TableBody";
import {TableHead} from "common/compontnes/Table/TableHead/TableHead";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSharesTC, paginator, setCurrentPage, setPageSize} from "features/Shares/sharesSlice";
import {
  currentPageSelector,
  pageSizeSelector,
  sharesSelector,
  totalItemsCountSelector
} from "features/Shares/sharesSelectors";
import {Pagination} from "common/compontnes/Pagintaton/Pagination";

export const Shares = () => {

  const shares = useAppSelector(sharesSelector)

  const currentPage = useAppSelector(currentPageSelector)
  const pageSize = useAppSelector(pageSizeSelector)
  const totalItemsCount = useAppSelector(totalItemsCountSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    debugger
    dispatch(fetchSharesTC())
  }, [dispatch])

  useEffect(() => {
    dispatch(paginator())
  }, [dispatch, currentPage, pageSize])

  const onCurrentPageChange = (currentPage: number) => {
    dispatch(setCurrentPage({currentPage}))
  }

  const onPageSizeChange = (pageSize: string) => {
    dispatch(setPageSize({pageSize: +pageSize}))
  }

  const tableHeadRows = ['Order', 'Company', 'Open', 'Close', 'High', 'Low', 'Volume', 'Date']

  return (
    <div>
      <table className={s.table}>
        <TableHead rows={tableHeadRows}/>
        <TableBody items={shares}/>
      </table>
      <div className={s.pagination_container}>
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalItemsCount={totalItemsCount}
          siblingCount={1}
          onPageChange={onCurrentPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      </div>
    </div>
  );
};

