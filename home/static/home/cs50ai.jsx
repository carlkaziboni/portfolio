import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('cs50ai-description'));

description.render(
    <div className="fade-in">
        <p>Journey into the fascinating world of artificial intelligence through Harvard's prestigious CS50 AI course - where theoretical concepts meet practical implementation. This collection represents a deep dive into the algorithms that power modern AI, built from the ground up to understand every nuance. 🤖</p>
        <p>These aren't just assignments; they're explorations into the mathematical beauty of machine learning, the elegance of search algorithms, and the power of neural networks. Each project was crafted to solve real-world problems while mastering the fundamental principles that drive AI innovation.</p>
        <p>From pathfinding algorithms that navigate complex mazes to neural networks that recognize handwritten digits, this portfolio showcases the journey from AI theory to working implementations that you can see, touch, and understand.</p>
        <p><strong>AI domains explored and mastered:</strong></p>
        <ul className="tech-list">
            <li>Python with NumPy and TensorFlow for high-performance computing</li>
            <li>Search algorithms including A*, minimax, and alpha-beta pruning</li>
            <li>Knowledge representation using propositional and first-order logic</li>
            <li>Probabilistic models with Markov chains and Bayesian networks</li>
            <li>Machine learning from k-nearest neighbors to deep neural networks</li>
            <li>Natural language processing with tokenization and sentiment analysis</li>
            <li>Computer vision with convolutional networks and image recognition</li>
        </ul>
        <p>This collection proves that true AI mastery comes from understanding the why behind the what - building intelligence from first principles.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('cs50ai-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The CS50 AI projects demonstrate proficiency across multiple artificial intelligence paradigms, each implemented with careful attention to algorithmic efficiency and code organization. The projects collectively showcase understanding of both classical AI approaches and modern machine learning techniques.</p>
        <p><strong>Key project implementations:</strong></p>
        <ul className="feature-list">
            <li>Intelligent search algorithms with heuristic optimization for pathfinding problems</li>
            <li>Knowledge representation systems using propositional logic and inference engines</li>
            <li>Probabilistic reasoning models implementing Bayesian networks for uncertainty handling</li>
            <li>Machine learning classifiers including nearest neighbors, perceptron, and SVM implementations</li>
            <li>Neural network architectures built from scratch with backpropagation training</li>
            <li>Natural language processing pipelines for text analysis and sentiment classification</li>
            <li>Optimization algorithms for constraint satisfaction and resource allocation problems</li>
        </ul>
        <p>Each implementation emphasizes clean, readable code with comprehensive documentation and testing. The projects demonstrate understanding of computational complexity, algorithm selection criteria, and performance optimization techniques.</p>
        <p>The codebase follows Python best practices including proper error handling, modular design patterns, and extensive use of object-oriented programming principles to create maintainable and extensible AI solutions.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('cs50ai-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Completing the CS50 AI course has been transformative in developing a deep understanding of artificial intelligence principles and their practical applications. The hands-on approach to implementing algorithms from first principles provided invaluable insights into the inner workings of AI systems.</p>
        <p>Working through these projects reinforced the importance of understanding the theoretical foundations before jumping into high-level frameworks. Building neural networks from scratch, for example, provided crucial insights into gradient descent, backpropagation, and optimization that would be missed when using pre-built libraries.</p>
        <p><strong>Key insights and skills developed:</strong></p>
        <ul className="learning-list">
            <li>Mastery of fundamental AI algorithms and their appropriate use cases</li>
            <li>Deep understanding of machine learning model selection and evaluation techniques</li>
            <li>Proficiency in probabilistic reasoning and handling uncertainty in AI systems</li>
            <li>Experience with optimization techniques for complex problem spaces</li>
            <li>Knowledge of neural network architectures and training methodologies</li>
            <li>Understanding of ethical considerations in AI development and deployment</li>
        </ul>
        <p>The course emphasized critical thinking about when and how to apply different AI techniques, fostering an understanding that goes beyond simple implementation to strategic problem-solving and algorithm selection.</p>
        <p>This foundation in AI principles continues to inform my approach to complex technical challenges, providing both the theoretical knowledge and practical skills necessary for developing intelligent systems that solve real-world problems.</p>
    </div>
);
