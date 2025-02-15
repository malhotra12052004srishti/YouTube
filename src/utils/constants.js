const GOOGLE_API_KEY = "AIzaSyC7Zi_-mzfCu2iwTPb_g6tUnU0a3fqnM44";

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=49&regionCode=IN&key="+ GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Using it because it is a configurable value and it could be different for web and mobile.
export const OFFSET_LIVE_CHAT = 25;