
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      title: "How AI is Transforming Aviation Parts Procurement",
      excerpt: "Discover how artificial intelligence is revolutionizing the way aircraft parts are sourced and verified.",
      date: "Feb 15, 2023",
      category: "Technology"
    },
    {
      title: "Blockchain for Aviation Supply Chain Security",
      excerpt: "Learn how blockchain technology ensures authenticity and traceability in aviation parts procurement.",
      date: "Jan 28, 2023",
      category: "Security"
    },
    {
      title: "The Future of Automated Invoicing in Aviation",
      excerpt: "Explore how automation is streamlining financial processes for aviation businesses globally.",
      date: "Jan 12, 2023",
      category: "Finance"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        
        <div className="py-16">
          <h1 className="text-5xl font-bold mb-12">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-100"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-deckflare-yellow-dark font-medium">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <a href="#" className="text-sm font-medium text-black hover:text-deckflare-yellow-dark">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
