

import React, { useEffect } from 'react'

interface SearchProps {
  searchText: string,
  styleClass: string,
  setSearchText: (text:string)=> void,
  placeholderText?: string
}
function SearchBar({searchText, styleClass, setSearchText, placeholderText}: SearchProps) {



const updateSearchInput = (value:string) => {
    setSearchText(value)
}

  return (
    <div className={"inline-block " + styleClass}>
    <div className="input-group  relative flex flex-wrap items-stretch w-full ">
      <input type="search" value={searchText} placeholder={placeholderText || "Search"} onChange={(e) => updateSearchInput(e.target.value)} className="input input-sm input-bordered  w-full max-w-xs" />
  </div>
</div>
  )
}

export default SearchBar
