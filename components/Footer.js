export default function Footer() {
  return (
    <footer style={{ padding: '3rem 0', borderTop: '1px solid var(--glass-border)', marginTop: 'auto' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="https://github.com/Abhi-912" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/abhishekpandey921" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>LinkedIn</a>
          <a href="mailto:abhishek100412@gmail.com" style={{ fontSize: '1.5rem' }}>Email</a>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Abhishek Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
}
