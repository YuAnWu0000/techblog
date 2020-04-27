import { request } from './base';

export const getAllRamenRates = () => {
  return request({
    method: 'get',
    url: '/ramenRate/all',
    params: {},
  });
}

export const getRamenRateById = (id) => {
  return request({
    method: 'get',
    url: `/ramenRate/${id}`,
    params: {},
  });
}

