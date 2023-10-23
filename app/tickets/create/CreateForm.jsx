"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()
  const [ title, setTitle ] = useState('')
  const [ body, setBody ] = useState('')
  const [ priority, setPriority ] = useState('low')
  const [ isLoading, setIsLoading ] = useState(false)


  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    const ticket = {
        title, body, priority, email: "unknown@tk.dev"
    }

    // Posts the collected data
    await fetch('http://localhost:4000/ticket', {
        method: 'POST',
        body: JSON.stringify(ticket),
        headers: {
            'Content-type': 'application/json'
        }
    })

    // redirects to tickets page
    router.push('/tickets')  
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="w-1/2">
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
        <button className="btn-primary mt-8 mb-4" disabled={isLoading}>
            {isLoading && <p>Adding...</p>}
            {!isLoading && <p>Add ticket</p>}
        </button>
      </form>
    </main>
  )
}
