"use client"

import { useState } from "react"

export default function CreateForm() {
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ priority, setPriority ] = useState('low')
  const [ isLoading, setIsLoading ] = useState(false)

  return (
    <main>
      <form className="w-1/2">
        <label>
            Title:
            <input 
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
             />
        </label>
        <label>
            Body:
            <textarea 
                type="text"
                required
                onChange={(e) => setBody(e.target.value)}
                value={body}
             />
        </label>
        <label>
            Priority:
            <select
                required
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
            >
                <option value="low">low priority</option>
                <option value="medium">medium priority</option>
                <option value="high">high priority</option>
            </select>
        </label>
        <button className="btn-primary mt-8 mb-4">
            {isLoading && <p>Adding...</p>}
            {!isLoading && <p>Add ticket</p>}
        </button>
      </form>
    </main>
  )
}
