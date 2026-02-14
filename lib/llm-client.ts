import axios from 'axios';

const OpenRouterAPI = async (input) => {
    try {
        const response = await axios.post('https://api.openrouter.ai/v1/models/DeepSeek-R1-0528/generate', {
            prompt: input,
            model: 'DeepSeek R1-0528',
            // other necessary configuration options
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`HTTP Error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error communicating with OpenRouter API:', error.message);
        throw error;
    }
};

export default OpenRouterAPI;
