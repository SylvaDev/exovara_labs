const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Discord API base URL
const DISCORD_API_BASE = 'https://discord.com/api/v10';

// Helper function to extract image URLs from messages
const extractImageUrls = (messages) => {
  return messages
    .filter(message => message.attachments && message.attachments.length > 0)
    .flatMap(message => 
      message.attachments
        .filter(attachment => 
          attachment.content_type?.startsWith('image/') || 
          attachment.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)
        )
        .map(attachment => ({
          url: attachment.url,
          width: attachment.width,
          height: attachment.height,
          description: message.content || 'Project Update'
        }))
    );
};

// Endpoint to get channel messages
app.get('/api/discord/messages', async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const response = await axios.get(
      `${DISCORD_API_BASE}/channels/${process.env.DISCORD_CHANNEL_ID}/messages?limit=${limit}`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );
    
    const images = extractImageUrls(response.data);
    res.json(images);
  } catch (error) {
    console.error('Error fetching Discord messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages from Discord' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 