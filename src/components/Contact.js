import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="display-4">Contact Me</h2>
        <p className="lead">Feel free to reach out to me via email or social media.</p>
        <a href="mailto:your.email@example.com" className="btn btn-primary btn-lg mx-2">Email</a>
        <a href="#" className="btn btn-secondary btn-lg mx-2">LinkedIn</a>
        <a href="#" className="btn btn-secondary btn-lg mx-2">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
