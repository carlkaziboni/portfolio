import { createRoot } from "react-dom/client";

// Overview content
const description = createRoot(document.getElementById('drps-description'));

description.render(
    <div className="fade-in">
        <p>Course Stability and 'Bloat' for Better Academic Planning at the University of Edinburgh provides a data-driven examination of course offering volatility and redundancy in DRPS. Using entropy-based stability metrics and semantic similarity analysis, the study proposes actionable strategies to improve timetabling and student planning.</p>
        <p><strong>Overview</strong></p>
        <p>This project investigates stability of course offerings and proposes solutions to reduce 'course bloat'—the proliferation of similar or redundant courses that complicate timetabling and academic planning.</p>
        <ul className="tech-list">
            <li>Entropy calculations for stability across rolling windows</li>
            <li>Time series trend analysis and K-means clustering of availability</li>
            <li>SBERT (Sentence-BERT) semantic embeddings and cosine similarity</li>
            <li>Heatmap visualizations and clustering for redundancy detection</li>
        </ul>
        <p><strong>Key Findings</strong></p>
        <ul className="feature-list">
            <li>Course Instability: Medium–high entropy during DRPS planning stages</li>
            <li>Course Redundancy: Pairs with up to 73% similarity (e.g., Intro to Computer Systems vs. Computer Architecture and Design)</li>
            <li>Planning Challenges: Last-minute timetable changes and delayed releases</li>
        </ul>
        <p><strong>Data Sources</strong></p>
        <ul className="learning-list">
            <li>DRPS snapshots: 10,000+ courses daily; codes, availability, credits, terms, schools, levels</li>
            <li>Web-scraped course descriptions, summaries, learning outcomes (Informatics: 216 courses)</li>
            <li>Open Government License compliance and ethical scraping with delays</li>
        </ul>
    </div>
);

// Technical deep dive
const technicalDeepDive = createRoot(document.getElementById('drps-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p><strong>Methodology</strong></p>
        <p>Stability Analysis</p>
        <ul className="feature-list">
            <li>Entropy calculations to quantify randomness in offerings; rolling-window analysis</li>
            <li>Trend tracking across credits, levels, delivery terms</li>
            <li>Time series clustering (K-means) to detect patterns</li>
        </ul>
        <p>Similarity Analysis</p>
        <ul className="feature-list">
            <li>Semantic embeddings via SentenceTransformer (all-MiniLM-L6-v2)</li>
            <li>Cosine similarity across descriptions, summaries, outcomes</li>
            <li>K-means clustering and heatmaps for similarity visualization</li>
        </ul>
        <p><strong>Repository Structure</strong></p>
        <ul className="learning-list">
            <li>Data/ — daily course data (drps-YYYY-MM-DD.xlsx)</li>
            <li>course_analysis.py — main analysis pipeline</li>
            <li>outputs/ — trends, entropy plots, similarity heatmaps, top pairs CSVs</li>
        </ul>
        <p><strong>Usage</strong></p>
        <ul className="tech-list">
            <li>pip install -r requirements.txt</li>
            <li>python course_analysis.py</li>
        </ul>
        <p><strong>Key Functions</strong></p>
        <ul className="tech-list">
            <li>compute_sbert_similarity()</li>
            <li>plot_similarity_matrix()</li>
            <li>get_top_similar_courses()</li>
        </ul>
        <p><strong>Key Results</strong></p>
        <ul className="feature-list">
            <li>High entropy: 20-credit, visiting, semester-specific courses</li>
            <li>Stable: Level 1 and Level 12 courses</li>
            <li>Peak instability: Apr–Jun 2024</li>
            <li>Redundancy clusters: &gt;60% similarity across multiple dimensions</li>
        </ul>
        <p><strong>Recommendations</strong></p>
        <ul className="learning-list">
            <li>Consolidate highly similar courses</li>
            <li>Reduce changes during peak planning</li>
            <li>Earlier deadlines for offering decisions</li>
            <li>Regular redundancy reviews across schools</li>
        </ul>
    </div>
);

// Reflection & learning
const reflectionAndLearning = createRoot(document.getElementById('drps-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p><strong>Limitations</strong></p>
        <ul className="feature-list">
            <li>Scope: Primarily Informatics (216 courses)</li>
            <li>Ethical scraping limits breadth and refresh speed</li>
            <li>Domain knowledge gaps for nuanced pedagogical differences</li>
            <li>Coverage: Apr 2023 – Jun 2024</li>
        </ul>
        <p><strong>Future Work</strong></p>
        <ul className="learning-list">
            <li>Advanced clustering (DTW for time series)</li>
            <li>Enhanced NLP with larger language models</li>
            <li>Cross-school expansion and real-time monitoring</li>
            <li>Qualitative interviews and enrollment impact analysis</li>
            <li>Prerequisite mapping and resource optimization</li>
        </ul>
        <p><strong>Technical Requirements</strong></p>
        <ul className="tech-list">
            <li>Python 3.8+, pandas, numpy, matplotlib, seaborn, scikit-learn</li>
            <li>sentence-transformers, beautifulsoup4, requests, scipy</li>
        </ul>
        <p><strong>License & Citation</strong></p>
        <ul className="feature-list">
            <li>Open Government License v3.0</li>
            <li>Course Stability and 'Bloat' for Better Academic Planning — University of Edinburgh, Apr 2025</li>
        </ul>
        <p><strong>Acknowledgments</strong></p>
        <ul className="learning-list">
            <li>David Sterratt for initial DRPS dataset</li>
            <li>University of Edinburgh OGL dataset availability</li>
            <li>School of Informatics support</li>
        </ul>
    </div>
);
