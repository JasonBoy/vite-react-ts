import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ConfigProvider } from 'antd';
import store from '@/store';
import { Provider } from 'react-redux';
import zhCN from 'antd/locale/zh_CN';
// for date-picker i18n
import 'dayjs/locale/zh-cn';

console.log('import.meta.env: ', import.meta.env);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        locale={zhCN}
        theme={{
          cssVar: true,
          // hashed: false,
          token: {
            // 主题色，影响范围大
            // colorPrimary: "#005288",
          },
          components: {
            Table: {
              cellPaddingBlock: 12,
              cellPaddingInline: 12,
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);
