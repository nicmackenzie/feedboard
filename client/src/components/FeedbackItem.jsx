import React from 'react'

const FeedbackItem = () => {
  return (
    <div className="my-8 flex gap-8 items-center">
        <div>
            <button className="bg-grey-600 shadow-sm shadow-grey-200 border rounded-md
            py-1 px-2 items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                80
            </button>
        </div>
        <div>
            <h2 className="font-semibold">Add tags for solutions</h2>
            <p className="text-grey-600 text-sm">
                Easier to search for solutions based on a specific stack
            </p>
        </div>
    </div>
  )
}

export default FeedbackItem