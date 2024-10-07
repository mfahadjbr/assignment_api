import PostCards from '@/app/components/PostCards';
import Link from 'next/link';

// Function to fetch all posts
const getAllPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

// Component to display posts
export default async function Page() {
  const postData = await getAllPosts();

  return (
    <div className="flex flex-wrap justify-center">
      {postData.map((item: any) => (
        <Link key={item.id} href={`/Blog/${item.id}`}>
          {/* Added key prop */}
          <PostCards postData={item} />
        </Link>
      ))}
    </div>
  );
}
