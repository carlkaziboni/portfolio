import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('portfolio-description'));

description.render(
    <div className="fade-in">
        <p>This sophisticated Django-React portfolio represents the culmination of modern full-stack web development expertise - a comprehensive showcase of technical skills, creative projects, and professional achievements. Built with enterprise-grade architecture and cutting-edge frontend technologies, it demonstrates mastery of contemporary web development practices. 💼</p>
        <p>Featuring 9 meticulously crafted project showcases, interactive skill visualizations with spinning orbital animations, and a 3D project carousel with smooth transitions. Every component showcases technical excellence from Django REST integration to React hooks, responsive design, and advanced CSS animations.</p>
        <p>This portfolio serves as both a professional showcase and a technical demonstration, featuring comprehensive project descriptions, interactive comment systems, dynamic content rendering, and seamless integration between backend data management and frontend user experience optimization.</p>
        <p><strong>Advanced technical stack powering this portfolio:</strong></p>
        <ul className="tech-list">
            <li>Django framework with custom models, views, and URL routing for robust backend architecture</li>
            <li>React with createRoot API and modern hooks for dynamic component rendering</li>
            <li>Vite build system integration with Django for optimized asset management and hot reloading</li>
            <li>CSS Grid and custom properties for responsive design with 3D transforms and animations</li>
            <li>SQLite database with Django ORM for efficient data storage and retrieval</li>
            <li>Django Crispy Forms for elegant form styling and validation handling</li>
            <li>Font Awesome icons and Google Fonts integration for enhanced visual design</li>
        </ul>
        <p>This portfolio demonstrates enterprise-level development capabilities including database design, API integration, responsive frontend architecture, and deployment-ready code organization following industry best practices.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('portfolio-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>This portfolio showcases advanced Django-React integration with sophisticated architectural patterns including Django models for project data management, custom views with context processing, and seamless Vite build system integration for modern frontend development workflows.</p>
        <p><strong>Comprehensive technical implementations and advanced features:</strong></p>
        <ul className="feature-list">
            <li>Django project structure with home app containing models for projects, comments, and contact forms</li>
            <li>React components with createRoot API for dynamic content rendering in Django templates</li>
            <li>Vite configuration integrated with Django for hot module replacement and optimized builds</li>
            <li>Interactive skill visualization with CSS animations - 23 technologies in 3 spinning orbital rings</li>
            <li>3D project carousel with perspective transforms and smooth hardware-accelerated transitions</li>
            <li>Responsive design architecture supporting desktop, tablet, and mobile with custom breakpoints</li>
            <li>Django Crispy Forms integration for styled comment submission with CSRF protection</li>
            <li>URL routing system with dedicated views for 9 individual project showcases</li>
            <li>Database management with Django ORM for efficient queries and data relationships</li>
            <li>Custom CSS properties and modern layout techniques including Grid and Flexbox</li>
        </ul>
        <p>The architecture demonstrates modern full-stack development with separation of concerns - Django handling backend logic, data persistence, and template rendering while React manages interactive frontend components and user interface dynamics.</p>
        <p>Performance optimizations include Vite's code splitting, tree shaking, and asset optimization, combined with Django's efficient template caching and database query optimization for fast loading times across all devices.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('portfolio-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Building this comprehensive Django-React portfolio has been an intensive journey in full-stack development, demonstrating the integration of backend data management with modern frontend interactivity. The project showcases 9 distinct technical projects while serving as a sophisticated web application in its own right.</p>
        <p>The development process involved creating a scalable architecture that could elegantly present complex technical projects while maintaining smooth user experience through advanced animations, responsive design, and intuitive navigation patterns.</p>
        <p><strong>Key development achievements and technical mastery demonstrated:</strong></p>
        <ul className="learning-list">
            <li>Mastered Django-React integration with Vite build system for modern development workflows</li>
            <li>Implemented sophisticated CSS animations including 3D transforms and orbital skill visualizations</li>
            <li>Developed responsive design patterns supporting seamless cross-device experiences</li>
            <li>Created interactive comment system with Django forms and database persistence</li>
            <li>Built dynamic project showcase system with individual pages and unified navigation</li>
            <li>Enhanced user experience with hardware-accelerated animations and smooth transitions</li>
            <li>Demonstrated full-stack capabilities from database design to frontend component architecture</li>
        </ul>
        <p>This portfolio represents more than just a showcase - it's a working demonstration of modern web development practices including Django ORM usage, React component patterns, responsive design implementation, and performance optimization techniques.</p>
        <p>The project continues to evolve as a living example of technical growth, serving both as a professional showcase for potential collaborators and employers, and as a practical demonstration of enterprise-level web development capabilities applied to personal branding and career advancement.</p>
    </div>
);
