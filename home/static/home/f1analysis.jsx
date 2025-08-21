import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('f1analysis-description'));

description.render(
    <div className="fade-in">
        <h2>F1Analysis 🏎️📊</h2>
        <p>A comprehensive Formula 1 telemetry analysis project that evolved from exploring race data visualizations to creating machine learning models that compare driving styles between Lewis Hamilton and Charles Leclerc. What started as curiosity about F1 telemetry data during the summer break turned into a deep dive into behavioral cloning and driver style analysis.</p>
        <h3>Project Journey</h3>
        <ul className="tech-list">
            <li><strong>Phase 1:</strong> Built interactive F1 dashboard analyzing Monaco GP 2025 telemetry data</li>
            <li><strong>Phase 2:</strong> Developed behavioral cloning models to learn and compare elite driver styles</li>
            <li><strong>Core Analysis:</strong> Used throttle, brake, gear, RPM, DRS, and position data to understand driving patterns</li>
            <li><strong>Key Results:</strong> Successfully captured unique characteristics - Leclerc's aggressive throttle vs Hamilton's strategic braking</li>
        </ul>
        <h3>Technical Implementation</h3>
        <ul className="tech-list">
            <li>Custom Gymnasium environment using Monaco GP 2025 real telemetry data (~18,000 records per driver)</li>
            <li>6-dimensional observation space: DRS, RPM, Speed, X/Y/Z positions</li>
            <li>3-dimensional action space: Throttle, Brake, Gear control</li>
            <li>Behavioral cloning with PyTorch achieving high correlation with expert demonstrations</li>
            <li>Interactive Streamlit dashboard for comprehensive F1 data exploration across sessions</li>
        </ul>
        <h3>Repository Structure</h3>
        <pre className="code-block">
F1Analysis/
├── app.py                      # Streamlit F1 dashboard
├── OpenF1Explore.ipynb         # Data exploration & API probing
├── imitationlearning/
│   ├── leclerc_hamilton_training_imitation.py  # Dual style imitation models
│   ├── simple_style_comparison.py              # Style metric comparison
│   ├── gymnasium_env/                          # Custom Gymnasium F1 env
│   └── *.png                                   # Generated visualizations
├── funcs/
│   ├── data_loader.py          # OpenF1 API integration
│   ├── data_processor.py       # Telemetry & event processing
│   └── visualiser.py           # Plotting utilities
└── README.md
        </pre>
    </div>
);

const technical = createRoot(document.getElementById('f1analysis-technical-deep-dive'));

technical.render(
    <div className="slide-in-left">
        <h3>Technical Deep Dive</h3>
        <ul className="feature-list">
            <li><strong>Data Sources:</strong> OpenF1 API for Monaco GP 2025 session telemetry - throttle, brake, gear, RPM, DRS status, and car positions</li>
            <li><strong>Data Processing:</strong> ~18,000 telemetry records per driver after cleaning with 150ms tolerance merge between car and location data streams</li>
            <li><strong>Machine Learning:</strong> Behavioral cloning using imitation library with PyTorch backend to replicate expert driving demonstrations</li>
            <li><strong>Environment Design:</strong> Custom Gymnasium environment with 6D observation space (DRS, RPM, Speed, X/Y/Z) and 3D action space (Throttle, Brake, Gear)</li>
            <li><strong>Model Training:</strong> Dual model approach - separate training for Hamilton and Leclerc driving styles with 50 epochs each</li>
            <li><strong>Performance Metrics:</strong> Leclerc model achieved 11.782 throttle MAE, Hamilton model 13.709 MAE with high expert correlation</li>
            <li><strong>Visualization:</strong> Comprehensive matplotlib-based comparisons showing action distributions, racing lines, and statistical analysis</li>
            <li><strong>Dashboard:</strong> Interactive Streamlit application for real-time F1 data exploration and session analysis</li>
        </ul>
        <h3>Key Findings</h3>
        <ul className="feature-list">
            <li><strong>Leclerc Style:</strong> More aggressive throttle application (+0.5%), higher average speeds, 73 gear changes per 500 simulation steps</li>
            <li><strong>Hamilton Style:</strong> Strategic braking patterns (+2.9% heavier), smoother control inputs, 85 gear changes showing more tactical approach</li>
            <li><strong>Monaco Focus:</strong> Circuit chosen for technical complexity demanding precise car control and amplifying driver style differences</li>
        </ul>
        <h3>Sample Installation</h3>
        <pre className="code-block">
git clone https://github.com/carlkaziboni/F1Analysis.git
cd F1Analysis
python -m venv f1_env
source f1_env/bin/activate
pip install -r requirements.txt
streamlit run app.py
        </pre>
    </div>
);

const reflection = createRoot(document.getElementById('f1analysis-reflection-and-learning'));

reflection.render(
    <div className="slide-in-right">
        <h3>Reflection & Learning</h3>
        <ul className="learning-list">
            <li>Successfully implemented behavioral cloning from real F1 telemetry data, capturing subtle differences in world-class driving techniques</li>
            <li>Mastered data pipeline challenges - merging car telemetry (throttle, brake, gear, RPM, DRS) with position data streams from OpenF1 API</li>
            <li>Developed deep understanding of Monaco GP characteristics and why this technical circuit amplifies driver style differences</li>
            <li>Created custom Gymnasium environment translating real-world F1 data into reinforcement learning problem space</li>
            <li>Learned to quantify and visualize the "art" of F1 racing through machine learning model comparisons</li>
            <li>Built comprehensive analysis showing Leclerc's aggressive throttle style vs Hamilton's strategic braking and gear management</li>
            <li>Future work: Multi-track analysis, real-time strategy prediction, and expanded telemetry data integration</li>
        </ul>
        <p>This summer break project evolved from curiosity about F1 data into a sophisticated AI-driven analysis tool. By combining modern machine learning with real telemetry data, it demonstrates how AI can understand and replicate human expertise in complex, high-performance domains like Formula 1 racing.</p>
        
        <div className="project-links">
            <a href="https://github.com/carlkaziboni/F1Analysis" className="repo-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>View F1Analysis Repository</span>
            </a>
        </div>
    </div>
);
