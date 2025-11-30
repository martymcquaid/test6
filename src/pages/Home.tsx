import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-gray-900">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">Pluimmers</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero bg-gradient-to-r from-blue-500 to-green-500 text-white text-center py-20">
        <h2 className="text-5xl font-bold">Welcome to Pluimmers</h2>
        <p className="mt-4">Your journey to excellence starts here.</p>
      </section>

      <section className="about p-10">
        <h3 className="text-2xl font-semibold">About Us</h3>
        <p className="mt-2">Pluimmers is committed to providing top-notch services to help you thrive. Our team is dedicated to excellence.</p>
      </section>

      <section className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <h3 className="text-2xl font-semibold text-center col-span-full">What We Do</h3>
        <div className="card rounded shadow-lg p-4 bg-white">
          <h4 className="font-semibold">Service One</h4>
          <p>Expertise in area one.</p>
        </div>
        <div className="card rounded shadow-lg p-4 bg-white">
          <h4 className="font-semibold">Service Two</h4>
          <p>Expertise in area two.</p>
        </div>
        <div className="card rounded shadow-lg p-4 bg-white">
          <h4 className="font-semibold">Service Three</h4>
          <p>Expertise in area three.</p>
        </div>
      </section>

      <section className="gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <h3 className="text-2xl font-semibold text-center col-span-full">Our Work</h3>
        {/* Add images or cards here */}
      </section>

      <footer className="contact p-10 bg-gray-100">
        <h3 className="text-2xl font-semibold">Contact Us</h3>
        <form className="space-y-4">
          <input type="email" placeholder="Your email" className="border p-2 rounded w-full" />
          <textarea placeholder="Your message" className="border p-2 rounded w-full" rows={4} />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded transition-transform transform hover:scale-105">Send</button>
        </form>
      </footer>
    </div>
  );
};

export default Home;