import React from 'react';
import '../style/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <a href="mailto:kushpandit68775@gmail.com"    target='_blank'   className="footer__link">Send Email</a>
        <a href="https://github.com/Kushdeveloper68" target='_blank'  className="footer__link">Documentation</a>
        <a href="https://github.com/Kushdeveloper68"   target='_blank'      className="footer__link">About</a>
      </nav>
      <div className="footer__copyright">
        © {new Date().getFullYear()} Developer kush "Git Explorer". All rights reserved.
      </div>
    </footer>
  );
}
