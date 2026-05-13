import { getPostData, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  // Await the params object before accessing properties
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <Link href="/blog" style={{ color: 'var(--accent-primary)', marginBottom: '2rem', display: 'inline-block' }}>
        ← Back to Blog
      </Link>
      <article className="glass-card">
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{postData.title}</h1>
        <div style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>{postData.date}</div>
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          style={{ lineHeight: '1.8' }}
        />
      </article>
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h1, .blog-content h2, .blog-content h3 { margin-top: 2rem; color: var(--text-primary); }
        .blog-content p { margin-bottom: 1.5rem; color: var(--text-secondary); }
        .blog-content pre { background: rgba(0,0,0,0.3); padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem; }
        .blog-content code { background: rgba(0,0,0,0.3); padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; }
        .blog-content a { color: var(--accent-primary); text-decoration: underline; }
      `}} />
    </div>
  );
}
