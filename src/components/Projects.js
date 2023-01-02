import React from "react";

const Projects = () => {
  return (
    <>
      <section class="section hero is-light" id="projects">
        <h1 className="title">Projects</h1>

        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">RPM-SAE MUJ Website</p>
                <p class="subtitle">for a SAE Colligate student club</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on{" "}
                    <a href="https://twitter.com/codinghorror/status/506010907021828096">
                      Link
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">Outpass Managment Portal</p>
                <p class="subtitle">A Web Tech lab project to help hotel authorities to grant students permission to take leave</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on{" "}
                    <a href="https://twitter.com/codinghorror/status/506010907021828096">
                      Link
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <p class="title">Chat Application</p>
                <p class="subtitle">Based on React JS and socket.io</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on{" "}
                    <a href="https://twitter.com/codinghorror/status/506010907021828096">
                      Link
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
          <div class="column">
          <div class="card">
              <div class="card-content">
                <p class="title">Companionsy</p>
                <p class="subtitle">a peer to peer study mate finding portal built during a hackathon</p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    View on{" "}
                    <a href="https://twitter.com/codinghorror/status/506010907021828096">
                      Link
                    </a>
                  </span>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
