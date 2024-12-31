import React, { useState } from 'react'
import Letter from './Letter'
const InputComponent = () => {
   const [word,setWord] = useState("");
   const [isLetterPage,setIsLetterPage] = useState(false);
   if(isLetterPage){
    return <Letter/> 
   }
  return (
    <section className="max-w-4xl p-6 bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Special New Year Surprise to lifeline wifey❤️❤️</h2>

    <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Enter our secret password 🤗🤗</label>
                <input id="username" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"  value={word} onChange={(e) => setWord(e.target.value)}/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={() => word === "lifeline" ? setIsLetterPage(true) : setIsLetterPage(false)}>Surprise</button>
        </div>
    </form>
</section>
  )
}

export default InputComponent
