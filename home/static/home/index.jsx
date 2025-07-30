import {createRoot} from 'react-dom/client';

const about_me = createRoot(document.getElementById('about-me'));

about_me.render(
    <div>
        <h1>About Me</h1>
        <p>Hello and welcome! I'm Carl Kaziboni, currently a third-year Artificial Intelligence and Computer Science student at the University of Edinburgh, where I'm diving deep into the fascinating world of AI and technology.</p>
        <p>As the Technical Director of AI Reinforcement Learning at HumanEd (the University of Edinburgh's Humanoid Robotics Society), I lead exciting projects involving robotic arm development and cutting-edge AI applications. My technical interests span reinforcement learning, AI applications in healthcare, and both mobile and web development.</p>
        <p>I'm driven by the potential of technology to solve real-world problems, particularly in medical settings where AI can make a genuine difference in people's lives. Whether it's building intelligent systems or developing user-friendly applications, I love creating solutions that matter.</p>
        <p>When I'm not coding or working on robotics projects, you'll find me immersed in DC Comics, cheering on Manchester United (through the highs and lows!), or enjoying animated shows. Thanks for stopping by my portfolio – I'd love to connect and discuss technology, projects, or even our shared interests!</p>
    </div>
); 

const tech_stack = createRoot(document.getElementById('tech-stack'));

tech_stack.render(
   <div className="tech-stack">
    <h1>Tech Stack</h1>
    <div className="skills-orbit">
        {/* Center Logo */}
        <div className="center-logo">
            <i className="fas fa-code"></i>
        </div>
        
        {/* First Orbit - Core Web Technologies */}
        <div className="orbit orbit-1">
            <div className="skill-item">
                <i className="fab fa-react"></i>
                <span>React</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-js-square"></i>
                <span>JavaScript</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-bolt"></i>
                <span>Vite</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-python"></i>
                <span>Django</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-flask"></i>
                <span>Flask</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-node-js"></i>
                <span>Node.js</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-bootstrap"></i>
                <span>Bootstrap</span>
            </div>
        </div>
        
        {/* Second Orbit - Programming Languages & Mobile */}
        <div className="orbit orbit-2">
            <div className="skill-item">
                <i className="fab fa-java"></i>
                <span>Java</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-android"></i>
                <span>Android Studio</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-code"></i>
                <span>C/C++</span>
            </div>
            <div className="skill-item">
                <span style={{fontSize: '1.8rem', fontWeight: 'bold', color: '#667eea'}}>λ</span>
                <span>Haskell</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-apple"></i>
                <span>Xcode</span>
            </div>
            <div className="skill-item">
                <i className="fab fa-swift"></i>
                <span>Swift</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-mobile-alt"></i>
                <span>Kotlin</span>
            </div>
        </div>
        
        {/* Third Orbit - Databases & AI/ML */}
        <div className="orbit orbit-3">
            <div className="skill-item">
                <i className="fas fa-database"></i>
                <span>SQL</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-elephant"></i>
                <span>PostgreSQL</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-database"></i>
                <span>MySQL</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-brain"></i>
                <span>TensorFlow</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-fire"></i>
                <span>PyTorch</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-chart-line"></i>
                <span>Scikit-learn</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-eye"></i>
                <span>OpenCV</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-image"></i>
                <span>PIL</span>
            </div>
            <div className="skill-item">
                <i className="fas fa-book"></i>
                <span>Jupyter</span>
            </div>
        </div>
    </div>
   </div>
);

const projects = createRoot(document.getElementById('projects'));

projects.render(
    <div>
        <h1>Projects</h1>
        <p>Here are some of the projects I have worked on:</p>
        
        {/* 3D Carousel of projects */}
        <div className="carousel-3d-container">
            <div id="projectCarousel" className="carousel slide carousel-3d" data-bs-ride="carousel" data-bs-interval="5000" data-bs-wrap="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-refrigerator"></i>
                            </div>
                            <div className="project-content">
                                <h5>Smart Fridge Manager</h5>
                                <p>A comprehensive food inventory management system with user authentication, automated expiry notifications via email, and full CRUD operations for tracking food items. Features scheduled background tasks for expiry alerts.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Flask</span>
                                    <span className="tech-tag">SQLite</span>
                                    <span className="tech-tag">Python</span>
                                </div>
                                <a href="/fridge" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-brain"></i>
                            </div>
                            <div className="project-content">
                                <h5>CS50 AI Projects</h5>
                                <p>A collection of artificial intelligence projects including search algorithms, knowledge representation, and machine learning models.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">TensorFlow</span>
                                    <span className="tech-tag">Scikit-learn</span>
                                </div>
                                <a href="/cs50ai" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="project-content">
                                <h5>CS50 Web Development</h5>
                                <p>Full-stack web applications showcasing modern web development techniques with Django, JavaScript, and responsive design.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Django</span>
                                    <span className="tech-tag">JavaScript</span>
                                    <span className="tech-tag">Bootstrap</span>
                                </div>
                                <a href="/cs50web" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div className="project-content">
                                <h5>Diageo Spirit of Progress Hackathon - 2nd Place 🥈</h5>
                                <p>Achieved second place at Diageo's Spirit of Progress hackathon with our "Renewable Energy Analysis Dashboard" - an AI-powered platform combining data visualization, machine learning, and GPT-4 vision capabilities to identify renewable energy opportunities and analyze carbon emissions for sustainable energy decision-making.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Python</span>
                                    <span className="tech-tag">Flask</span>
                                    <span className="tech-tag">TensorFlow</span>
                                    <span className="tech-tag">GPT-4 Vision</span>
                                </div>
                                <a href="/diageohack" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="project-content">
                                <h5>HumanEd - Newly Appointed Technical Director</h5>
                                <p>Recently appointed Technical Director for the upcoming academic year, leading advanced robotics and AI research including OpenAI dexterity replication using MuJoCo simulation, Stable-Baselines3 PPO training, and custom TensorBoard logging for robotic manipulation research and educational technology development.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">MuJoCo</span>
                                    <span className="tech-tag">Reinforcement Learning</span>
                                    <span className="tech-tag">TensorBoard</span>
                                    <span className="tech-tag">Robotics</span>
                                </div>
                                <a href="/humaned" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="project-content">
                                <h5>Portfolio Website - Full-Stack Showcase</h5>
                                <p>Comprehensive Django-React portfolio featuring 9 project showcases, interactive 3D carousel, spinning skills visualization with 23 technologies, and sophisticated animations. Demonstrates enterprise-level full-stack development with Vite integration, responsive design, and modern web development practices.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Django</span>
                                    <span className="tech-tag">React</span>
                                    <span className="tech-tag">Vite</span>
                                    <span className="tech-tag">CSS Grid</span>
                                </div>
                                <a href="/portfolio" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <div className="project-content">
                                <h5>CS50 Final - Student Council Suggestions</h5>
                                <p>Comprehensive Flask web application for managing student council suggestions with user authentication, role-based access control, approval workflows, progress tracking, and administrative functions. Features complete suggestion lifecycle management from submission to completion.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Flask</span>
                                    <span className="tech-tag">SQLite</span>
                                    <span className="tech-tag">Flask-Login</span>
                                    <span className="tech-tag">Bootstrap</span>
                                </div>
                                <a href="/suggestions" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-x-ray"></i>
                            </div>
                            <div className="project-content">
                                <h5>Chest X-Ray Disease Detection with AI</h5>
                                <p>Advanced multi-label classification system detecting 15 chest diseases simultaneously using custom CNN and Xception transfer learning. Features Grad-CAM visualization, Flask web app with real-time prediction, and comprehensive medical AI pipeline from NIH dataset processing to deployment.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">TensorFlow</span>
                                    <span className="tech-tag">Grad-CAM</span>
                                    <span className="tech-tag">Flask</span>
                                    <span className="tech-tag">Xception</span>
                                </div>
                                <a href="/xraydetection" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fab fa-android"></i>
                            </div>
                            <div className="project-content">
                                <h5>Android Mobile Apps</h5>
                                <p>Native Android applications built with modern development practices, featuring intuitive UI/UX and robust functionality.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">Kotlin</span>
                                    <span className="tech-tag">Android Studio</span>
                                    <span className="tech-tag">Java</span>
                                </div>
                                <a href="/android" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="project-card">
                            <div className="project-image">
                                <i className="fas fa-running"></i>
                            </div>
                            <div className="project-content">
                                <h5>Player Pose Classifier - AI Sports Analysis</h5>
                                <p>Advanced computer vision system for real-time player pose classification and movement analysis in sports. Features deep learning models for pose detection, motion tracking, and performance analytics using computer vision techniques.</p>
                                <div className="project-tech">
                                    <span className="tech-tag">OpenCV</span>
                                    <span className="tech-tag">TensorFlow</span>
                                    <span className="tech-tag">MediaPipe</span>
                                    <span className="tech-tag">Python</span>
                                </div>
                                <a href="/playerposeclassifier" className="project-link">View Project <i className="fas fa-arrow-right"></i></a>
                            </div>
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
        </div>
        
        <p className="projects-footer">Each of these 10 projects represents a unique challenge and demonstrates my passion for creating innovative solutions that make a real impact in technology and AI.</p>
    </div>
);

const contact = createRoot(document.getElementById('contact'));
contact.render(
    <div>
        <h1>Contact</h1>
        <p>If you would like to get in touch, please feel free to reach out via email or connect with me on social media.</p>
        <ul>
            <li>📧 <a href="mailto:your-email@example.com">your-email@example.com</a></li>
            <li>💼 <a href="https://www.linkedin.com/in/your-profile" target="_blank">LinkedIn Profile</a></li>
            <li>🐙 <a href="https://github.com/your-username" target="_blank">GitHub Profile</a></li>
        </ul>
    </div>
);

// Initialize carousel with proper cycling behavior
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectCarousel');
    if (carousel && window.bootstrap) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            touch: true,
            pause: 'hover'
        });
        
        // Handle 3D positioning manually for better control
        const updateCarousel3D = () => {
            const items = carousel.querySelectorAll('.carousel-item');
            const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
            
            items.forEach((item, index) => {
                // Remove all positioning classes
                item.classList.remove('carousel-prev', 'carousel-next', 'carousel-far');
                
                if (index === activeIndex) {
                    // Active item - center
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0) translateZ(0) rotateY(0deg) scale(1)';
                    item.style.zIndex = '10';
                    item.style.pointerEvents = 'auto';
                } else {
                    // Calculate relative position
                    let diff = index - activeIndex;
                    const totalItems = items.length;
                    
                    // Handle wrapping
                    if (diff > totalItems / 2) diff -= totalItems;
                    if (diff < -totalItems / 2) diff += totalItems;
                    
                    if (diff === 1 || (diff === -(totalItems - 1))) {
                        // Next item (right side)
                        item.style.opacity = '0.4';
                        item.style.transform = 'translateX(60%) translateZ(-200px) rotateY(35deg) scale(0.7)';
                        item.style.zIndex = '2';
                        item.style.pointerEvents = 'none';
                    } else if (diff === -1 || (diff === totalItems - 1)) {
                        // Previous item (left side)
                        item.style.opacity = '0.4';
                        item.style.transform = 'translateX(-60%) translateZ(-200px) rotateY(-35deg) scale(0.7)';
                        item.style.zIndex = '2';
                        item.style.pointerEvents = 'none';
                    } else {
                        // Far items
                        item.style.opacity = '0.1';
                        item.style.transform = 'translateX(100%) translateZ(-400px) rotateY(45deg) scale(0.5)';
                        item.style.zIndex = '1';
                        item.style.pointerEvents = 'none';
                    }
                    
                    // Add transition
                    item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                }
            });
        };
        
        // Initial positioning
        updateCarousel3D();
        
        // Update on slide events
        carousel.addEventListener('slid.bs.carousel', updateCarousel3D);
    }
});
