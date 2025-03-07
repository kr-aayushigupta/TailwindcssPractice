import React from 'react';
import './App.css';
import Component1 from './Component1';

function App() {
  return (
    <div>
      <h1 className='text-xl bg-pink-700 text-vuejs'>Hello World! with text size , background color and text color with custom color</h1>
      <h1 className='border-4 border-sky-300'>Hello World!</h1>

      <p className='text-sm lg:text-3xl'>Hello I am Learning Tailwind CSS</p>
      <p className='border-2 border-red-400 m-5'>Hello I am Learning Tailwind CSS</p>

      <p className='text-xs text-red-950 italic'>This is xtra small text</p>
      <p className='text-sm text-red-800'>This is small text</p>
      <p className='text-md text-red-700 overline decoration-8'>This is medium text</p>
      <p className='text-lg text-red-600 italic uppercase'>This is large text</p>
      <p className='text-xl text-red-600 underline decoration-sky-500 decoration-dotted'>This is xtra large text</p>
      <p className='text-2xl text-red-500 line-through decoration-green-600 decoration-double capitalize'>This is 2 xtra large text</p>
      <p className='text-3xl text-red-400 underline decoration-sky-500 decoration-wavy lowercase truncate'>This is 3 xtra large text</p>

      <div className="container mx-auto p-6">


<h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Tailwind CSS Basic Classes</h1>


<div className="flex justify-center space-x-4 mb-6">
    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Primary Button</button>
    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Success Button</button>
    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Danger Button</button>
</div>


<div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card Title</h2>
    <p className="text-gray-600 mb-4">This is an example of a simple card with some shadow, padding, and rounded corners using Tailwind CSS classes.</p>
    <a href="#" className="text-blue-500 hover:text-blue-600">Learn more</a>
</div>


<div className="flex justify-between items-center space-x-4 mb-6">
    <div className="w-1/3 bg-purple-500 text-white p-4 rounded-md">Flex Item 1</div>
    <div className="w-1/3 bg-orange-500 text-white p-4 rounded-md">Flex Item 2</div>
    <div className="w-1/3 bg-teal-500 text-white p-4 rounded-md">Flex Item 3</div>
</div>


<div className="grid grid-cols-3 gap-4 mb-6">
    <div className="bg-gray-300 p-4 rounded-md">Grid Item 1</div>
    <div className="bg-gray-400 p-4 rounded-md">Grid Item 2</div>
    <div className="bg-gray-500 p-4 rounded-md">Grid Item 3</div>
    <div className="bg-gray-600 p-4 rounded-md">Grid Item 4</div>
    <div className="bg-gray-700 p-4 rounded-md">Grid Item 5</div>
    <div className="bg-gray-800 p-4 rounded-md">Grid Item 6</div>
</div>


<div className="mb-6">
    <h2 className="text-3xl font-semibold mb-2">Typography Examples</h2>
    <p className="text-base mb-2">This is a simple paragraph to demonstrate the text-base className. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p className="text-lg mb-2">This is a larger paragraph using the text-lg className.</p>
    <p className="text-xl mb-2">This is an extra-large paragraph using the text-xl className.</p>
</div>


<div className="space-y-4 mb-6">
    <label className="block text-gray-700" for="name">Name</label>
    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name"></input>

    <label className="block text-gray-700" for="email">Email</label>
    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email"></input>

    <label className="block text-gray-700" for="message">Message</label>
    <textarea id="message" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4" placeholder="Enter your message"></textarea>
</div>


<div className="bg-yellow-200 p-4 rounded-md mb-6">
    <p className="text-yellow-800">This is an alert box styled with Tailwind CSS classes.</p>
</div>


<footer className="bg-gray-800 text-white text-center p-4">
    <p>&copy; 2025 Tailwind CSS Demo</p>
</footer>

</div>

      <Component1/>

      {/* <button className="  cursor-pointer bg-cyan-200">Button 1</button> */}
      
    </div>
  );
}

export default App;
