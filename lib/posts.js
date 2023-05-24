import { readFile } from 'fs/promises';
import { marked } from 'marked';
import matter from 'gray-matter';

export async function getPosts(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf8');
    const { data, content } = matter(source);
    const html = marked.parse(content);
    return {
        date: data.date,
        title: data.title,
        body: html
    };
}