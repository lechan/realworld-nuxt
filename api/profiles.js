import { request } from '@/plugins/request'

// 关注用户
export const follow = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取关用户
export const unfollow = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}