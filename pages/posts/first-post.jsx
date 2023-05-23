

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
                <title>{post.title} - My Blog</title>
            </Head>
            <main>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </main>
        </>
    );
};

export default FirstPostPage;
