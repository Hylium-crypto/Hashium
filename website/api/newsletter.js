// Vercel Serverless Function - Newsletter API
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { email } = req.body || {};

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    // In production, this would save to a database
    console.log('Newsletter subscription:', email);

    res.status(200).json({ message: 'Thank you for subscribing!' });
}
