import React from 'react'
import './search-bar.scss'

const SearchBar = ({ keyword, ...rest }) => {
  return (
    <div>
      <div className="search my-3">
        <input type="text" className="searchTerm" placeholder={keyword} {...rest} />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
