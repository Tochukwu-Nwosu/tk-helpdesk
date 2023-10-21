import Link from "next/link"

function NotFound() {

    return(
        <main className="text-center">
            <h2 className="text-3xl">Page Not found</h2>
            <p>We could not find the page you were looking for.</p>
            <p>Go back to the <Link href='/'>dashboard</Link></p>
        </main>
    )
}

export default NotFound