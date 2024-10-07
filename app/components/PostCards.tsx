import React from 'react'
import Image from 'next/image'
export default function PostCards(props:any) {
    const { postData } = props
    
    return (
        <div>
            <div className="flex ">
                <div className="max-w-sm rounded-2xl shadow-2xl bg-white m-4">
                    {/* Post Image */}
                    <Image
                        className="w-full rounded-t-2xl"
                        src="https://via.placeholder.com/400x200"
                        alt="Post Image"
                        width={200}
                        height={200}
                    />

                    {/* Post Content */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 ">{postData.title}</div>
                        <p className="text-gray-700 text-base">
                            {postData.body}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    )
}