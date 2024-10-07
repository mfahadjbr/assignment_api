import Comments from "@/app/components/comments";

const getspecificData = async (params: any) => {
  const responses = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
  if (responses.ok) {
    const specificData = await responses.json();
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`);
    const commentsData = await responseComments.json();
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

export default async function blogId({ params }: any) {
  const data: any = await getspecificData(params);

  return (
    <div>
      <div className="w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
        {/* Post Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.PostspecificData?.title}</h2>

        {/* Post Body */}
        <p className="text-gray-700 text-base mb-6">{data.PostspecificData?.body}</p>

        {/* Comments Section */}
        {data.commentsData &&
          data.commentsData.map((com: any) => {
            return <Comments key={com.id} commentData={com} />;
          })}
      </div>
    </div>
  );
}
