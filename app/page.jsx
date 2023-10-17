import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, debitis! Error laborum a odit neque modi, voluptate quasi harum rerum, vero dolorum fugit delectus molestiae dolorem laboriosam amet non, consectetur tempore obcaecati at? Totam reiciendis at et eius, iste eaque esse, ea nemo officia aperiam laborum a ab laboriosam soluta quis? Laboriosam voluptatibus, tempora hic autem ad deleniti repellat, sed quisquam magni accusamus nemo illo deserunt, aut nulla fugiat architecto soluta! Esse magnam sunt accusantium aliquam beatae tempora aut nulla fuga culpa quibusdam officia, atque doloribus exercitationem voluptatem facilis, repellat commodi ipsum similique recusandae? Id quo odit perspiciatis! Accusamus, vel.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h1>Company Updates</h1>

      <div className="card">
        <h3>New member of the web dev team....</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis pariatur veniam, sequi dicta, dolores eos modi, delectus non commodi perspiciatis ipsam asperiores tempore corrupti!</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem ullam ipsam beatae quidem, autem similique recusandae dolorem ab maiores necessitatibus dolores dolore corrupti consequatur, nam odit repudiandae. Repellendus, molestias. Porro minima nisi sequi ducimus hic eos cumque, doloribus recusandae blanditiis dolores dolorem et assumenda quod!</p>
      </div>
    </main>
  )
}
