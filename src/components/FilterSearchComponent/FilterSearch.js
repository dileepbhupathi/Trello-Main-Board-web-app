import Search from 'antd/es/transfer/search'
import React from 'react'

export const FilterSearch = () => {

  const onSearch = (value) => console.log(value);

  return (
    <Search
            placeholder="Enter a keyword..."
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
  )
}
