const { getChatCompletion } = require('../services/chatService');

const getChatResponse = async (req, res) => {
  try {
    const response = await getChatCompletion(req.body);
    res.json(response);
  } catch (error) {
    console.error('Error handling chat request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getChatResponse,
};
