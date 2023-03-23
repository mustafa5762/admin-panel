import React, { useState } from 'react'

function Tags({tags,settags}) {

    const [tag, settag] = useState(null)

    const onAdd = () => {
        settags([...tags, tag])
        settag('')
    }

  return (
    <div>
        <div className='relative'>
            <label for="tags" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
            <input onChange={(e) => settag(e.target.value)} value={tag} type="text" id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add tag" required/>
            <div className="absolute top-0 right-2 h-full mt-9">
                <button onClick={onAdd} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
            </div>
        </div>
        <div className="mt-6 w-full bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 p-3 rounded-md flex flex-wrap">
            {tags.map(tag => 
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-0.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{tag}</button>    
            )}
        </div>
    </div>
  )
}

export default Tags