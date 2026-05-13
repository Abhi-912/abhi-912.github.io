export default function Home() {
  return (
    <div className="container" style={{ paddingBottom: '6rem' }}>
      {/* Hero Section */}
      <section className="section animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1.5rem' }}>
          Hello, I'm <br /><span className="gradient-text">Abhishek Pandey</span>
        </h1>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-secondary)', fontWeight: 400 }}>
          Backend Engineer II at PayPay
        </h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
          Passionate about distributed systems, scalable architectures, and crafting robust APIs. Experienced with Java, Spring Boot, AWS, and modern data infrastructure.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a href="#experience" className="btn btn-primary">View Experience</a>
          <a href="/blog" className="btn btn-secondary">Read Blog</a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="section-title">Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--accent-primary)' }}>Backend Engineer II</h3>
                <h4 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>PayPay India</h4>
              </div>
              <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem' }}>August 2025 – Present</span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Designed a high-throughput notification scheduler leveraging virtual threads and batch processing to sustain 10K+ TPS.</li>
              <li>Optimized notification delivery by replacing templates with template IDs and removing S3 uploads, reducing latency.</li>
              <li>Implemented Redis-based deduplication using idempotency keys for timeline notifications.</li>
              <li>Reduced cloud infrastructure costs and strengthened security by migrating legacy caches to Redis (Valkey).</li>
            </ul>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--accent-primary)' }}>Software Engineer</h3>
                <h4 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>Samsung Research Bengaluru</h4>
              </div>
              <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem' }}>August 2022 – July 2025</span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Built a reactive API Gateway with non-blocking I/O and Redis-backed authentication for 1M+ daily request scale.</li>
              <li>Migrated microservices from Hystrix to Resilience4j, improving system responsiveness by 12%.</li>
              <li>Designed and implemented a reliable notification delivery pipeline using cursor-based queries and Redis for state tracking.</li>
              <li>Achieved $800/month in infrastructure cost savings through AWS optimization initiatives.</li>
            </ul>
          </div>

          <div className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--accent-primary)' }}>Software Engineer Intern</h3>
                <h4 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 500, color: 'var(--text-primary)' }}>Zuno General Insurance</h4>
              </div>
              <span style={{ color: 'var(--text-secondary)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem' }}>Jan 2022 – July 2022</span>
            </div>
            <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Wrote an API Wrapper to fetch details from SAP for a health policy achieving a 23% faster response time.</li>
              <li>Improved multi-member policy processing time by 12% through database query optimization.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="section-title">Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-secondary)' }}>Languages</h3>
            <p>Java, Kotlin, C++, Python, JavaScript</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-secondary)' }}>Frameworks</h3>
            <p>Spring Boot, Spring Webflux, Spring Cloud, Node.js, React, Hibernate</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-secondary)' }}>Cloud & DevOps</h3>
            <p>AWS (EC2, S3, RDS, IAM), Docker, Kubernetes, Kafka, CI/CD, Maven, Gradle, Git</p>
          </div>
          <div className="glass-card">
            <h3 style={{ color: 'var(--accent-secondary)' }}>Databases</h3>
            <p>PostgreSQL, MySQL, DynamoDB, Redis, MongoDB, Cassandra, Elasticsearch</p>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section id="education" className="section animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <h2 className="section-title">Education & Achievements</h2>
        <div className="glass-card" style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>Birsa Institute of Technology, Sindri</h3>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Bachelor of Technology in Electronics and Communication Engineering</p>
          <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
            <span>CGPA: 8.65/10</span>
            <span>•</span>
            <span>August 2018 – June 2022</span>
          </div>
        </div>
        <div className="glass-card">
          <h3 style={{ color: 'var(--accent-secondary)', marginBottom: '1rem' }}>Achievements</h3>
          <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Recognized as a Top Performer for two consecutive quarters at Samsung India for exceptional contributions.</li>
            <li>Solved 800+ problems on coding platforms including LeetCode, CodeChef, and Codeforces.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
