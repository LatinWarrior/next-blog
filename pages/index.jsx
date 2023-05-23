import Head from 'next/head';
import Link from 'next/link';

function HomePage() {
    console.log(`[HomePage] render`);
    return (
        <>
            <Head>
                <title>My Blog 2</title>
                <meta name='description' value='This is my blog' />
            </Head>
            <main>
                <h1>My Blog 2004</h1>
                <ul>
                    <li>
                        <Link href='/posts/first-post'>First Post</Link>
                    </li>
                    <li>Two</li>
                    <li>Three</li>
                </ul>
            </main>
        </>
    );
}

export default HomePage;
