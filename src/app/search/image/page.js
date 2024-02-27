import React from 'react';
import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';

const ImageSearchPage = ({ searchParams }) => {
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = searchParams.get("start") || 1;

  // Simulate API fetch delay
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data.items || [];
  };

  const renderContent = () => {
    try {
      const results = fetchData();
      if (!results.length) {
        return (
          <div className='flex flex-col mt-60 justify-center items-center pt-10'>
            <h1 className='text-3xl mb-4'>No results found :(</h1>
            <p className='text-lg'>
              Try searching for something else or go back to the{' '}
              <Link href="/" className="text-blue-500">
                homepage
              </Link>
            </p>
          </div>
        );
      }
      return <ImageSearchResults results={results} />;
    } catch (error) {
      console.error("Error fetching data:", error);
      return (
        <div className='flex flex-col mt-60 justify-center items-center pt-10'>
          <h1 className='text-3xl mb-4'>Error fetching data</h1>
          <p className='text-lg'>
            Please try again later or go back to the{' '}
            <Link href="/" className="text-blue-500">
              homepage
            </Link>
          </p>
        </div>
      );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default ImageSearchPage;
