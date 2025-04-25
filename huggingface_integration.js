import axios from 'axios';

const huggingfaceApiKey = process.env.HUGGINGFACE_API_KEY;
const huggingfaceApiEndpoint = 'https://api-inference.huggingface.co/models/';

export async function generateCompletion(modelId, prompt) {
  if (!huggingfaceApiKey) {
    throw new Error('HUGGINGFACE_API_KEY environment variable is required');
  }
  if (!modelId) {
    throw new Error('Model ID is required for Hugging Face API');
  }

  try {
    const response = await axios.post(
      huggingfaceApiEndpoint + modelId,
      {
        inputs: prompt,
      },
      {
        headers: {
          Authorization: `Bearer ${huggingfaceApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // The response format may vary; adjust as needed
    if (Array.isArray(response.data) && response.data.length > 0) {
      return response.data[0].generated_text || JSON.stringify(response.data);
    } else if (response.data.generated_text) {
      return response.data.generated_text;
    } else {
      return JSON.stringify(response.data);
    }
  } catch (error) {
    console.error('Hugging Face API error:', error.response?.data || error.message);
    throw error;
  }
}
