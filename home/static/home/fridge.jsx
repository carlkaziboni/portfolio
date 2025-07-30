import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('fridge-description'));

description.render(
    <div className="fade-in">
        <p>Meet the Smart Fridge Manager - a comprehensive food inventory management system developed for HackTheBurgh, Scotland's biggest hackathon! This application revolutionizes how you track groceries, monitor expiration dates, and reduce food waste. Built with Flask and featuring automated email notifications! 🥗</p>
        <p>Created during the intense 24-hour HackTheBurgh competition hosted by the University of Edinburgh's Computer Society, this application demonstrates rapid prototyping skills and practical problem-solving under pressure. It features a complete user authentication system, automated background scheduling for expiry alerts, and full CRUD operations for managing your food inventory.</p>
        <p>The intuitive web interface makes managing your food inventory effortless, while the automated notification system ensures nothing goes to waste. It's practical technology designed for real-world food management, showcasing the innovation possible in competitive hackathon environments.</p>
        <p><strong>Core features developed during the hackathon:</strong></p>
        <ul className="tech-list">
            <li>Flask web framework with secure user authentication and session management</li>
            <li>SQLite database for efficient local data storage and retrieval</li>
            <li>Automated email notifications using Flask-Mail with Gmail SMTP</li>
            <li>Background task scheduling with APScheduler for expiry monitoring</li>
            <li>Werkzeug security for password hashing and user protection</li>
            <li>Complete CRUD operations for food item management</li>
        </ul>
        <p>More than just a tracking app - it's a testament to what can be achieved in 24 hours at Scotland's premier hackathon, combining web development fundamentals with real-world problem-solving to tackle food waste in households.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('fridge-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The Smart Fridge Manager was rapidly developed during HackTheBurgh using Flask and following MVC architecture principles, demonstrating the ability to create functional, secure applications under tight time constraints. Built in just 24 hours, the application showcases solid understanding of web development fundamentals while implementing real-world features like automated notifications and user management.</p>
        <p><strong>Key technical implementations achieved during the hackathon:</strong></p>
        <ul className="feature-list">
            <li>Flask routing with secure session management and user authentication</li>
            <li>SQLite database integration with proper SQL query handling and data validation</li>
            <li>Werkzeug security implementation for password hashing using PBKDF2</li>
            <li>APScheduler for background task automation - checking expiry dates every 2 minutes</li>
            <li>Flask-Mail integration with Gmail SMTP for automated email notifications</li>
            <li>Complete CRUD operations: Create, Read, Update, Delete for food inventory</li>
            <li>Custom login decorator for protecting authenticated routes</li>
            <li>Expiry date monitoring with 3-day warning threshold</li>
        </ul>
        <p>The application demonstrates effective time management and prioritization skills essential for hackathon success. Despite the 24-hour constraint, the project includes a comprehensive file-based session system and proper separation of concerns with dedicated functions for database operations, email handling, and route management.</p>
        <p>Security features implemented during the competition include session-based authentication, password hashing, SQL injection prevention through parameterized queries, and secure form handling. The code structure emphasizes readability and maintainability even under pressure.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('fridge-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Building the Smart Fridge Manager during HackTheBurgh was an incredible learning experience that tested and enhanced my full-stack development skills under intense time pressure. Participating in Scotland's biggest hackathon taught me valuable lessons about rapid prototyping, team collaboration, and delivering functional applications within strict deadlines.</p>
        <p>The 24-hour constraint at HackTheBurgh forced me to prioritize features effectively and focus on core functionality that delivers real value. Implementing the automated email notification system under time pressure was particularly rewarding, as it required quick decision-making and efficient integration of multiple technologies.</p>
        <p><strong>Key insights gained from the hackathon experience:</strong></p>
        <ul className="feature-list">
            <li>Mastered rapid Flask development and deployment under time constraints</li>
            <li>Enhanced ability to implement secure user authentication quickly and efficiently</li>
            <li>Gained experience with SQLite database design and rapid prototyping</li>
            <li>Learned to prioritize essential features and deliver MVP within deadlines</li>
            <li>Developed skills in quick email integration and SMTP configuration</li>
            <li>Improved understanding of hackathon-paced development and team dynamics</li>
        </ul>
        <p>HackTheBurgh reinforced the importance of building applications that solve real problems, even under extreme time pressure. The automated expiry notification feature demonstrates how hackathons can produce genuinely useful solutions that address everyday challenges like food waste and household management.</p>
        <p>The Smart Fridge Manager stands as proof of what's possible when creativity, technical skills, and time management converge at Scotland's premier hackathon. It showcases my ability to deliver functional, secure applications rapidly while maintaining code quality and user experience standards.</p>
    </div>
);