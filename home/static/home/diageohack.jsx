import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('diageohack-description'));

description.render(
    <div className="fade-in">
        <p>🥈 Second place achievement at Diageo's Spirit of Progress hackathon with our "Renewable Energy Analysis Dashboard" - an AI-powered platform that revolutionizes sustainable energy decision-making for industrial operations. This project demonstrates the perfect fusion of data science, machine learning, and environmental consciousness. 🌿</p>
        <p>Our intelligent web application combines sophisticated data visualization, time series analysis, and cutting-edge AI capabilities to identify renewable energy opportunities and analyze carbon emissions. Using GPT-4 vision for visual data analysis, multiple ML models, and comprehensive energy metrics tracking.</p>
        <p>This solution addresses critical sustainability challenges by providing actionable insights for renewable energy integration, helping organizations make data-driven decisions toward carbon neutrality and environmental responsibility.</p>
        <p><strong>Award-winning technology stack that secured second place:</strong></p>
        <ul className="tech-list">
            <li>Python and Flask for robust backend API and web interface</li>
            <li>TensorFlow and Scikit-learn for advanced machine learning models (PCA, MLP, Neural Networks)</li>
            <li>OpenAI GPT-4 Turbo with vision capabilities for AI-powered visual analysis</li>
            <li>Pandas and NumPy for comprehensive data analysis and preprocessing</li>
            <li>Matplotlib and Seaborn for interactive data visualization and plotting</li>
            <li>StatsModels for time series analysis with exponential smoothing</li>
            <li>Interactive dashboard with site-specific filtering and category selection</li>
        </ul>
        <p>Recognition as a top performer demonstrates our ability to deliver innovative solutions that combine environmental impact with technical excellence, showcasing the future of sustainable energy analytics.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('diageohack-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The Renewable Energy Analysis Dashboard represents a sophisticated integration of data science, machine learning, and AI technologies designed to tackle complex energy analytics challenges. The system architecture supports comprehensive data processing pipelines, advanced visualization capabilities, and intelligent analysis workflows.</p>
        <p><strong>Core technical implementations and advanced features:</strong></p>
        <ul className="feature-list">
            <li>Advanced machine learning pipeline with PCA, Linear Regression, MLP, and Neural Networks for predictive analysis</li>
            <li>OpenAI GPT-4 Turbo integration with vision capabilities for AI-powered visual data analysis and insights</li>
            <li>Comprehensive time series analysis using StatsModels exponential smoothing for trend identification</li>
            <li>Interactive data visualization with Matplotlib and Seaborn for energy metrics and emissions tracking</li>
            <li>Flask-based web architecture providing RESTful API endpoints and dynamic data rendering</li>
            <li>Scope 1 & 2 emissions analysis with carbon footprint tracking and reduction recommendations</li>
            <li>Site-specific filtering system enabling granular analysis by location and energy category</li>
            <li>Automated graph generation with customizable time periods and data smoothing algorithms</li>
        </ul>
        <p>The data processing pipeline handles large-scale energy consumption datasets with normalization and standardization techniques. Multiple ML models work in ensemble to provide robust predictions and identify patterns in energy usage and emissions data.</p>
        <p>AI integration through OpenAI's API enables natural language insights generation from visual data, providing human-readable recommendations for renewable energy opportunities and sustainability improvements based on complex data analysis.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('diageohack-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Achieving second place at Diageo's Spirit of Progress hackathon was a transformative experience that demonstrated the power of combining environmental consciousness with advanced technology. The challenge required rapid development of a sophisticated energy analytics platform under competitive time constraints.</p>
        <p>Working on the Renewable Energy Analysis Dashboard provided invaluable experience in integrating multiple cutting-edge technologies including AI, machine learning, and advanced data visualization to solve real-world sustainability challenges for industrial operations.</p>
        <p><strong>Key insights gained from the award-winning project development:</strong></p>
        <ul className="learning-list">
            <li>Mastered integration of AI technologies with traditional data science workflows using OpenAI GPT-4 vision</li>
            <li>Enhanced expertise in machine learning ensemble methods for energy prediction and analysis</li>
            <li>Developed proficiency in time series analysis and statistical modeling for trend identification</li>
            <li>Gained experience in building production-ready Flask applications with complex data processing pipelines</li>
            <li>Improved skills in creating compelling data visualizations that communicate complex insights effectively</li>
            <li>Understanding of sustainability metrics, carbon footprint analysis, and renewable energy transition strategies</li>
        </ul>
        <p>The project reinforced the importance of combining technical excellence with environmental impact, demonstrating how advanced analytics can drive meaningful change in corporate sustainability initiatives and renewable energy adoption.</p>
        <p>This recognition at a prestigious industry hackathon validates the ability to deliver innovative solutions that address critical environmental challenges while showcasing advanced technical capabilities in AI, machine learning, and data science applications.</p>
    </div>
);
