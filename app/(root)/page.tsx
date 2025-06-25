import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Page( {searchParams}: { 
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUP_QUERY);
  const params = { search: query || null };
  
    return (
    <>
      <section className="pink_container">
        <div className="flex justify-center items-center flex-col">
          <h1 className="heading">HOME</h1>
          <p className="sub-heading">This is the root page of your application.</p>
        </div>

        <SearchForm query={query}/>
      </section>
      <section className="blue_container">
        <p className="font-bold text-lg text-white">
          {query ? `You searched for: "${query}"` : "All startups ..."}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number ) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ) : (
            <p className="text-white">No posts found.</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
