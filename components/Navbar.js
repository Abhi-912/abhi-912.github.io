import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: 0, zIndex: 50, background: 'rgba(11, 15, 25, 0.8)', backdropFilter: 'blur(12px)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          Abhishek<span className="gradient-text">.</span>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/#about" style={{ fontWeight: 500 }}>About</Link>
          <Link href="/#experience" style={{ fontWeight: 500 }}>Experience</Link>
          <Link href="/blog" style={{ fontWeight: 500 }}>Blog</Link>
          <a href="/Abhishek_Pandey_resume.pdf" target="_blank" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Resume</a>
        </div>
      </div>
    </nav>
  );
}
