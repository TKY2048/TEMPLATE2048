import axios from 'axios';
import config from './config';

const client = (() =>
  axios.create({
    baseURL: config.api,
    timeout: 30000,
  }))();

export default client;
