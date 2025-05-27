// src/utils/request.js
import { createAlova } from 'alova';
import ReactHook from 'alova/react';

const alovaInstance = createAlova({
  baseURL: 'https://jsonplaceholder.typicode.com', // 示例
  statesHook: ReactHook,
  timeout: 5000,
});

export default alovaInstance;
