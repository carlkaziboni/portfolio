import { createRoot } from 'react-dom/client';

// Android Description
const description = createRoot(document.getElementById('android-description'));
description.render(
    <div>
        <h2>Android Mobile Development Projects</h2>
        <p>
            A collection of three native Android applications showcasing modern mobile development practices, 
            clean architecture patterns, and diverse functionality ranging from utility apps to entertainment and image processing.
        </p>
        <p>
            These projects demonstrate proficiency in Java, Android SDK, Material Design, database management, 
            API integration, and image processing while maintaining clean code principles and user-centered design.
        </p>
        
        <div className="android-projects-grid">
            <div className="android-project-card">
                <div className="project-header">
                    <div className="project-icon">
                        <i className="fas fa-sticky-note"></i>
                    </div>
                    <h3>📝 NotesKeeper</h3>
                    <p className="project-subtitle">Android Notes App with Room Database</p>
                </div>
                <div className="project-features">
                    <h4>✨ Features</h4>
                    <ul>
                        <li>✅ Create, read, update, and delete notes</li>
                        <li>📱 Clean, intuitive Material Design interface</li>
                        <li>💾 Persistent storage using Room Database</li>
                        <li>🔄 Real-time updates with RecyclerView</li>
                        <li>🧵 Background thread processing for database operations</li>
                    </ul>
                </div>
                <div className="tech-stack">
                    <h4>🛠️ Tech Stack</h4>
                    <div className="tech-tags">
                        <span className="tech-tag">Room Database</span>
                        <span className="tech-tag">RecyclerView</span>
                        <span className="tech-tag">ConstraintLayout</span>
                        <span className="tech-tag">ViewBinding</span>
                        <span className="tech-tag">Java</span>
                    </div>
                </div>
                <a href="https://github.com/carlkaziboni/Notes" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                </a>
            </div>

            <div className="android-project-card">
                <div className="project-header">
                    <div className="project-icon">
                        <i className="fas fa-dragon"></i>
                    </div>
                    <h3>📱 Pokédex Android App</h3>
                    <p className="project-subtitle">Modern Pokédex with API Integration</p>
                </div>
                <div className="project-features">
                    <h4>✨ Features</h4>
                    <ul>
                        <li>🔍 Search functionality for 151 original Pokémon</li>
                        <li>📋 Complete listing with detailed information</li>
                        <li>📊 Type information, descriptions, and sprites</li>
                        <li>⭐ "Catch" Pokémon and build your collection</li>
                        <li>💾 Persistent storage with SharedPreferences</li>
                    </ul>
                </div>
                <div className="tech-stack">
                    <h4>🛠️ Tech Stack</h4>
                    <div className="tech-tags">
                        <span className="tech-tag">PokéAPI</span>
                        <span className="tech-tag">Volley</span>
                        <span className="tech-tag">RecyclerView</span>
                        <span className="tech-tag">AsyncTask</span>
                        <span className="tech-tag">SharedPreferences</span>
                    </div>
                </div>
                <a href="https://github.com/carlkaziboni/AndroidPokedex" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                </a>
            </div>

            <div className="android-project-card">
                <div className="project-header">
                    <div className="project-icon">
                        <i className="fas fa-camera"></i>
                    </div>
                    <h3>📸 AndroidFilter</h3>
                    <p className="project-subtitle">Real-time Image Processing App</p>
                </div>
                <div className="project-features">
                    <h4>✨ Features</h4>
                    <ul>
                        <li>🖼️ Image selection from device gallery</li>
                        <li>🎨 Multiple filter effects (Sepia, Cartoon, Sketch, Blur)</li>
                        <li>💾 Persistent storage of processed images</li>
                        <li>⚡ GPU-accelerated image transformations</li>
                        <li>🔒 Runtime permission management</li>
                    </ul>
                </div>
                <div className="tech-stack">
                    <h4>🛠️ Tech Stack</h4>
                    <div className="tech-tags">
                        <span className="tech-tag">Glide</span>
                        <span className="tech-tag">GPU Filters</span>
                        <span className="tech-tag">Content Providers</span>
                        <span className="tech-tag">Runtime Permissions</span>
                        <span className="tech-tag">Image Processing</span>
                    </div>
                </div>
                <a href="https://github.com/carlkaziboni/AndroidFilter" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
    </div>
);

