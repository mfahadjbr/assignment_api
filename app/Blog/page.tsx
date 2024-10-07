import PostCards from '@/app/components/PostCards';
import Link from 'next/link';

// Define the Post interface based on the API response structure
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Function to fetch all posts
const getAllPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

// Component to display posts
export default async function Page() {
  const postData: Post[] = await getAllPosts(); // Ensure postData is typed as an array of Post

  return (
    <div className="flex flex-wrap justify-center">
      {postData.map((item: Post) => (
        <Link key={item.id} href={`/Blog/${item.id}`}>
          {/* Added key prop */}
          <PostCards postData={item} />
        </Link>
      ))}
    </div>
  );
}
