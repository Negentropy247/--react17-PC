import { getChannelList } from '@/store/actions/article'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * 获取频道列表
 * @returns 频道列表
 */
export function useChannels() {
  const channels = useSelector(state => state.article.channels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelList())
  }, [])
  return channels
}
