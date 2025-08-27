import React from 'react';

const Home = () => {
  return (
    <section id="home" className="d-flex align-items-center justify-content-center text-center vh-100 text-white bg-dark">
      <div className="container">
        <h1>Your Name</h1>
        <p className="lead">Senior Staff Software Engineer at Zscaler</p>
        <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
      </div>
    </section>
  );
}

export default Home;
