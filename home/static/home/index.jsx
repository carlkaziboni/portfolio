import {createRoot} from 'react-dom/client';

const about_me = createRoot(document.getElementById('about-me'));

about_me.render(
    <div>
        <h1>About Me</h1>
        <p>Welcome to my portfolio! I am a passionate developer with a keen interest in
            creating innovative solutions. My journey in tech has been driven by a love for problem-solving and a desire to make a positive impact through technology.</p>
        <p>With a background in software development, I have honed my skills in various programming languages and frameworks. I enjoy working on projects that challenge me and allow me to grow both personally and professionally.</p>
        <p>In my free time, I love exploring new technologies, contributing to open-source projects, and sharing my knowledge with the community. I believe in the power of
            collaboration and continuous learning, and I am always eager to connect with like-minded individuals.</p>
        <p>Thank you for visiting my portfolio. I hope you find it inspiring and informative. If you have any questions or would like to collaborate, feel free to reach out!</p>
    </div>
); 

const tech_stack = createRoot(document.getElementById('tech-stack'));

tech_stack.render(
   <div className="tech-stack">
    {/* Tech Stack Section */}
       <div className="tech-stack-item">React</div>
       <div className="tech-stack-item">JavaScript</div>
       <div className="tech-stack-item">Node.js</div>
       <div className="tech-stack-item">Python</div>
       <div className="tech-stack-item">Django</div>
       <div className="tech-stack-item">HTML & CSS</div>
       <div className="tech-stack-item">Bootstrap</div>
       <div className="tech-stack-item">Git & GitHub</div>
       <div className="tech-stack-item">SQL & NoSQL Databases</div>
       <div className="tech-stack-item">RESTful APIs</div>
       <div className="tech-stack-item">GraphQL</div>
       <div className="tech-stack-item">Docker</div>
   </div>
);

const projects = createRoot(document.getElementById('projects'));

projects.render(
    <div>
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on:</p>
        {/* Carousel of projects */}
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Project 1"/>
                    <div className="carousel-caption d
-flex flex-column align-items-center">
                        <h5>Project 1</h5>
                        <p>Description of Project 1.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400" className="d
-block w-100" alt="Project 2"/>
                    <div className="carousel-caption d-flex flex-column align-items-center">
                        <h5>Project 2</h5>
                        <p>Description of Project 2.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Project 3"/>
                    <div className="carousel-caption d-flex flex-column align-items-center">
                        <h5>Project 3</h5>
                        <p>Description of Project 3.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <p>Feel free to explore these projects and learn more about my work. Each project showcases my skills and dedication to delivering high-quality solutions.</p>
    </div>
);

const contact = createRoot(document.getElementById('contact'));
contact.render(
    <div>
        <h1>Contact</h1>
        <p>If you would like to get in touch, please feel free to reach out via email or connect with me on social media.</p>
        <ul>
            <li>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/your-profile" target="_blank">your-profile</a></li>
            <li>GitHub: <a href="https://github.com/your-username" target="_blank">your-username</a></li>
        </ul>
    </div>
);
