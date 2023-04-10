import React, {memo} from 'react';
import s from './header.module.scss'
import {ReactComponent as TeslaIcon} from "common/icons/tesla-svgrepo-com.svg";
import {ReactComponent as AppleIcon} from "common/icons/apple-173-svgrepo-com.svg";
import {ReactComponent as MicrosoftIcon} from "common/icons/microsoft-svgrepo-com.svg";
import {ReactComponent as AmazonIcon} from "common/icons/amazon-160-svgrepo-com.svg";
import {useAppSelector} from "hooks/useAppSelector";
import {companySelector} from "features/Stock/stockSelectors";
import {useAppDispatch} from "hooks/useAppDispatch";
import {CompanyType, setCompany} from "features/Stock/stockSlice";

export const Header = memo(() => {

  const company = useAppSelector(companySelector)

  const dispatch = useAppDispatch()

  const onCompanyChange = (company: CompanyType) => {
    dispatch(setCompany({company}))
  }

  return (
    <header className={s.header_container}>
      <TeslaIcon className={company === 'tsla' ? `${s.icons} ${s.icon_active}` : s.icons} onClick={() => {onCompanyChange('tsla')}}/>
      <AppleIcon className={company === 'aapl' ? `${s.icons} ${s.icon_active}` : s.icons} onClick={() => {onCompanyChange('aapl')}}/>
      <MicrosoftIcon className={company === 'msft' ? `${s.icons} ${s.icon_active}` : s.icons} onClick={() => {onCompanyChange('msft')}}/>
      <AmazonIcon className={company === 'amzn' ? `${s.icons} ${s.icon_active}` : s.icons} onClick={() => {onCompanyChange('amzn')}}/>
    </header>
  );
});

