import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('suggestions-description'));

description.render(
    <div className="fade-in">
        <p>My CS50 final project - a comprehensive Flask web application that revolutionizes student engagement by creating a transparent, democratic platform for submitting, reviewing, and tracking suggestions to the student council. This sophisticated system bridges the gap between students and administration through technology. �</p>
        <p>Built with Flask and featuring comprehensive user authentication, role-based access control, and a complete suggestion lifecycle management system. Students, parents, and teachers can submit suggestions and track their progress from submission through approval, implementation, and completion.</p>
        <p>This application demonstrates advanced web development concepts including database design, user authentication with Flask-Login, administrative controls, and responsive frontend design. The system handles everything from suggestion submission to meeting minutes management.</p>
        <p><strong>Comprehensive technology stack and features:</strong></p>
        <ul className="tech-list">
            <li>Flask framework with Blueprint architecture and session management</li>
            <li>SQLite database with complex relational schema (5 interconnected tables)</li>
            <li>Flask-Login for secure user authentication and role-based access control</li>
            <li>Werkzeug for password hashing and security implementations</li>
            <li>Bootstrap 4/5 for responsive, mobile-friendly interface design</li>
            <li>Dynamic template system with Jinja2 for efficient content rendering</li>
            <li>Administrative functions including account management and meeting minutes</li>
        </ul>
        <p>Features include public suggestion viewing, admin approval workflows, progress tracking with delay management, completion tracking, and comprehensive meeting minutes management - all within a secure, user-friendly interface.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('suggestions-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The Student Council Suggestions application demonstrates sophisticated Flask development with a complex database architecture supporting a complete suggestion lifecycle. The system implements secure user authentication, role-based access control, and comprehensive administrative functions for managing student suggestions.</p>
        <p><strong>Advanced technical implementations and database architecture:</strong></p>
        <ul className="feature-list">
            <li>Complex SQLite database with 5 interconnected tables: Accounts, Suggestions, Approved, Completed, Unapproved, and Minutes</li>
            <li>Flask-Login integration with custom User class and session management for secure authentication</li>
            <li>Custom admin_required decorator implementing role-based access control for administrative functions</li>
            <li>Werkzeug security implementation with password hashing using PBKDF2-SHA256 with salt</li>
            <li>Dynamic template system with separate stylesheets (site.css for guests, style.css for authenticated users)</li>
            <li>Comprehensive CRUD operations with foreign key relationships and referential integrity</li>
            <li>Advanced form handling with POST request validation and SQL injection protection</li>
            <li>Real-time status tracking system moving suggestions through approval, progress, and completion states</li>
            <li>Administrative account management with automatic password generation using secrets module</li>
            <li>Meeting minutes management system with date tracking and historical viewing</li>
        </ul>
        <p>The application architecture supports complex workflows including suggestion submission, admin review and approval/rejection, progress tracking with delay management, completion tracking, and comprehensive administrative oversight.</p>
        <p>Security features include protected routes, session management, password hashing with automatic migration from unhashed to hashed passwords, and comprehensive input validation throughout the application.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('suggestions-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Developing the Student Council Suggestions application as my CS50 final project was an intensive journey in full-stack web development, demonstrating comprehensive Flask application architecture from database design to user interface implementation. This project showcased the ability to create real-world applications that solve practical organizational challenges.</p>
        <p>The project required mastering complex concepts including user authentication systems, role-based access control, database relationship management, and creating intuitive user experiences for different user types (public users, authenticated users, and administrators).</p>
        <p><strong>Key development achievements and learning outcomes:</strong></p>
        <ul className="learning-list">
            <li>Mastered Flask framework including routing, templates, session management, and application structure</li>
            <li>Implemented sophisticated database design with foreign key relationships and complex queries</li>
            <li>Developed secure authentication system with Flask-Login and Werkzeug password hashing</li>
            <li>Created comprehensive administrative functions including account management and meeting minutes</li>
            <li>Built responsive frontend using Bootstrap with dynamic template rendering and form handling</li>
            <li>Gained expertise in application security including CSRF protection and input validation</li>
            <li>Learned workflow management through complete suggestion lifecycle from submission to completion</li>
        </ul>
        <p>The project emphasized the importance of user experience design, ensuring the application serves different user roles effectively while maintaining security and data integrity throughout the suggestion management process.</p>
        <p>This CS50 final project represents a comprehensive demonstration of web development skills, combining technical expertise with practical problem-solving to create a functional application that could be deployed in real educational environments to improve student-administration communication and transparency.</p>
    </div>
);
