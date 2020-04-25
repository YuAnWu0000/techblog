import { request } from './base';

export const getRamenRate = () => {
  return request({
    method: 'get',
    url: '/ramen/all',
    params: {},
  });
}

export const getRamenById = (id) => {
  return request({
    method: 'get',
    url: `/ramen/${id}`,
    params: {},
  });
}

