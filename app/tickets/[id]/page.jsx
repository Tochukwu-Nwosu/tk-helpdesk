

async function getTicket(id) {
    const res = await fetch('http://localhost:4000/ticket/' + id, {
        node: {
            revalidate: 60      // refetch after 60 seconds
        }
    })
    const data = await res.json()
    
    return data
}

async function TicketDetail({ params }) {
    const ticket = await getTicket(params.id)

    return(
        <main>
            <nav>
                <div>
                    <h2>Ticket</h2>
                </div>
            </nav>

            <div className="card">
                <h3>{ticket.title}</h3>
                <small>{ticket.email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
        </main>
    )
}

export default TicketDetail