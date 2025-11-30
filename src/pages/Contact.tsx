import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Your email" className="border p-2 rounded w-full" />
        <textarea placeholder="Your message" className="border p-2 rounded w-full" rows={4} />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105">Send</button>
      </form>
    </div>
  );
};

export default Contact;