import { auth } from "@/auth";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Page( {searchParams}: { 
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "John Doe" },
      _id: "1",
      description: "This is a sample post description.",
      image: "https://sm.mashable.com/t/mashable_me/photo/default/1_npc3.1248.jpg",
      category: "Technology",
      title: "The Interstellar",
    }
  ]
  
    return (
    <>
      <section className="flex justify-center items-center flex-col bg-pink-500 m-1 py-8 border-4 border-black rounded-lg shadow-md">
        <div className="flex justify-center items-center flex-col">
          <h1 className="heading">HOME</h1>
          <p className="sub-heading">This is the root page of your application.</p>
        </div>

        <SearchForm query={query}/>
      </section>
      <section className="flex flex-col bg-blue-500 m-1 px-4 py-8 border-4 border-black rounded-lg shadow-md">
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

    </>
  );
}