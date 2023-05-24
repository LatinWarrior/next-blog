import Head from 'next/head';
import React from 'react';

import { getPosts } from './../../lib/posts';

export async function getStaticProps() {
    console.log(`[FirstPostPage] getStaticProps()`);
    const post = await getPosts('first-post');

    return {
        props: {
            post,
        },
    };
}

const FirstPostPage = ({ post }) => {
    console.log(`[FirstPostPage] render: `, post);
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <main>
                <p>{post.date}</p>
                <h1>{post.title}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
            </main>
        </>
    );
};

export default FirstPostPage;
