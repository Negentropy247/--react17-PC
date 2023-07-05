import React from 'react'
import { getChannelList } from '@/store/actions/article'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from 'antd'

export default function Channel(props) {
  const channels = useSelector(state => state.article.channels)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getChannelList())
  }, [])
  return (
    <Select {...props} style={{ width: 120 }} allowClear placeholder="请选择频道">
      {channels.map(item => (
        <Select.Option value={item.id} key={item.id}>
          {item.name}
        </Select.Option>
      ))}
    </Select>
  )
}
