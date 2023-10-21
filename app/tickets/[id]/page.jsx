import { notFound } from "next/navigation"

export const dynamicParams = true

// the generateStaticParams function lets next know the number of dynamic routes to pre-render
export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/ticket')
    const data = await res.json()

    return data.map(ticket => ({
        id: ticket.id
    }))
}

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/ticket/' + id, {
        node: {
            revalidate: 60      // refetch after 60 seconds
        }
    })
    const data = await res.json()

    if(!res.ok) {
        notFound()   // renders the not-found page if it's unable to make a fetch
    }
    
    return data
}

async function TicketDetail({ params }) {
    const ticket = await getTicket(params.id)

    return(
        <main>
            <nav>
                <div>
                    <h2>Ticket Detail</h2>
                </div>
            </nav>

            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
        </main>
    )
}

export default TicketDetail