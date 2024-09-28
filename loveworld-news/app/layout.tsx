/* eslint-disable @next/next/no-page-custom-font */
import './globals.css';
import Image from 'next/image';
import ScrollingNews from './components/ScrollingNews'; 

export const metadata = {
  title: 'Loveworld News',
  description: 'Latest news updates',
};

const sidebarLinks = [
  { text: 'Edo State Gubernatorial Elections Update', imgSrc: '/edo-state.jpg', link: '#' },
  { text: 'DJ Cuppy calls Anthony Joshua After His Weekend Loss', imgSrc: '/dj-cuppy.jpg', link: '#' },
  { text: 'I Regret Not Buying Arsenal Football Club Earlier - Dangote', imgSrc: '/dangote.jpg', link: '#' },
  { text: 'The North And The Lingering Restructuring Question', imgSrc: '/north-restructuring.jpg', link: '#' },
];

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Montserrat&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="header">
          <div className="header-content">
            <h1>Loveworld News</h1>
            <div className="search-bar">
              <input type="text" placeholder="Search news..." />
              <button type="submit">Search</button>
            </div>
            <nav>
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="#">World</a></li>
                <li><a href="#">Politics</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Entertainment</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main-content">
          <section className="articles">
            <h2>Latest News</h2>
            {children} {/* Articles will be injected here */}
          </section>
          <aside className="sidebar">
            <h2>Trending News</h2>
            <Image 
              src="/trending-news.png" 
              alt="Trending News"
              className="trending-image"
              width={300} 
              height={200} 
              layout="responsive" 
            />
            <h2>Latest Updates</h2>
            <ul>
              {sidebarLinks.map((link, index) => (
                <li key={index} className="sidebar-item">
                  <Image 
                    src={link.imgSrc} 
                    alt={link.text} 
                    width={50} 
                    height={50} 
                    className="sidebar-image" 
                  />
                  <a href={link.link}>{link.text}</a>
                </li>
              ))}
            </ul>

            <h2>Most Read Articles</h2>
            <ul>
              <li><a href="#">How To Make Money Online</a></li>
              <li><a href="#">Fashion Tips For Men</a></li>
              <li><a href="#">The Slow Death Of Democracy</a></li>
            </ul>

            <h2>Quick Poll</h2>
            <form className="poll-form">
              <label>
                <input type="radio" name="poll" value="option1" /> Manual Cars
              </label>
              <label>
                <input type="radio" name="poll" value="option2" /> Automatic Cars
              </label>
              <button type="submit">Vote</button>
            </form>

            <h2>Newsletter Subscription</h2>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </aside>
        </main>

        <ScrollingNews /> {/* Add the scrolling news component here */}

        <section className="links-section">
          <h2>Useful Links</h2>
          <ul className="links-list">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </section>

        <footer className="footer">
          <p>&copy; 2024 Loveworld News. All rights reserved.</p>
          <div className="social-sharing">
            <h3>Share this site:</h3>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
