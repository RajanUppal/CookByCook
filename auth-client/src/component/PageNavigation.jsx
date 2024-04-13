import React from 'react'
import { Link } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className="text-4xl flex items-center gap-3 font-semibold py-3 mb-3 text-[#142850]">
        <Link to="/">Home / </Link>
      <span className="text-4xl text-[#0c7b93]">
            {title}
        </span>
    </div>
  )
}

export default PageNavigation