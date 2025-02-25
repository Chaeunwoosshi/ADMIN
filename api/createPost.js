const { google } = require('googleapis');

// The handler for the serverless function
module.exports = async (req, res) => {
    // Ensure that the method is POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    // OAuth2 client credentials
    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID,      // Replace with your Google Client ID
        process.env.CLIENT_SECRET,  // Replace with your Google Client Secret
        "http://localhost:3000"     // Redirect URI (may not be needed)
    );

    // Set the credentials for OAuth2 client
    oauth2Client.setCredentials({
        access_token: process.env.ACCESS_TOKEN,  // Replace with your access token
    });

    // Initialize Blogger API
    const blogger = google.blogger({ version: 'v3', auth: oauth2Client });
    const BLOG_ID = process.env.BLOG_ID; // Replace with your actual Blog ID

    // Extract title, content, and labels from the incoming request body
    const { title, content, labels } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required.' });
    }

    try {
        // Process labels (convert to array if it's a string)
        const processedLabels = Array.isArray(labels) ? labels : labels.split(',').map(label => label.trim());

        // Prepare post data for Blogger API
        const postData = {
            title,
            content,
            labels: processedLabels,
        };

        // Create the post via Blogger API
        const response = await blogger.posts.insert({
            blogId: BLOG_ID,
            requestBody: postData
        });

        // Send a success response back to frontend
        res.status(200).json({ message: 'Post created successfully!', data: response.data });
    } catch (error) {
        // Handle errors from Blogger API
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Failed to create post', error: error.message });
    }
};
