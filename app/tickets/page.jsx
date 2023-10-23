import { Suspense } from "react";
import Link from "next/link";
import Loading from "../loading";
import TicketList from "./TicketsList";

export default function Tickets() {

    return(
        <main>
            <nav className="justify-between">
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
                <Link href={'/tickets/create'}>
                    <button className="btn-primary">Create ticket</button>
                </Link>
            </nav>
            
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}