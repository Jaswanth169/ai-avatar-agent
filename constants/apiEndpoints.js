require('dotenv').config();

module.exports = {
  API_ENDPOINTS: {
    BACKEND_PORT: process.env.BACKEND_PORT || 3000,
    GET_ASSISTANT_RESPONSE: process.env.GET_ASSISTANT_RESPONSE || '/getAssistantResponse',
  },
  SUB_API_ENDPOINTS: {
    CHATS: process.env.CHATS || '/chats',
  }
};
