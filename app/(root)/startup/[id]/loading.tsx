export default function Loading() {
  return (
    <section className="pink_container !min-h-230px flex items-center justify-center">
      <span className="animate-spin rounded-full border-4 border-primary border-t-transparent w-10 h-10"></span>
      <span className="ml-4 text-primary text-lg">Loading...</span>
    </section>
  );
}