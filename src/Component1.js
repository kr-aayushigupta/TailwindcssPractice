import React from 'react'

function Component1() {
  return (
    <div className="h-screen p-4 Parent">
        <div className="inline-block p-4 text-black bg-white border rounded-lg shadow-md">
            <img className="blur-sm hover:blur-none saturate-150" src="https://plus.unsplash.com/premium_photo-1729937839806-3f4d132c854c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxSRlhMSHFKOUtUNHx8ZW58MHx8fHx8" >
            
            </img>
            <h1 className="text-2xl">Hello</h1>

            <p className="mb-4">This is my div</p>
            <button className="px-3 py-2 text-white rounded-lg shadow-md cursor-pointer bg-cyan-500 shadow-cyan-500/50">Say Hii!!</button>

        </div>


    </div>
   


    

    
  )
}

export default Component1