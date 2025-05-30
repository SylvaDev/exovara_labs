# Exovara Labs

A full-stack web application that integrates with Discord to fetch and display images from a specified channel. Built with React, Node.js, and deployed on Vercel.

## 🌟 Features

- Real-time Discord image fetching and display (WIP)
- Responsive design using React and Bootstrap
- Secure API endpoints with environment variable management
- Discord bot integration for automated image retrieval (WIP)
- Modern UI/UX with reusable components

## 🛠️ Technologies Used

### Frontend
- React 18
- React Router DOM
- React Bootstrap
- Axios for API calls
- React Icons

### Backend
- Node.js
- Express
- Discord.js

### Deployment
- Vercel (Frontend)
- Environment Variables Management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Discord Developer Account
- Discord Server with a bot

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/exovara.git
cd exovara
```

2. Install frontend dependencies
```bash
npm install
```

3. Install backend dependencies
```bash
cd server
npm install
```

### Environment Setup

1. Create a `.env` file in the root directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

2. Create a `.env` file in the server directory:
```
DISCORD_CHANNEL_ID=your_channel_id
DISCORD_BOT_TOKEN=your_bot_token
PORT=5000
```

### Discord Bot Setup

1. Visit the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Navigate to the "Bot" section and create a bot
4. Enable the following permissions:
   - Read Messages/View Channels
   - Read Message History
5. Copy the bot token to your server's `.env` file
6. Enable Developer Mode in Discord settings to get your channel ID
7. Use the OAuth2 URL Generator to invite the bot to your server

### Running the Application

1. Start the backend server:
```bash
cd server
npm start
```

2. In a new terminal, start the frontend:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🔧 Development

### Project Structure
```
exovara/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── App.js
├── server/
│   └── index.js
└── package.json
```

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🚀 Deployment

The application is deployed on Vercel. The deployment process is automated through GitHub integration.

## 🔒 Security

- Environment variables are used for sensitive data
- API endpoints are protected
- Discord bot tokens are securely stored

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📝 License

This project is licensed under the MIT License

## 👤 Author

Your Name
- GitHub: [@SylvaDev](https://github.com/SylvaDev)
- LinkedIn: [@IrvingSylva](www.linkedin.com/in/irvingsylva)

## 🙏 Acknowledgments

- Discord.js for their excellent documentation
- Create React App for the initial project setup
- The React and Node.js communities for their amazing tools and support
