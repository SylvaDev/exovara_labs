import axios from 'axios';

class DiscordService {
  constructor() {
    this.apiBase = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  }

  async getChannelMessages(limit = 10) {
    try {
      const response = await axios.get(`${this.apiBase}/discord/messages`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Discord messages:', error);
      return [];
    }
  }

  // Helper function to extract image URLs from messages
  extractImageUrls(messages) {
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
  }
}

const discordService = new DiscordService();
export default discordService; 