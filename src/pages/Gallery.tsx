import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {/* Add image cards here */}
      </div>
    </div>
  );
};

export default Gallery;