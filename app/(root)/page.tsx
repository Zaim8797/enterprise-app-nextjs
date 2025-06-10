import SearchForm from "../../components/SearchForm";

export default async function Page( {searchParams}: { 
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  
    return (
    <>
      <section className="flex justify-center items-center flex-col bg-pink-500 mx-1 py-8 border-4 border-black rounded-lg shadow-md">
        <div className="flex justify-center items-center flex-col">
          <h1 className="heading">HOME</h1>
          <p className="sub-heading">This is the root page of your application.</p>
        </div>

        <SearchForm query={query}/>
      </section>

    </>
  );
}