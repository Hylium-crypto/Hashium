# Hashium Website

Official website for the Hashium cryptocurrency.

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Hylium-crypto/Hashium&root-directory=website)

### Option 2: Manual Deploy

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd website
vercel
```

3. Follow the prompts and choose the `website` directory as root.

## 🛠️ Local Development

```bash
cd website
npm install
npm run dev
```

Open http://localhost:5173

## 📁 Project Structure

```
website/
├── src/
│   ├── components/    # React components
│   ├── services/      # API services
│   └── App.tsx        # Main app
├── public/            # Static assets
└── vercel.json        # Vercel config
```

## 🌐 Production

After deploying, update the website URL in the main README.md.
