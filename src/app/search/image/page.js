import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';

const ImageSearchPage = () => {
  const router = useRouter();
  const { searchParams } = router.query;
  const startIndex = searchParams?.start || "1";

  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 7000));
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageDataFetcher fetchData={fetchData} />
    </Suspense>
  );
};

const ImageDataFetcher = ({ fetchData }) => {
  const data = fetchData();
  const results = data?.items;

  if (!results) {
    return (
      <div className='flex flex-col mt-60 justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>No results found:(</h1>
        <p className='text-lg'>Try searching for something else or go back to {" "}
          <Link href="/" className="text-blue-500">homepage</Link>
        </p>
      </div>
    );
  }

  return <ImageSearchResults results={results} />;
};

export default ImageSearchPage;
