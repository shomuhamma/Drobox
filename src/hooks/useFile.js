import React from 'react';
import { FilesDbContext } from '../context/filesDb';

export const useFile = () => React.useContext(FilesDbContext);