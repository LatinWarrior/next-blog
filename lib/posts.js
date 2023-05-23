import { readFile } from 'fs/promises';

export async function getPosts(slug) {
    const data = await readFile(`content/posts/${slug}.json`, 'utf8');
    return JSON.parse(data);
}