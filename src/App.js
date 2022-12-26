import React from 'react';
import GlobalStyle from './GlobalStyle';
import Routes from './routes';
import { IsAuthProv } from './context/isAuth';
import { ErrorMsgProv } from './context/errorMsg';

const App = () => (
  <>
    <GlobalStyle />
      <IsAuthProv>
        <ErrorMsgProv>
          <Routes />
        </ErrorMsgProv>
      </IsAuthProv>
  </>
);

export default App;
