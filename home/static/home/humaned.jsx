import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('humaned-description'));

description.render(
    <div className="fade-in">
        <p>Newly appointed Technical Director at HumanEd for the upcoming academic year, leading cutting-edge research and development in educational technology and advanced robotics. Currently spearheading a groundbreaking reinforcement learning project replicating OpenAI's dexterity research, transitioning complex robotic manipulation from PyBullet to MuJoCo simulation environments. 🤖</p>
        <p>My new role encompasses directing technical strategy, leading research initiatives in AI/robotics, and developing sophisticated educational platforms. The current flagship project involves training robotic arms for complex manipulation tasks using deep reinforcement learning, specifically focusing on cube rotation challenges with consecutive goal achievement tracking.</p>
        <p>This position represents the beginning of an exciting journey at the intersection of advanced AI research and practical educational applications, demonstrating emerging leadership in both technical implementation and research direction. The project involves complex reward function development, TensorBoard integration for advanced logging, and sophisticated environment setup and optimization.</p>
        <p><strong>Advanced technical leadership and research technologies for the new role:</strong></p>
        <ul className="tech-list">
            <li>MuJoCo physics simulation for advanced robotic manipulation and dexterity research</li>
            <li>Stable-Baselines3 with PPO algorithms for sophisticated reinforcement learning training</li>
            <li>Gymnasium environments with custom reward functions and goal tracking implementations</li>
            <li>TensorBoard advanced logging and visualization for research metrics and performance analysis</li>
            <li>Python-based research pipeline with Conda/venv environment management for reproducible results</li>
            <li>Git-based research workflow with systematic experimentation and model versioning</li>
            <li>Robotics simulation transitioning from PyBullet to MuJoCo for enhanced physics accuracy</li>
        </ul>
        <p>Beginning my tenure as Technical Director by driving technical innovation in educational technology while advancing the frontiers of AI research, combining emerging leadership experience with cutting-edge research in robotics and machine learning.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('humaned-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>As newly appointed Technical Director at HumanEd for the upcoming academic year, I'm leading advanced research initiatives including our groundbreaking reinforcement learning project replicating OpenAI's dexterity research. The current project involves sophisticated robotic manipulation training using MuJoCo physics simulation with complex environment setup and custom metric implementation for tracking consecutive goal achievements.</p>
        <p><strong>Advanced robotics and AI research implementations for the new role:</strong></p>
        <ul className="feature-list">
            <li>MuJoCo Simulation Environment: Migrated complex robotic arm training from PyBullet to MuJoCo for enhanced physics accuracy and performance</li>
            <li>Custom TensorBoard Integration: Implementing advanced logging fields including 'ep_goals_mean' for tracking average consecutive goals per episode (0-50 range)</li>
            <li>Stable-Baselines3 PPO Training: Sophisticated reinforcement learning pipeline with 6-10 million timestep training cycles and systematic experimentation</li>
            <li>Shadow Dexterous Hand Environment: Working with Farama Robotics environments for complex manipulation tasks and cube rotation challenges</li>
            <li>Custom Reward Function Development: Researching and implementing advanced reward structures for optimal learning performance</li>
            <li>Environment Management: Conda/venv setup with precise version control (Gymnasium 1.0.0, MuJoCo 3.1.6, NumPy ≥2.2.1, Stable-Baselines3 2.4.0)</li>
            <li>Research Pipeline Management: Git-based workflow with systematic branch management, commit tracking, and Excel-based experiment documentation</li>
            <li>Performance Monitoring: Real-time training visualization with render mode testing and comprehensive goal achievement validation</li>
        </ul>
        <p>The research project demonstrates emerging technical leadership in AI research, involving complex simulation environment setup, custom metric implementation, and systematic experimentation with reproducible results and proper version control.</p>
        <p>In this new Technical Director role, I'm directing reward function research, implementing TensorBoard custom logging similar to existing 'ep_rew_mean' fields, and managing comprehensive training cycles with proper documentation and version control for reproducible research outcomes.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('humaned-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Being appointed as Technical Director at HumanEd for the upcoming academic year represents an exciting new chapter, combining emerging leadership responsibilities with cutting-edge AI research. Taking on the OpenAI dexterity replication project provides invaluable experience in advanced robotics, reinforcement learning, and research management while developing both technical expertise and leadership capabilities.</p>
        <p>The transition from PyBullet to MuJoCo simulation environments in this new role demonstrates the importance of staying current with evolving technologies and adapting research methodologies for optimal performance. Beginning to manage complex research projects while maintaining systematic documentation and reproducible results is enhancing both technical and project management skills.</p>
        <p><strong>Emerging leadership and advanced technical expertise being developed:</strong></p>
        <ul className="learning-list">
            <li>Advanced Robotics Research: Learning MuJoCo simulation, Shadow Dexterous Hand environments, and complex manipulation task design</li>
            <li>Reinforcement Learning Leadership: Developing expertise in Stable-Baselines3, PPO algorithms, and custom reward function development</li>
            <li>Research Pipeline Management: Implementing systematic experimentation, TensorBoard custom logging, and reproducible research methodologies</li>
            <li>Technical Leadership: Beginning to direct research initiatives, environment setup, and coordinate complex AI projects</li>
            <li>Advanced Environment Management: Mastering Conda/venv setup, precise version control, and cross-platform development workflows</li>
            <li>Performance Analysis: Implementing custom metric systems, goal tracking, and comprehensive training validation techniques</li>
        </ul>
        <p>This new role emphasizes the critical importance of systematic research methodologies, proper documentation, and version control in advanced AI research. Beginning to lead complex projects from conception through implementation is developing strong technical leadership and research management capabilities.</p>
        <p>This Technical Director appointment at HumanEd represents an exciting opportunity to integrate advanced AI research leadership with practical educational technology applications, demonstrating the beginning of a journey to drive innovation while managing complex technical projects and research initiatives at the intersection of robotics, AI, and education.</p>
    </div>
);
