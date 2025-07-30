import { createRoot } from 'react-dom/client';

const description = createRoot(document.getElementById('overview'));

description.render(
    <div className="fade-in">
        <p>This human pose recognition system was developed for the <strong>Bundesliga AWS Eintracht Frankfurt Hackathon</strong>, an international competition where we narrowly missed advancing to the finals in Germany. The project implements a comprehensive sports analysis pipeline using Google's MoveNet pose estimation model combined with object detection and machine learning classifiers. 🏃‍♂️</p>
        
        <p>The system uses a sophisticated pipeline to extract 17 keypoints from human images using MoveNet Thunder, employs these keypoints as features for various machine learning models, and classifies poses into different sports-related categories. Additionally, it incorporates object detection to identify sports equipment like balls.</p>
        
        <div className="hackathon-highlight">
            <h3>🏆 Hackathon Achievement</h3>
            <p><strong>Bundesliga AWS Eintracht Frankfurt Hackathon</strong> - International competition focusing on sports technology and analytics. Our pose classification system showcased innovative approaches to real-time sports analysis and player movement tracking.</p>
        </div>
        
        <p><strong>Key features developed during the hackathon:</strong></p>
        <ul className="tech-list">
            <li>MoveNet Thunder integration for robust 17-keypoint pose detection</li>
            <li>Specialized ML models for Ball poses (3 classes), FullBody poses (11 classes), and HalfBody poses (2 classes)</li>
            <li>TensorFlow Object Detection API with Mask R-CNN for sports ball identification</li>
            <li>Flask web application with real-time image upload and pose analysis</li>
            <li>Comprehensive model comparison: Neural Networks, K-Nearest Neighbors, and MLP classifiers</li>
            <li>Smart vs Naive approach evaluation with K-Fold cross-validation</li>
        </ul>
        
        <p>More than just pose detection - it's a testament to innovative sports technology, combining cutting-edge AI with practical applications for player analysis and movement tracking in competitive football environments.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('technical'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The Player Pose Classifier was developed during the prestigious Bundesliga AWS Eintracht Frankfurt Hackathon using advanced computer vision and machine learning techniques. Built with Google's MoveNet pose estimation model, the system demonstrates sophisticated understanding of sports analytics and real-time player movement analysis.</p>
        
        <p><strong>Technical implementation highlights achieved during the competition:</strong></p>
        <ul className="feature-list">
            <li>Google MoveNet Thunder model for high-accuracy 17-keypoint pose detection</li>
            <li>TensorFlow Hub integration with optimized inference for real-time analysis</li>
            <li>TensorFlow Object Detection API with Mask R-CNN for sports ball detection (COCO class 37)</li>
            <li>Specialized classification models: MLP, Neural Networks, and K-Nearest Neighbors</li>
            <li>Smart approach with category-specific models vs naive single-model approach</li>
            <li>Flask web interface with secure file upload and real-time pose analysis</li>
            <li>K-Fold cross-validation for robust model performance evaluation</li>
            <li>Comprehensive pose categories: Ball poses, FullBody poses, HalfBody poses</li>
        </ul>
        
        <div className="approach-comparison">
            <h3>🧠 Smart vs Naive Approach Results</h3>
            <div className="results-grid">
                <div className="result-metric">
                    <div className="metric-label">Ball Classification</div>
                    <div className="metric-value">73.7%</div>
                    <div className="metric-description">3-class ball pose detection accuracy</div>
                </div>
                <div className="result-metric">
                    <div className="metric-label">FullBody Analysis</div>
                    <div className="metric-value">77%</div>
                    <div className="metric-description">11-class full body pose classification</div>
                </div>
                <div className="result-metric">
                    <div className="metric-label">HalfBody Recognition</div>
                    <div className="metric-value">100%</div>
                    <div className="metric-description">Perfect 2-class half body classification</div>
                </div>
                <div className="result-metric">
                    <div className="metric-label">Smart vs Naive</div>
                    <div className="metric-value">+15%</div>
                    <div className="metric-description">Performance improvement with specialized models</div>
                </div>
            </div>
        </div>
        
        <div className="code-showcase">
            <h3>🔧 How It Works</h3>
            <div className="code-section">
                <h4>Step 1: Pose Detection</h4>
                <div className="no-code-explanation">
                    <div className="step-card">
                        <div className="step-icon">📸</div>
                        <div className="step-content">
                            <h5>Image Input</h5>
                            <p>Upload a sports image through the web interface</p>
                        </div>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <div className="step-icon">🎯</div>
                        <div className="step-content">
                            <h5>MoveNet Analysis</h5>
                            <p>AI identifies 17 key body points (shoulders, elbows, knees, etc.)</p>
                        </div>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step-card">
                        <div className="step-icon">📊</div>
                        <div className="step-content">
                            <h5>Feature Extraction</h5>
                            <p>Convert body positions into numerical data for analysis</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="code-section">
                <h4>Step 2: Smart Classification</h4>
                <div className="no-code-explanation">
                    <div className="classification-grid">
                        <div className="classifier-card ball">
                            <h5>🏀 Ball Poses</h5>
                            <p><strong>3 Categories:</strong></p>
                            <ul>
                                <li>Holding ball</li>
                                <li>Holding ball 45° right</li>
                                <li>Holding ball 45° left</li>
                            </ul>
                            <div className="accuracy">73.7% Accuracy</div>
                        </div>
                        
                        <div className="classifier-card fullbody">
                            <h5>🏃 Full Body</h5>
                            <p><strong>11 Categories:</strong></p>
                            <ul>
                                <li>Fullbody</li>
                                <li>Hero</li>
                                <li>Celebration</li>
                                <li>Hands on hip 45° right</li>
                                <li>Hands on hip 45° left</li>
                                <li>Hands on hips 90° right</li>
                                <li>CrossedArmsFrontal</li>
                                <li>Crossed arms 45° right</li>
                                <li>Crossed arms 45° left</li>
                                <li>Crossed arms 90° right</li>
                                <li>Crossed arms 90° left</li>
                            </ul>
                            <div className="accuracy">77% Accuracy</div>
                        </div>
                        
                        <div className="classifier-card halfbody">
                            <h5>👤 Half Body</h5>
                            <p><strong>2 Categories:</strong></p>
                            <ul>
                                <li>Halfbody</li>
                                <li>Headshot</li>
                            </ul>
                            <div className="accuracy">100% Accuracy</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="code-section">
                <h4>Step 3: Enhanced Detection</h4>
                <div className="no-code-explanation">
                    <div className="detection-flow">
                        <div className="detection-card">
                            <h5>🔍 Object Detection</h5>
                            <p>Simultaneously identifies sports equipment (balls) in the image using advanced AI vision</p>
                        </div>
                        <div className="plus-icon">+</div>
                        <div className="detection-card">
                            <h5>🤝 Combined Analysis</h5>
                            <p>Merges pose data with object detection for comprehensive sports scene understanding</p>
                        </div>
                        <div className="equals-icon">=</div>
                        <div className="detection-card result">
                            <h5>⚽ Smart Sports AI</h5>
                            <p>Complete analysis of player movements and game context</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="code-section">
                <h4>The "Smart" Advantage</h4>
                <div className="no-code-explanation">
                    <div className="comparison-container">
                        <div className="approach-card naive">
                            <h5>❌ Naive Approach</h5>
                            <p>One model tries to classify all poses</p>
                            <div className="performance">Lower Accuracy</div>
                        </div>
                        <div className="vs-divider">VS</div>
                        <div className="approach-card smart">
                            <h5>✅ Smart Approach</h5>
                            <p>Specialized models for different pose types</p>
                            <div className="performance">+15% Better Performance</div>
                        </div>
                    </div>
                    <div className="advantage-explanation">
                        <p><strong>Why Smart Works Better:</strong> Each specialized model becomes an expert in its specific area, just like having different coaches for different sports skills!</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="tech-categories">
            <div className="tech-category">
                <h4>🎯 Core Technologies</h4>
                <ul className="tech-list">
                    <li>Google MoveNet Thunder for 17-keypoint pose estimation</li>
                    <li>TensorFlow Hub for pre-trained model integration</li>
                    <li>TensorFlow Object Detection API with Mask R-CNN</li>
                    <li>Flask web framework for real-time analysis interface</li>
                    <li>OpenCV for image processing and computer vision operations</li>
                    <li>Scikit-learn for traditional ML algorithms and evaluation</li>
                </ul>
            </div>
        </div>
        
        <p>The application demonstrates effective implementation of competitive AI development principles essential for hackathon success. Despite the time constraints, the project includes comprehensive model evaluation, proper cross-validation techniques, and meaningful performance comparisons between different approaches.</p>
        
        <p>Security features implemented during the competition include secure file upload handling, input validation, and proper error handling. The code structure emphasizes readability and maintainability even under pressure.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('reflection'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Building the Player Pose Classifier during the Bundesliga AWS Eintracht Frankfurt Hackathon was an incredible learning experience that tested and enhanced my computer vision and machine learning skills under intense international competition pressure. Participating in this prestigious sports technology hackathon taught me valuable lessons about rapid AI development, model optimization, and delivering innovative solutions within strict deadlines.</p>
        
        <p>The competition environment at the Bundesliga hackathon forced me to prioritize features effectively and focus on core functionality that delivers real value in professional sports analytics. Implementing the MoveNet pose estimation system under time pressure was particularly rewarding, as it required quick decision-making and efficient integration of multiple AI technologies.</p>
        
        <div className="journey-highlights">
            <div className="journey-card">
                <h4>🎯 Innovation Under Pressure</h4>
                <p>Rapidly pivoted from a 45% accuracy CNN approach to MoveNet pose estimation, demonstrating adaptability and strategic thinking under competition pressure.</p>
            </div>
            
            <div className="journey-card">
                <h4>🧠 Technical Excellence</h4>
                <p>Successfully implemented both naive and smart approaches, proving the value of specialized models and domain-specific optimization in sports analytics.</p>
            </div>
            
            <div className="journey-card">
                <h4>🌟 International Recognition</h4>
                <p>Narrowly missed advancing to the finals in Germany, showcasing strong technical merit and innovative thinking in competitive sports technology.</p>
            </div>
        </div>
        
        <p><strong>Key insights gained from the international competition:</strong></p>
        <ul className="feature-list">
            <li>Mastered advanced pose estimation techniques using Google's MoveNet architecture</li>
            <li>Gained expertise in sports-specific machine learning model development</li>
            <li>Enhanced understanding of real-time computer vision pipeline design</li>
            <li>Developed skills in competitive AI development and rapid iteration</li>
            <li>Learned to balance accuracy, performance, and practical applicability</li>
            <li>Strengthened ability to present complex AI solutions to technical judges</li>
        </ul>
        
        <p>The Bundesliga AWS Eintracht Frankfurt Hackathon reinforced the importance of building AI solutions that address real-world challenges in professional sports. The pose classification system demonstrates how advanced computer vision can enhance player analysis, tactical insights, and fan engagement in football.</p>
        
        <p>This project stands as proof of what's possible when cutting-edge AI meets sports innovation, showcasing the potential for technology to revolutionize how we understand and analyze athletic performance at the highest levels of competition.</p>
    </div>
);
