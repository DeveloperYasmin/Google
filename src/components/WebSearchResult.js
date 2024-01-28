import Link from 'next/link'
import React from 'react'
import Parser  from 'html-react-parser'

const WebSearchResult = ({results}) => {
  return (
    <div className=' w-full mt-40 lg:mt-28 overflow-y-hidden px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-60'>
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
    </div>
  )
}

export default WebSearchResult