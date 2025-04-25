
Built by https://www.blackbox.ai

---

```markdown
# Neuron AI - Multi-LLM Deployment Station

## Project Overview

Neuron AI is an interactive web application designed to facilitate the deployment and management of AI agents across multiple language model providers such as Hugging Face, Google, Ollama, and OpenAI. The application allows users to easily configure agents, deploy them, and manage the interactions in a user-friendly interface.

## Installation

### Prerequisites
- Node.js (v14 or later)
- A modern web browser
- Environment variables set for API keys (Google API key, Hugging Face API key, OpenAI API key)

### Clone the repository

```bash
git clone https://github.com/inspector-apm/neuron-ai.git
cd neuron-ai
```

### Backend Setup

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory and add your API keys:
    ```
    GOOGLE_API_KEY=your_google_api_key
    HUGGINGFACE_API_KEY=your_huggingface_api_key
    OPENAI_API_KEY=your_openai_api_key
    ```

4. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate back to the project root directory:
    ```bash
    cd ..
    ```

2. Open `index.html` in your web browser. There is no additional setup required for the frontend, as it is a static HTML file.

## Usage

1. Access the application in your browser via `http://localhost:3001` (or the appropriate port if you have configured it differently).
2. Interact with the "Deploy" section to select a language model provider, configure agent settings, and deploy your AI agent.
3. Use the terminal-like interface to send commands to the deployed agent.

## Features

- **Multi-provider support**: Deploy agents using models from multiple providers such as Hugging Face, Google, OpenAI, and more.
- **User-friendly interface**: Simple deployment form allows configuration of agents with ease.
- **Deployment status tracking**: Monitor the status of your deployed AI agents in real-time.
- **Integrations with various APIs**: Seamlessly connect with external AI services for generating completions.

## Dependencies

The project requires the following backend dependencies, as specified in `package.json`:

```json
{
  "dependencies": {
    "axios": "^1.4.0",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^4.18.2",
    "type": "^2.7.3"
  }
}
```

## Project Structure

```
neuron-ai/
│
├── backend/
│   ├── server.js                   # Express server and API endpoints
│   ├── google_gemini_integration.js # Google Gemini API integration
│   ├── huggingface_integration.js   # Hugging Face API integration
│   ├── openai_integration.js        # OpenAI API integration
│   └── package.json                 # Backend dependencies and scripts
│
├── yootheme-agent-widget.php       # YOOtheme integration for AI agent interaction
│
├── index.html                      # Frontend HTML for interaction
│
└── README.md                       # Project documentation
```

## Conclusion

Neuron AI is an open-source initiative aimed at simplifying the process of deploying AI agents across different providers. Whether you are a developer looking to integrate AI capabilities into your application or a researcher leveraging multiple models, Neuron AI provides a flexible platform for all your needs. 

For more information and documentation, visit the official [Neuron AI website](https://neuron-ai.dev/) or check out our [GitHub repository](https://github.com/inspector-apm/neuron-ai).
```