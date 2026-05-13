import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container" style={{ padding: '6rem 0', minHeight: '80vh' }}>
      <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Blog</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: 'var(--text-secondary)' }}>
        Writing about distributed systems, software engineering, and my technical journey.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {allPostsData.length === 0 ? (
          <p>No blog posts found. Check back later!</p>
        ) : (
          allPostsData.map(({ slug, date, title, description }) => (
            <Link href={`/blog/${slug}`} key={slug}>
              <div className="glass-card" style={{ cursor: 'pointer' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--accent-primary)' }}>{title}</h2>
                <small style={{ color: 'var(--text-secondary)', display: 'block', marginBottom: '1rem' }}>{date}</small>
                {description && <p style={{ margin: 0 }}>{description}</p>}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
