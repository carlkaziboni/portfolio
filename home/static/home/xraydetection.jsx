import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('xraydetection-description'));

description.render(
    <div className="fade-in">
        <p>Advanced multi-label chest X-ray disease detection system using deep learning - a comprehensive medical AI project that implements both custom CNN and transfer learning approaches to simultaneously detect multiple diseases and conditions from chest X-ray images. This system bridges cutting-edge AI with practical medical applications. 🩻</p>
        <p>Built with the NIH Chest X-ray dataset, this project features sophisticated multi-label classification capable of identifying 15 different disease categories including Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, and Pneumothorax. The system provides interpretable results through Grad-CAM visualization, showing exactly which areas the model focuses on.</p>
        <p>Features a complete Flask web application with intuitive upload interface, real-time prediction capabilities, and visual explanations via Grad-CAM heatmap overlays. The project demonstrates advanced computer vision techniques applied to medical imaging with proper validation and interpretability.</p>
        <p><strong>Comprehensive medical AI technology stack:</strong></p>
        <ul className="tech-list">
            <li>TensorFlow with custom CNN and Xception transfer learning models for multi-label classification</li>
            <li>Grad-CAM implementation for explainable AI and medical visualization</li>
            <li>Flask web application with secure file upload and real-time prediction capabilities</li>
            <li>OpenCV and TensorFlow for advanced image preprocessing and normalization</li>
            <li>Custom MultiLabelDataGenerator for efficient batch processing and multi-hot encoding</li>
            <li>NIH Chest X-ray dataset with 15 disease categories and multi-label annotations</li>
            <li>Database integration for upload history and detection results storage</li>
        </ul>
        <p>This project showcases the practical application of deep learning in healthcare, combining technical excellence with medical domain expertise to create interpretable AI solutions for diagnostic support.</p>
    </div>
);

const technicalDeepDive = createRoot(document.getElementById('xraydetection-technical-deep-dive'));

technicalDeepDive.render(
    <div className="slide-in-left">
        <p>The chest X-ray disease detection system implements sophisticated multi-label classification using both custom CNN architecture and transfer learning with pre-trained Xception models. The system processes NIH Chest X-ray dataset images through advanced preprocessing pipelines and generates interpretable results using Grad-CAM visualization techniques.</p>
        <p><strong>Advanced technical implementations and model architectures:</strong></p>
        <ul className="feature-list">
            <li>Custom CNN Model: 224×224×3 input with Conv2D layers (32, 64, 128 filters), MaxPooling, and Dense layers with sigmoid activation for multi-label output</li>
            <li>Transfer Learning Model: Pre-trained Xception base with Global Average Pooling and 15-unit sigmoid output layer for simultaneous disease detection</li>
            <li>Custom MultiLabelDataGenerator: Efficient batch processing with multi-hot encoding, image normalization, and data shuffling for optimal training</li>
            <li>Grad-CAM Visualization: Gradient-weighted Class Activation Mapping generating heatmaps showing model focus areas for medical interpretability</li>
            <li>Flask Web Application: Complete interface with secure file upload, real-time prediction, and visual results display with heatmap overlays</li>
            <li>Multi-label Classification: Binary crossentropy loss with Adam optimizer enabling simultaneous detection of multiple diseases (threshold &gt; 0.4)</li>
            <li>Advanced Preprocessing: 224×224 image resizing, normalization to 0-1 range, and dataset organization by disease categories</li>
            <li>Database Integration: SQLite backend storing upload history, detection results, and user interaction data</li>
            <li>Cross-platform Support: Web application with responsive design and mobile apps in development (iOS Swift, Android Kotlin)</li>
        </ul>
        <p>The system handles 15 disease categories including Atelectasis, Cardiomegaly, Effusion, Infiltration, Mass, Nodule, Pneumonia, and Pneumothorax with comprehensive validation using 80/20 train-validation split and rigorous evaluation metrics.</p>
        <p>Web interface features include intuitive upload functionality, real-time model inference, Grad-CAM heatmap generation, confidence visualization, and secure file handling with filename sanitization and database logging.</p>
    </div>
);

const reflectionAndLearning = createRoot(document.getElementById('xraydetection-reflection-and-learning'));

reflectionAndLearning.render(
    <div className="slide-in-right">
        <p>Developing the chest X-ray disease detection system was an intensive exploration of medical AI, combining deep learning expertise with healthcare applications. This project demonstrated the practical implementation of multi-label classification for simultaneous disease detection, requiring sophisticated understanding of both computer vision and medical imaging principles.</p>
        <p>The project encompassed the complete machine learning pipeline from data preprocessing through model deployment, including advanced visualization techniques for medical interpretability. Building both custom CNN and transfer learning approaches provided valuable insights into model architecture design for medical applications.</p>
        <p><strong>Key development achievements and medical AI expertise gained:</strong></p>
        <ul className="learning-list">
            <li>Mastered multi-label classification techniques for simultaneous disease detection in medical imaging</li>
            <li>Implemented Grad-CAM visualization for explainable AI and medical decision support interpretability</li>
            <li>Developed comprehensive Flask web application with real-time prediction and secure file handling</li>
            <li>Gained expertise in transfer learning using pre-trained Xception models for medical image analysis</li>
            <li>Created custom data generators for efficient multi-label medical dataset processing</li>
            <li>Built complete end-to-end system from model training through web deployment with database integration</li>
            <li>Learned medical domain knowledge including chest X-ray pathology and radiological interpretation</li>
        </ul>
        <p>The project emphasized the critical importance of interpretability in medical AI, where understanding model decisions is as important as accuracy. Grad-CAM visualization provides essential transparency for healthcare applications, enabling medical professionals to validate AI insights.</p>
        <p>This comprehensive medical imaging project showcases the ability to develop production-ready AI systems for healthcare applications, combining technical excellence with practical deployment considerations and medical domain expertise. The web application demonstrates real-world applicability with plans for mobile platform expansion.</p>
    </div>
);
