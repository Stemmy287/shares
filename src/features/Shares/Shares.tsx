import React, {useEffect} from 'react';
import s from './shares.module.scss'
import {TableBody} from "common/compontnes/Table/TableBody/TableBody";
import {TableHead} from "common/compontnes/Table/TableHead/TableHead";
import {useAppSelector} from "hooks/useAppSelector";
import {useAppDispatch} from "hooks/useAppDispatch";
import {fetchSharesTC, paginator, setCurrentPage, setPageSize} from "features/Shares/sharesSlice";
import {
  companySelector,
  currentPageSelector,
  pageSizeSelector,
  sharesPaginatedSelector,
  totalItemsCountSelector
} from "features/Shares/sharesSelectors";
import {Pagination} from "common/compontnes/Pagintaton/Pagination";
import {readableCompany} from "common/utils/readableCompany";

export const Shares = () => {

  const sharesPaginated = useAppSelector(sharesPaginatedSelector)

  const company = useAppSelector(companySelector)

  const currentPage = useAppSelector(currentPageSelector)
  const pageSize = useAppSelector(pageSizeSelector)
  const totalItemsCount = useAppSelector(totalItemsCountSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchSharesTC())
  }, [dispatch, company])

  useEffect(() => {
    dispatch(paginator())
  }, [dispatch, currentPage, pageSize])

  const onCurrentPageChange = (currentPage: number) => {
    dispatch(setCurrentPage({currentPage}))
  }

  const onPageSizeChange = (pageSize: string) => {
    dispatch(setPageSize({pageSize: +pageSize}))
  }

  const tableHeadRows = ['Order', 'Open', 'Close', 'High', 'Low', 'Volume', 'Date']

  return (
    <div className={s.shares_container}>
      <h1 className={s.title}>{readableCompany(company)}</h1>
        <table className={s.table}>
          <TableHead rows={tableHeadRows}/>
          <TableBody items={sharesPaginated}/>
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

