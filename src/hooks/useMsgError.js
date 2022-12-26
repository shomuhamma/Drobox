import React from 'react';
import { ErrorMsgContext } from '../context/errorMsg';

export const useMsgError = () => React.useContext(ErrorMsgContext);