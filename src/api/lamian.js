import { request } from './base';

export const getLamianRate = () => {
  return request({
    method: "get",
    url: "/lamian",
    params: {},
  });
}
