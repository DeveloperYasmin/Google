import ImageSearchResults from '@/components/ImageSearchResults'
import Link from 'next/link'
import React, { Suspense } from 'react'

const ImageSearchPage = ({ searchParams }) => {
  // Extract search term and start index from searchParams
  const searchTerm = searchParams.get("searchTerm")
  const startIndex = searchParams.get("start") || "1"

  // If the search term is not provided, return an error message
  if (!searchTerm) {
    return (
      <div className='flex flex-col mt-60 justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No search term provided :(</h1>
        <p className='text-lg'>
          Please go back to <Link href="/" className="text-blue-500">homepage</Link> and provide a search term.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Render search results */}
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSearchResults searchTerm={searchTerm} startIndex={startIndex} />
      </Suspense>
    </>
  )
}

export default ImageSearchPage
