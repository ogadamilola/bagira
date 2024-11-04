export default async function handler(req, res) {
    const accessToken = process.env.NEXT_PUBLIC_IG_ACCESS_TOKEN;
    const limit = 6; // Number of posts to retrieve
  
    try {
      const response = await fetch(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${limit}&access_token=${accessToken}`
      );
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Instagram posts' });
    }
  }
  