// Technical Deep Dive
const technicalDeepDive = createRoot(document.getElementById('android-technical-deep-dive'));
technicalDeepDive.render(
    <div>
        <h2>Technical Architecture & Implementation</h2>
        
        <div className="architecture-section">
            <h3>📐 Architecture Patterns</h3>
            <div className="architecture-grid">
                <div className="architecture-card">
                    <h4>MVVM Pattern (NotesKeeper)</h4>
                    <ul>
                        <li><strong>Model:</strong> Room Database entities and DAOs</li>
                        <li><strong>View:</strong> Activities, Fragments, and XML layouts</li>
                        <li><strong>ViewModel:</strong> UI-related data and business logic</li>
                    </ul>
                    <div className="code-highlight">
                        <h5>Room Database Implementation</h5>
                        <pre><code>{`@Entity(tableName = "NotesTable")
public class Note {
    @PrimaryKey(autoGenerate = true)
    public int id;

    @ColumnInfo(name="text")
    public String text;
}`}</code></pre>
                    </div>
                </div>

                <div className="architecture-card">
                    <h4>API Integration (Pokédex)</h4>
                    <ul>
                        <li><strong>Network Layer:</strong> Volley for HTTP requests</li>
                        <li><strong>Data Model:</strong> Pokemon.java for structured data</li>
                        <li><strong>UI Updates:</strong> AsyncTask for background processing</li>
                    </ul>
                    <div className="code-highlight">
                        <h5>API Request Implementation</h5>
                        <pre><code>{`// Uses PokéAPI for comprehensive Pokémon data
// Implements efficient image loading
// Real-time search with filtering`}</code></pre>
                    </div>
                </div>

                <div className="architecture-card">
                    <h4>Image Processing (AndroidFilter)</h4>
                    <ul>
                        <li><strong>GPU Processing:</strong> Hardware-accelerated transformations</li>
                        <li><strong>Memory Management:</strong> Efficient image loading with Glide</li>
                        <li><strong>File System:</strong> Content provider integration</li>
                    </ul>
                    <div className="code-highlight">
                        <h5>Filter Implementation</h5>
                        <pre><code>{`// Wasabeef's Glide Transformations
// Multiple filter effects:
// - Sepia tone transformation
// - Cartoon/Toon effect
// - Sketch/Drawing filter
// - Blur/Gaussian filter`}</code></pre>
                    </div>
                </div>
            </div>
        </div>

        <div className="implementation-highlights">
            <h3>🔧 Implementation Highlights</h3>
            
            <div className="highlight-section">
                <h4>Database Operations (NotesKeeper)</h4>
                <div className="highlight-content">
                    <div className="feature-detail">
                        <h5>DAO Interface Design</h5>
                        <pre><code>{`@Dao
public interface NoteDao {
    @Query("SELECT * FROM NotesTable")
    List<Note> getAll();
    
    @Insert
    void insert(Note note);
    
    @Update
    void update(Note note);
    
    @Delete
    void delete(Note note);
}`}</code></pre>
                    </div>
                    <div className="feature-detail">
                        <h5>RecyclerView Adapter</h5>
                        <pre><code>{`public class NotesAdapter extends RecyclerView.Adapter<NotesAdapter.NoteViewHolder> {
    // Efficient list display with ViewHolder pattern
    // Real-time updates with notifyDataSetChanged()
    // Click listeners for edit/delete operations
}`}</code></pre>
                    </div>
                </div>
            </div>

            <div className="highlight-section">
                <h4>Network & Data Management (Pokédex)</h4>
                <div className="highlight-content">
                    <ul>
                        <li><strong>API Integration:</strong> PokéAPI for comprehensive Pokémon data</li>
                        <li><strong>Image Loading:</strong> Efficient sprite loading with caching</li>
                        <li><strong>Search Implementation:</strong> Real-time filtering of 151 Pokémon</li>
                        <li><strong>State Management:</strong> SharedPreferences for caught Pokémon persistence</li>
                        <li><strong>Navigation:</strong> Smooth transitions between list and detail views</li>
                    </ul>
                </div>
            </div>

            <div className="highlight-section">
                <h4>Image Processing Pipeline (AndroidFilter)</h4>
                <div className="highlight-content">
                    <ul>
                        <li><strong>Permission Handling:</strong> Runtime permission management for storage access</li>
                        <li><strong>Content Providers:</strong> Android framework integration for image selection</li>
                        <li><strong>GPU Acceleration:</strong> Hardware-accelerated filter transformations</li>
                        <li><strong>Memory Optimization:</strong> Efficient image loading and caching with Glide</li>
                        <li><strong>Error Handling:</strong> Comprehensive logging and error management</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="performance-considerations">
            <h3>⚡ Performance & Optimization</h3>
            <div className="performance-grid">
                <div className="performance-card">
                    <h4>Memory Management</h4>
                    <ul>
                        <li>Efficient RecyclerView implementation with ViewHolder pattern</li>
                        <li>Proper image loading and caching strategies</li>
                        <li>Background thread processing for database operations</li>
                    </ul>
                </div>
                <div className="performance-card">
                    <h4>UI Thread Optimization</h4>
                    <ul>
                        <li>AsyncTask for network operations and image processing</li>
                        <li>GPU-accelerated image transformations</li>
                        <li>Smooth scrolling with optimized list adapters</li>
                    </ul>
                </div>
                <div className="performance-card">
                    <h4>Resource Management</h4>
                    <ul>
                        <li>Proper lifecycle management for activities and fragments</li>
                        <li>Efficient bitmap handling and disposal</li>
                        <li>Battery-conscious background processing</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

// Reflection and Learning
const reflectionAndLearning = createRoot(document.getElementById('android-reflection-and-learning'));
reflectionAndLearning.render(
    <div>
        <h2>Development Journey & Learning</h2>
        
        <div className="learning-sections">
            <div className="learning-section">
                <h3>🎯 Project Goals & Challenges</h3>
                <div className="project-journey">
                    <div className="journey-card">
                        <h4>NotesKeeper - Database Mastery</h4>
                        <p>
                            This project started as an exploration of Android architecture components, specifically Room Database. 
                            The goal was to create a clean, functional app that demonstrates database best practices while serving 
                            a practical purpose.
                        </p>
                        <p>
                            <strong>Key Challenge:</strong> Implementing efficient database operations while maintaining a smooth user experience. 
                            Learning to balance between immediate UI updates and background database operations required careful 
                            consideration of Android's threading model.
                        </p>
                    </div>

                    <div className="journey-card">
                        <h4>Pokédex - API Integration & Data Management</h4>
                        <p>
                            Building the Pokédex app provided hands-on experience with REST API integration and complex data structures. 
                            The challenge was creating an engaging user experience while efficiently handling large datasets and images.
                        </p>
                        <p>
                            <strong>Key Challenge:</strong> Implementing efficient search functionality across 151 Pokémon while maintaining 
                            smooth scrolling performance. This required optimization of RecyclerView adapters and intelligent data filtering.
                        </p>
                    </div>

                    <div className="journey-card">
                        <h4>AndroidFilter - Performance & User Experience</h4>
                        <p>
                            The image processing app pushed the boundaries of mobile performance, requiring GPU-accelerated operations 
                            and careful memory management. This project taught valuable lessons about mobile hardware capabilities and limitations.
                        </p>
                        <p>
                            <strong>Key Challenge:</strong> Balancing image quality with processing speed while ensuring the app remains 
                            responsive. Learning to leverage hardware acceleration and external libraries effectively.
                        </p>
                    </div>
                </div>
            </div>

            <div className="learning-section">
                <h3>🚀 Technical Growth & Skills Developed</h3>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h4>Architecture & Design Patterns</h4>
                        <ul>
                            <li>MVVM architecture implementation</li>
                            <li>Separation of concerns and clean code principles</li>
                            <li>Activity and Fragment lifecycle management</li>
                            <li>ViewHolder pattern for efficient list displays</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h4>Database & Data Management</h4>
                        <ul>
                            <li>Room Database integration and DAO pattern</li>
                            <li>SQLite query optimization</li>
                            <li>SharedPreferences for simple data persistence</li>
                            <li>Background thread processing for database operations</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h4>Network & API Integration</h4>
                        <ul>
                            <li>REST API consumption with Volley library</li>
                            <li>JSON parsing and data model mapping</li>
                            <li>Error handling and network state management</li>
                            <li>Efficient image loading and caching strategies</li>
                        </ul>
                    </div>

                    <div className="skill-category">
                        <h4>Performance & Optimization</h4>
                        <ul>
                            <li>GPU-accelerated image processing</li>
                            <li>Memory management and leak prevention</li>
                            <li>UI thread optimization with background processing</li>
                            <li>Battery-conscious development practices</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="learning-section">
                <h3>🔮 Future Enhancements & Roadmap</h3>
                <div className="future-plans">
                    <div className="enhancement-category">
                        <h4>NotesKeeper Improvements</h4>
                        <ul>
                            <li>📂 Note categories and tagging system</li>
                            <li>✨ Rich text formatting capabilities</li>
                            <li>☁️ Cloud synchronization with Firebase</li>
                            <li>🌙 Dark mode support</li>
                            <li>🔍 Advanced search functionality</li>
                        </ul>
                    </div>

                    <div className="enhancement-category">
                        <h4>Pokédex Expansion</h4>
                        <ul>
                            <li>🆕 Support for additional Pokémon generations</li>
                            <li>📊 Detailed statistics and evolution chains</li>
                            <li>👥 Caught Pokémon collection view</li>
                            <li>🔊 Sound effects from the games</li>
                            <li>⚔️ Battle simulator features</li>
                        </ul>
                    </div>

                    <div className="enhancement-category">
                        <h4>AndroidFilter Advanced Features</h4>
                        <ul>
                            <li>🎚️ Filter intensity adjustment controls</li>
                            <li>📱 Social media sharing integration</li>
                            <li>🎨 Custom filter development tools</li>
                            <li>📹 Video filter processing capabilities</li>
                            <li>🤖 AI-powered automatic enhancement</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="learning-section">
                <h3>💡 Key Takeaways</h3>
                <div className="takeaways">
                    <p>
                        These Android projects have been instrumental in developing a comprehensive understanding of mobile development. 
                        Each project tackled different aspects of Android development, from database management to API integration 
                        and image processing.
                    </p>
                    <p>
                        The experience reinforced the importance of user-centered design, performance optimization, and clean architecture. 
                        Working with different libraries and frameworks helped understand the Android ecosystem and best practices 
                        for building scalable, maintainable mobile applications.
                    </p>
                    <p>
                        Moving forward, these foundations will support more complex projects involving modern Android development 
                        trends like Kotlin, Jetpack Compose, and advanced architectural patterns.
                    </p>
                </div>
            </div>
        </div>
    </div>
);
