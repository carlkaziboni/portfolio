import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('cs50web-description'));

description.render(
    <div className="fade-in">
        <p>CS50 Web Programming with Python and JavaScript - Harvard's comprehensive journey through modern web development, culminating in "Newspaper," a sophisticated Django application with React integration, automated testing, and CI/CD deployment practices. This collection showcases enterprise-level web development! 🌐</p>
        <p>The capstone "Newspaper" project demonstrates production-level architecture with Django REST Framework API, PostgreSQL database, comprehensive test suites, and Docker containerization. Features include automated testing with unittest and Selenium, GitHub Actions CI/CD pipelines, and container orchestration - all built with industry-standard practices.</p>
        <p>From foundational HTML/CSS to complex full-stack applications with automated deployment, this journey covers every aspect of professional web development including test-driven development, continuous integration, and containerized deployment strategies.</p>
        <p><strong>Advanced web technologies and practices mastered throughout the course:</strong></p>
        <ul className="tech-list">
            <li>Django REST Framework with comprehensive unit testing using TestCase and Client testing</li>
            <li>React with Vite build system plus Selenium for automated browser testing</li>
            <li>PostgreSQL production database with Docker containerization and docker-compose</li>
            <li>GitHub Actions for continuous integration with automated test suites on every push</li>
            <li>Test-driven development with assert statements, unittest framework, and Django testing</li>
            <li>Docker containerization for consistent development and deployment environments</li>
            <li>CI/CD pipelines ensuring code quality and automated deployment workflows</li>
        </ul>
        <p>This portfolio demonstrates enterprise-level web development skills including automated testing, continuous integration, and containerized deployment - essential practices for building scalable, maintainable applications in professional development environments.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('cs50web-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The CS50 Web course progression culminates in the "Newspaper" capstone - a sophisticated Django application demonstrating advanced web development concepts including comprehensive testing, CI/CD pipelines, and containerized deployment. This project showcases enterprise-level architecture with automated testing suites and continuous integration practices.</p>
        <p><strong>Advanced technical implementations and testing practices in the Newspaper project:</strong></p>
        <ul className="feature-list">
            <li>Django REST Framework with ModelSerializer classes and comprehensive unit testing using TestCase</li>
            <li>Automated testing suites including Client testing for HTTP responses and context validation</li>
            <li>Selenium WebDriver integration for automated browser testing and user interaction simulation</li>
            <li>GitHub Actions CI/CD pipeline with YAML configuration for automated testing on every push</li>
            <li>Docker containerization with Dockerfile and docker-compose.yml for PostgreSQL integration</li>
            <li>Test-driven development practices using assert statements and unittest framework</li>
            <li>Continuous integration ensuring code quality with automated test execution and failure detection</li>
            <li>Container orchestration for database and web services with standardized development environments</li>
        </ul>
        <p>The project demonstrates modern DevOps workflows including automated testing pipelines, containerized deployment with Docker and docker-compose, and GitHub Actions for continuous integration. All testing follows industry best practices with setUp methods, descriptive test functions, and comprehensive coverage.</p>
        <p>Professional development practices include test-driven development where bugs are fixed by first writing tests that expose them, automated browser testing with Selenium for client-side validation, and CI/CD pipelines that ensure code quality before deployment to production environments.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('cs50web-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>CS50 Web Programming provided an intensive foundation in full-stack development with emphasis on professional software engineering practices. The course taught not just how to build applications, but how to build them with automated testing, continuous integration, and deployment best practices that mirror real-world development environments.</p>
        <p>The comprehensive curriculum covered test-driven development methodologies, starting with simple assert statements and progressing to sophisticated unittest frameworks with Django's TestCase. Learning Selenium for automated browser testing was particularly valuable for ensuring client-side functionality works correctly across different scenarios.</p>
        <p><strong>Key professional development insights gained from the comprehensive curriculum:</strong></p>
        <ul className="learning-list">
            <li>Mastered test-driven development with comprehensive unittest suites and Django TestCase framework</li>
            <li>Gained expertise in automated browser testing using Selenium WebDriver for user interaction simulation</li>
            <li>Learned CI/CD pipeline implementation with GitHub Actions and YAML configuration files</li>
            <li>Developed containerization skills with Docker and docker-compose for consistent environments</li>
            <li>Enhanced understanding of continuous integration practices preventing bugs in production</li>
            <li>Improved knowledge of professional development workflows including automated testing on every commit</li>
        </ul>
        <p>The course emphasized that modern web development requires more than just coding - it requires systematic approaches to quality assurance, automated testing, and reliable deployment processes. These practices are essential for building applications that scale and maintain quality over time.</p>
        <p>CS50 Web demonstrated that exceptional software engineering combines technical mastery with rigorous testing practices and automation. The comprehensive approach to development, testing, and deployment showcases skills directly applicable to professional software development environments where reliability and quality are paramount.</p>
    </div>
);
