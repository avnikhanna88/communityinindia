# Community in India

A vibrant multi-community platform for promoting and supporting diverse groups—including designers, developers, DevOps, cyber security professionals, startups, and more! Each community has its own dedicated page, gallery, and ways to get involved.

## ✨ Features

- **Modern, Vibrant UI:** Built with Next.js and Tailwind CSS for speed and style.
- **Multi-Community Support:** Each community (e.g., Designers, Devs, DevOps, Cyber Security, Startup, Others) has its own page.
- **Contact Page:** Easily reach out to the platform administrators.
- **Blog Section:** Stay up to date with the latest articles and announcements.
- **Gallery:** Showcases each community’s highlights and activities.
- **Forms to Get Involved:**
  - Call for Community
  - Call for Venue
  - Call for Sponsors
  - Call for Speakers
  - Call for Mentors
  - Call for Judges

## 🖥️ Tech Stack

- [Next.js](https://nextjs.org/) (React framework)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)
- TypeScript

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/avnikhanna88/community-hub.git
   cd community-hub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in your browser.

## 🌐 Deployment

Deploy effortlessly on [Vercel](https://vercel.com/):

- Push your code to GitHub.
- Import the repository into Vercel.
- Vercel will automatically detect Next.js and deploy your site.

## 📁 Project Structure

```
community-hub/
├── components/
│   ├── Gallery.tsx
│   └── CallForForm.tsx
├── pages/
│   ├── blog/
│   │   ├── [slug].tsx
│   │   └── index.tsx
│   ├── community/
│   │   └── [community].tsx
│   ├── contact.tsx
│   ├── index.tsx
│   └── _app.tsx
├── public/
│   └── gallery/
│       ├── img1.jpg
│       ├── img2.jpg
│       └── img3.jpg
├── styles/
│   └── globals.css
├── tailwind.config.js
├── package.json
└── README.md
```

## 📝 Customization

- **Add more communities:** Update `communities` array in `pages/index.tsx`.
- **Connect forms to a backend:** Integrate with your favorite backend or services (e.g., Formspree, Google Forms, custom API).
- **Add gallery images:** Place images in `public/gallery/` and update `Gallery.tsx` as needed.

## 🙌 Contributing

Pull requests are welcome! For significant changes, please open an issue first to discuss what you’d like to change.

## 📬 License

[MIT](LICENSE)

---

**Made with ❤️ for the community!**
