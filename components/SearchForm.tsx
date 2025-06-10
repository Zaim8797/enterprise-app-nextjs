import React from 'react'
import Form from "next/form"
import SearchFormReset from './SearchFormReset'

const SearchForm = ({query} :
    { query?: string }
) => {

  return (
    <Form action="/" className='search-form'>
        <input name='query' defaultValue="" className="search-input" placeholder='Search' />

        <div className='flex gap-2'>
            {query && <SearchFormReset />}

            <button className='search-button cursor-pointer'>🔍</button>
        </div>
    </Form>
)
}

export default SearchForm