import React from 'react'
import Image from 'next/image'
export default function Comments(props: any) {
    const { commentData } = props
    return (
        <div>
            <div className=" bg-gray-100 p-8">
                <div className="max-full mx-auto bg-white shadow-md rounded-lg my-4 p-6">
                    {/* Commenter Information */}
                    <div className="flex items-center mb-4">
                        <div className="mr-4">
                            <Image
                            className="w-10 h-10 rounded-full"
                            src={`https://ui-avatars.com/api/?name=${commentData.name}&background=random`}
                            alt={commentData.name}
                            width={200}
                            height={200}
                            unoptimized={true}  // Disable Next.js image optimization for external URLs
                            />

                        </div>
                        <div>
                            <p className="text-lg font-semibold">{commentData.email}</p>

                        </div>
                    </div>

                    {/* Comment Body */}
                    <p className="text-gray-700 text-base">{commentData.body}</p>
                </div>
            </div>
        </div>
    )
}