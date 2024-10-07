import Comments from "@/app/components/comments";

// Define the types for Post and Comment
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Params {
  blogId: string;
}

const getspecificData = async (params: Params): Promise<{ PostspecificData: Post | null; commentsData: Comment[] }> => {
  const responses = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
  if (responses.ok) {
    const specificData: Post = await responses.json();
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`);
    const commentsData: Comment[] = await responseComments.json();
    return {
      PostspecificData: specificData,
      commentsData: commentsData,
    };
  }
  return {
    PostspecificData: null,
    commentsData: [],
  };
};

interface BlogIdProps {
  params: Params;
}

export default async function blogId({ params }: BlogIdProps) {
  const data = await getspecificData(params);

  return (
    <div>
      <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
        {/* Post Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.PostspecificData?.title}</h2>

        {/* Post Body */}
        <p className="text-gray-700 text-base mb-6">{data.PostspecificData?.body}</p>

        {/* Comments Section */}
        {data.commentsData &&
          data.commentsData.map((com: Comment) => {
            return <Comments key={com.id} commentData={com} />;
          })}
      </div>
    </div>
  );
}
