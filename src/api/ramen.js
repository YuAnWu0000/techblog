import { request } from './base';

export const getRamenRate = () => {
  return request({
    method: "get",
    url: "/ramen",
    params: {},
  });
}
