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
            <li>Specialized ML models for Ball poses (3 classes), FullBody poses (10 classes), and HalfBody poses (2 classes)</li>
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
                    <div className="metric-description">10-class full body pose classification</div>
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
            <h3>🔧 Core Implementation</h3>
            <div className="code-section">
                <h4>MoveNet Pose Detection Pipeline</h4>
                <pre className="code-block">
{`import tensorflow as tf
import tensorflow_hub as hub
import numpy as np
import cv2
from PIL import Image

# Load MoveNet Thunder model from TensorFlow Hub
model = hub.load("https://tfhub.dev/google/movenet/singlepose/thunder/4")
movenet = model.signatures['serving_default']

def preprocess_image(image_path):
    """Preprocess image for MoveNet Thunder input"""
    image = tf.io.read_file(image_path)
    image = tf.image.decode_image(image)
    
    # Resize and pad to 256x256 maintaining aspect ratio
    input_image = tf.cast(tf.image.resize_with_pad(
        tf.expand_dims(image, axis=0), 256, 256), dtype=tf.int32)
    
    return input_image

def extract_keypoints(image_path):
    """Extract 17 keypoints using MoveNet Thunder"""
    input_image = preprocess_image(image_path)
    
    # Run MoveNet inference
    outputs = movenet(input_image)
    keypoints = outputs['output_0']
    
    # Extract keypoint coordinates (17 points x 3 values: y, x, confidence)
    keypoints_with_scores = keypoints[0, 0, :, :].numpy()
    
    # Filter by confidence threshold
    confidence_threshold = 0.3
    filtered_keypoints = []
    
    for i, (y, x, confidence) in enumerate(keypoints_with_scores):
        if confidence > confidence_threshold:
            filtered_keypoints.extend([x, y])  # x, y coordinates
        else:
            filtered_keypoints.extend([0.0, 0.0])  # Zero for low confidence
    
    return np.array(filtered_keypoints)  # 34 features (17 points * 2 coords)

# MoveNet keypoint mapping (COCO format)
KEYPOINT_DICT = {
    'nose': 0, 'left_eye': 1, 'right_eye': 2, 'left_ear': 3, 'right_ear': 4,
    'left_shoulder': 5, 'right_shoulder': 6, 'left_elbow': 7, 'right_elbow': 8,
    'left_wrist': 9, 'right_wrist': 10, 'left_hip': 11, 'right_hip': 12,
    'left_knee': 13, 'right_knee': 14, 'left_ankle': 15, 'right_ankle': 16
}`}
                </pre>
            </div>
            
            <div className="code-section">
                <h4>Smart Classification Approach</h4>
                <pre className="code-block">
{`from sklearn.neural_network import MLPClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import cross_val_score, KFold
from sklearn.preprocessing import StandardScaler
import joblib

class SmartPoseClassifier:
    def __init__(self):
        """Initialize specialized models for different pose categories"""
        # Ball poses: 3 classes (ball_kick, ball_catch, ball_throw)
        self.ball_classifier = MLPClassifier(
            hidden_layer_sizes=(100, 50, 25),
            activation='relu',
            solver='adam',
            max_iter=1000,
            random_state=42
        )
        
        # FullBody poses: 10 classes (run, jump, slide, tackle, etc.)
        self.fullbody_classifier = KNeighborsClassifier(
            n_neighbors=5,
            weights='distance',
            metric='euclidean'
        )
        
        # HalfBody poses: 2 classes (upper_body, lower_body_focus)
        self.halfbody_classifier = MLPClassifier(
            hidden_layer_sizes=(64, 32),
            activation='tanh',
            solver='lbfgs',
            random_state=42
        )
        
        # Feature scalers for each category
        self.ball_scaler = StandardScaler()
        self.fullbody_scaler = StandardScaler()
        self.halfbody_scaler = StandardScaler()
    
    def train_smart_approach(self, ball_data, fullbody_data, halfbody_data):
        """Train specialized models - Smart Approach"""
        # Prepare Ball pose data (3 classes)
        ball_features = self.ball_scaler.fit_transform(ball_data['keypoints'])
        self.ball_classifier.fit(ball_features, ball_data['labels'])
        
        # Prepare FullBody pose data (10 classes)  
        fullbody_features = self.fullbody_scaler.fit_transform(fullbody_data['keypoints'])
        self.fullbody_classifier.fit(fullbody_features, fullbody_data['labels'])
        
        # Prepare HalfBody pose data (2 classes)
        halfbody_features = self.halfbody_scaler.fit_transform(halfbody_data['keypoints'])
        self.halfbody_classifier.fit(halfbody_features, halfbody_data['labels'])
        
        print("Smart approach training completed!")
    
    def evaluate_with_kfold(self, data, model, scaler, cv_folds=5):
        """K-Fold cross-validation for robust evaluation"""
        kf = KFold(n_splits=cv_folds, shuffle=True, random_state=42)
        features = scaler.transform(data['keypoints'])
        
        scores = cross_val_score(model, features, data['labels'], 
                               cv=kf, scoring='accuracy')
        
        return {
            'mean_accuracy': scores.mean(),
            'std_accuracy': scores.std(),
            'individual_scores': scores
        }
    
    def predict_pose_category(self, keypoints, category='auto'):
        """Predict pose using appropriate specialized model"""
        if category == 'ball':
            features = self.ball_scaler.transform([keypoints])
            prediction = self.ball_classifier.predict(features)[0]
            confidence = self.ball_classifier.predict_proba(features)[0].max()
            
        elif category == 'fullbody':
            features = self.fullbody_scaler.transform([keypoints])
            prediction = self.fullbody_classifier.predict(features)[0]
            # KNN doesn't have predict_proba, calculate distance-based confidence
            distances = self.fullbody_classifier.kneighbors([features[0]])[0]
            confidence = 1.0 / (1.0 + distances.mean())
            
        elif category == 'halfbody':
            features = self.halfbody_scaler.transform([keypoints])
            prediction = self.halfbody_classifier.predict(features)[0]
            confidence = self.halfbody_classifier.predict_proba(features)[0].max()
        
        return prediction, confidence

# Results achieved during Bundesliga Hackathon:
# Ball Classification: 73.7% accuracy (3-class)
# FullBody Analysis: 77% accuracy (10-class)
# HalfBody Recognition: 100% accuracy (2-class)
# Smart vs Naive improvement: +15% average performance boost`}
                </pre>
            </div>
            
            <div className="code-section">
                <h4>Object Detection Integration</h4>
                <pre className="code-block">
{`import tensorflow as tf
from object_detection.utils import config_util
from object_detection.builders import model_builder

class BallDetectionPipeline:
    def __init__(self):
        """Initialize TensorFlow Object Detection API with Mask R-CNN"""
        # Load pre-trained Mask R-CNN model
        self.detection_model = tf.saved_model.load(
            'mask_rcnn_inception_resnet_v2_1024x1024_coco17_gpu-8'
        )
        
        # COCO dataset class ID for sports ball
        self.BALL_CLASS_ID = 37
        self.confidence_threshold = 0.5
    
    def detect_ball(self, image_path):
        """Detect sports ball in image using Mask R-CNN"""
        image = tf.io.read_file(image_path)
        image = tf.image.decode_image(image)
        input_tensor = tf.convert_to_tensor(image)
        input_tensor = input_tensor[tf.newaxis, ...]
        
        # Run detection
        detections = self.detection_model(input_tensor)
        
        # Filter for ball detections
        ball_detections = []
        for i in range(len(detections['detection_classes'][0])):
            if (detections['detection_classes'][0][i] == self.BALL_CLASS_ID and 
                detections['detection_scores'][0][i] > self.confidence_threshold):
                
                ball_detections.append({
                    'bbox': detections['detection_boxes'][0][i].numpy(),
                    'confidence': detections['detection_scores'][0][i].numpy(),
                    'class': 'sports_ball'
                })
        
        return ball_detections
    
    def combine_pose_and_object_detection(self, image_path):
        """Combine MoveNet pose detection with ball detection"""
        # Extract human pose keypoints
        pose_keypoints = extract_keypoints(image_path)
        
        # Detect sports ball
        ball_detections = self.detect_ball(image_path)
        
        # Enhanced analysis combining both
        analysis_result = {
            'pose_keypoints': pose_keypoints,
            'ball_detected': len(ball_detections) > 0,
            'ball_detections': ball_detections,
            'combined_confidence': self.calculate_combined_confidence(
                pose_keypoints, ball_detections
            )
        }
        
        return analysis_result`}
                </pre>
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
