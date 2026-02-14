import { getTranscript } from 'youtube-transcript';

async function fetchYouTubeTranscript(videoId: string) {
    try {
        const transcript = await getTranscript(videoId);
        return transcript;
    } catch (error) {
        console.error('Error fetching transcript:', error);
        throw error;
    }
}

// Example usage
const videoId = 'your_video_id_here'; // replace with actual video ID
fetchYouTubeTranscript(videoId).then(transcript => {
    console.log(transcript);
});