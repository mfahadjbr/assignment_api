import React from 'react'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center h-[88vh] bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to API Assignment</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is a simple home page built with Next.js and Tailwind CSS. Explore our website to learn more about our services and offerings.
        </p>
      </main>
    </div>
  )
}
