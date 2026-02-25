import React from "react";

export default function AboutMe() {
  return (
    <div id="about-me" className="bg-black p-4 text-white h-section">
      <h2 className="section-heading mb-3">About Me</h2>
      <div className="d-flex gap-3 flex-column-reverse flex-sm-row">
        <div>
          <p>
            I’m a MERN Stack Developer with a solid foundation in MongoDB,
            Express.js, React, and Node.js, backed by hands-on experience in
            building and integrating scalable web applications.
          </p>
          <p>I’ve completed in-depth courses covering: </p>
          <ul>
            <li>
              Node.js & Express – REST APIs, authentication, middleware, and
              Mongoose integration.
            </li>
            <li>
              MongoDB – database design, aggregation, indexing, and best
              practices.{" "}
            </li>
            <li>
              React – hooks, routing, state management, and component
              architecture.
            </li>
          </ul>
          <p>
            I specialize in creating clean, maintainable, and efficient code
            that delivers both functionality and a smooth user experience. From
            backend architecture to dynamic frontends, I can take a project from
            concept to deployment with attention to performance and scalability.
          </p>
          <p>
            I’m passionate about problem-solving, optimizing workflows, and
            bringing ideas to life through code. If you’re looking for someone
            who can deliver reliable, full-stack solutions — I’m ready to make
            it happen.
          </p>
        </div>
        <img
          src="./about-me.webp"
          className="about-img rounded"
          alt="About Me"
        />
      </div>
    </div>
  );
}
