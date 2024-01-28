import Link from 'next/link'
import React from 'react'
import Parser  from 'html-react-parser'
import PaginationButtons from './PaginationButtons'

const WebSearchResult = ({results}) => {
  return (
    <div className='flex-1 mx-auto mt-52 lg:mt-40 px-3 sm:pl-[5%] md:pl-[14%] lg:pl-60'>
        <p className='text-gray-600 text-sm mb-5 mt-3'>
            About {results.searchInformation?.formattedTotalResults}results({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result)=>(
            <div className='mb-8 max-w-xl' key={result.link}>
                <div className='group flex flex-col'>
                    <Link className='text-sm truncate' href={result.link}>{result.formatterUrl}</Link>
                    <Link className='group-hover: underline decoration-blue-800 text-xl truncate font-medium text-blue-800' href={result.link}>{result.title}</Link>
                    
                </div>
                <p className='text-gray-600 '>{Parser(result.htmlSnippet)}</p>
                </div>
        ))}
        <PaginationButtons/>
    </div>
  )
}

export default WebSearchResult