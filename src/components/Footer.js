import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
