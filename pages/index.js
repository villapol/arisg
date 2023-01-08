import Link from 'next/link'

export const config = {
  runtime: 'experimental-edge',
}

function Page({ data }) {
        return (
            <>
                <h1>Example  <code>getServerSideProps</code></h1>
                <h1 style={{textDecoration: 'underline'}}><Link href="/">Go home</Link></h1>
                
                <br></br>
            {
              data.map((data, i) => {
                return <h2 key={i}>{data.username}</h2>
              })
            }
            </>
        )
}

export async function getServerSideProps() { 
    const res = await fetch ('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();

    // The next line will only be logged on the server and never on the browser console even if we make 
    // client-side navigation.
    // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).
    console.log(data[0]);

    return {
        props: {
            data
        }
    }
}
  
export default Page