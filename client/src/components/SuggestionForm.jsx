import React from 'react'
import { useState } from "react";
import Button from "./Button";
import axios from "axios";

const SuggestionForm = ({setShow}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory,] = useState();

  function handleAddSuggestionButtonClick() {
    axios.post('/new-suggestion', {title, category, description})
    .then(res => {console.log(res)});
  }
  return (
    <div className="fixed inset-0 bg-white md:bg-black md:bg-opacity-70 flex 
    md:items-center">
        <button onClick={() => setShow(false)} className="hidden md:block fixed top-2 right-2 text-white">
          <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full">
            <div className="bg-white md:max-w-2xl md:mx-auto md:rounded-lg 
            overflow-hidden">
              <div className="relative">
                <button onClick={() => setShow(false)} className="absolute top-4 left-8 md:hidden text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                </button>
                <h2 className="py-4 text-center border-b text-blue-500">
                  Make a suggestion
                </h2>
              </div>
              <form className="p-8">
                <label className="block mt-4 mb-1 text-slate-700">Title</label>
                <input 
                  className="w-full border p-2 rounded-md" 
                  type="test" 
                  placeholder="A short, descriptive title"
                  name="title"
                  value={title} 
                  onChange={e => setTitle(e.target.value)}
                />
                <label className="block mt-4 mb-1 text-slate-700">Category</label>
                <select
                    className="w-full text-gray-400 border p-2 rounded-md"  
                    name="category"
                    onChange={e => setCategory(e.target.value)}
                  >
                  <option value={category} className="w-full text-gray-500 p-2 rounded-md" >
                    UI
                  </option>
                  <option value={category} className="w-full text-gray-500 p-2 rounded-md" >
                    UX
                  </option>
                  <option value={category} className="w-full text-gray-500 p-2 rounded-md" >
                    Bug
                  </option>
                  <option value={category} className="w-full text-gray-500 p-2 rounded-md" >
                    Feature
                  </option>
                  <option value={category} className="w-full text-gray-500 p-2 rounded-md" >
                    Enhancement
                  </option>
                </select>
                <label className="block mt-4 mb-1 text-slate-700">Description</label>
                <textarea 
                  className="w-full border p-2 rounded-md" 
                  placeholder="Please include any description"
                  name="description"
                  value={description} 
                  onChange={e => setDescription(e.target.value)}
                />
                <div className="flex justify-end mt-2">
                  <Button onClick={handleAddSuggestionButtonClick}>Add Suggestion</Button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default SuggestionForm