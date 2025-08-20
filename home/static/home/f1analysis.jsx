import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('f1analysis-description'));

description.render(
    <div className="fade-in">
        <h2>F1Analysis 🏎️📊</h2>
        <p>F1Analysis is a Formula 1 data analytics platform that ingests timing, telemetry, and race event data to produce insightful visualizations and performance breakdowns across drivers, teams, and seasons. It enables comparative lap analysis, stint degradation modeling, pit strategy evaluation, sector pace profiling, and emerging imitation learning experiments on driver style.</p>
        <p><strong>Repository:</strong> <a href="https://github.com/carlkaziboni/F1Analysis" target="_blank" rel="noopener noreferrer">github.com/carlkaziboni/F1Analysis</a></p>
        <h3>Objectives</h3>
        <ul className="tech-list">
            <li>Standardize ingestion of multi-season F1 data (OpenF1 / ergast / telemetry exports)</li>
            <li>Generate multi-dimensional performance metrics (pace delta, tyre wear, degradation curves)</li>
            <li>Provide comparative driver analytics (qualifying vs race pace, consistency, tyre stint efficiency)</li>
            <li>Model pit stop strategy alternatives and undercut/overcut deltas</li>
            <li>Explore imitation learning of elite driver styles (e.g. Leclerc vs Hamilton)</li>
            <li>Deliver interactive dashboards for storytelling and data exploration</li>
        </ul>
        <h3>Repository Structure</h3>
        <pre className="code-block">F1Analysis/
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
            <li><strong>Data Sources:</strong> OpenF1 / fastf1 API for session & telemetry; ergast for historical results; custom CSV ingestion for supplemental timing.</li>
            <li><strong>Storage:</strong> Layered cache (fastf1 local cache + structured data frames / future relational store for sessions, laps, stints, pit events).</li>
            <li><strong>Feature Engineering:</strong> Lap pace normalization (tyre compound, fuel load), stint degradation polynomial/regression fitting, sector time variance metrics.</li>
            <li><strong>Strategy Modeling:</strong> Simulated race deltas under alternate pit laps using degradation + pit loss models.</li>
            <li><strong>Visualization:</strong> Interactive pace traces, tyre wear curves, delta overlays, box plots for consistency, rain impact overlays.</li>
            <li><strong>Architecture:</strong> Modular pipeline: ingest -&gt; transform -&gt; feature -&gt; model -&gt; visualize -&gt; dashboard.</li>
            <li><strong>Imitation Learning:</strong> Custom Gymnasium environment + behavior cloning to compare Hamilton vs Leclerc throttle/brake style, producing comparative style embeddings and plots.</li>
            <li><strong>Tech Stack:</strong> Python, Pandas, NumPy, fastf1/OpenF1, Plotly, Scikit-learn, Streamlit, Gymnasium.</li>
        </ul>
        <h3>Sample Installation</h3>
        <pre className="code-block">git clone https://github.com/carlkaziboni/F1Analysis.git
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
            <li>Built robust data alignment logic for merging telemetry, lap, and event streams from multiple F1 data sources</li>
            <li>Explored advanced modelling of tyre degradation vs stint length using polynomial and piecewise regression fits</li>
            <li>Learned critical trade-offs between raw pace and stint longevity in strategic pit window modeling</li>
            <li>Enhanced interactive dashboard UX for comparative multi-driver performance overlays and telemetry visualization</li>
            <li>Developed imitation learning pipeline to capture and compare elite driver throttle/brake styles with behavior cloning</li>
            <li>Future work: machine learning classification of optimal pit strategies under dynamic safety car probability scenarios</li>
        </ul>
        <p>F1Analysis bridges passion for motorsport with advanced data engineering and analytical modelling, showcasing domain-specific feature extraction, interactive storytelling, and the exciting intersection of AI and racing telemetry data.</p>
        
        <div className="project-links">
            <a href="https://github.com/carlkaziboni/F1Analysis" className="repo-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                <span>View F1Analysis Repository</span>
            </a>
        </div>
    </div>
);
