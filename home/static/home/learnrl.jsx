import { createRoot } from "react-dom/client";

const description = createRoot(document.getElementById('learnrl-description'));

description.render(
    <div className="fade-in">
        <h2>LearnRL 🤖🎮</h2>
        <p>This page showcases my journey through the Hugging Face Deep Reinforcement Learning Course. I completed all units, building agents across classic control, Atari, robotics, VizDoom, and multi-agent Unity environments.</p>
        <p><strong>Repository:</strong> <a href="https://github.com/carlkaziboni/learnRL" target="_blank" rel="noopener noreferrer">github.com/carlkaziboni/learnRL</a></p>
        <h3>Repository Structure</h3>
        <pre className="code-block">
learnRL/
├── unit1.ipynb           # Introduction to Deep RL
├── bonus_unit1.ipynb     # Additional Unit 1 exercises
├── unit2.ipynb           # Q-Learning fundamentals  
├── unit3.ipynb           # Deep Q-Networks (DQN)
├── unit4.ipynb           # Policy Gradient Methods
├── unit5.ipynb           # Actor-Critic Methods
├── unit6.ipynb           # Proximal Policy Optimization (PPO)
├── unit8_part1.ipynb     # Multi-Agent RL (Part 1)
├── unit8_part2.ipynb     # Multi-Agent RL (Part 2)
└── MARLAgents.ipynb      # Multi-Agent RL with Agents
        </pre>
    </div>
);

const technical = createRoot(document.getElementById('learnrl-technical-deep-dive'));

technical.render(
    <div className="slide-in-left">
        <h3>Key Topics & Libraries</h3>
        <ul className="tech-list">
            <li>MDPs, value-based (Q-Learning, DQN, Double DQN), policy-based (REINFORCE, Actor-Critic)</li>
            <li>Advanced algorithms: PPO, A2C, SAC, Multi-Agent RL (POCA)</li>
            <li>Stable-Baselines3, Gymnasium, Hugging Face Hub, Weights & Biases, PyTorch</li>
        </ul>
        <h3>Setup</h3>
        <pre className="code-block">
pip install gymnasium[classic_control,atari]
pip install stable-baselines3[extra]
pip install huggingface_hub
pip install wandb
pip install torch torchvision
pip install jupyter notebook
        </pre>
        <h3>How to Run</h3>
        <pre className="code-block">
git clone https://github.com/carlkaziboni/learnRL.git
cd learnRL
python -m venv rl_env
source rl_env/bin/activate  # On Windows: rl_env\\Scripts\\activate
pip install -r requirements.txt
huggingface-cli login
        </pre>
    </div>
);

const reflection = createRoot(document.getElementById('learnrl-reflection-and-learning'));

reflection.render(
    <div className="slide-in-right">
        <h3>Results Highlights</h3>
        <ul className="learning-list">
            <li>Perfect CartPole (500/500) with REINFORCE</li>
            <li>Space Invaders with DQN: 430.6 avg score</li>
            <li>Unity ML-Agents: SnowballTarget and Pyramids solved with PPO</li>
            <li>PandaReachDense robotics with A2C: -0.30 best mean reward</li>
            <li>Multi-Agent RL with POCA on SoccerTwos</li>
        </ul>
        <h3>Model Zoo Links</h3>
        <ul>
            <li><a href="https://huggingface.co/carlkaziboni/ppo-LunarLander-v1" target="_blank" rel="noopener noreferrer">PPO LunarLander-v1</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/Taxi-v3" target="_blank" rel="noopener noreferrer">Taxi-v3</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/dqn-SpaceInvadersNoFrameskip-v4" target="_blank" rel="noopener noreferrer">DQN SpaceInvaders</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/Reinforce-v2" target="_blank" rel="noopener noreferrer">REINFORCE CartPole-v1</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/Reinforce-v1" target="_blank" rel="noopener noreferrer">REINFORCE Pixelcopter-PLE-v0</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/ppo-SnowballTarget" target="_blank" rel="noopener noreferrer">PPO SnowballTarget</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/ppo-PyramidsRND" target="_blank" rel="noopener noreferrer">PPO Pyramids</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/a2c-PandaReachDense-v3" target="_blank" rel="noopener noreferrer">A2C PandaReachDense</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/poca-SoccerTwos" target="_blank" rel="noopener noreferrer">POCA SoccerTwos</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/ppo-LunarLander-v2" target="_blank" rel="noopener noreferrer">PPO LunarLander-v2</a></li>
            <li><a href="https://huggingface.co/carlkaziboni/rl_course_vizdoom_health_gathering_supreme" target="_blank" rel="noopener noreferrer">VizDoom Health Gathering</a></li>
        </ul>
        <p>Completing the course solidified my understanding across single-agent and multi-agent RL, with strong results on classic control, Atari, robotics, and custom environments.</p>
    </div>
);
