import React from 'react';
import { IsAuthContext } from '../context/isAuth';

export const useAuth = () => React.useContext(IsAuthContext);
