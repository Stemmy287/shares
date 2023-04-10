import React from 'react';
import s from './errorBar.module.scss'
import {useAppSelector} from "hooks/useAppSelector";
import {errorSelector} from "app/appSelectors";
import {useAppDispatch} from "hooks/useAppDispatch";
import {setError} from "app/appSlice";
import {ReactComponent as WarningIcon} from "common/icons/warning-circle-svgrepo-com.svg";
import {ReactComponent as CloseIcon} from "common/icons/close.svg";

export const ErrorBar = () => {

  const error = useAppSelector(errorSelector)

  const dispatch = useAppDispatch()

  const onClose = () => {
    dispatch(setError({error: null}))
  }

  return (
    <div className={s.error}>
      <WarningIcon/>
      <span>{error}</span>
      <div className={s.close_error_bar} onClick={onClose}>
        <CloseIcon/>
      </div>
    </div>
  );
};

