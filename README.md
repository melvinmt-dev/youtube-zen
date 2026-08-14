# YouTube Zen - Distraction Blocker Extension

A cross-browser extension built to hide distracting elements on YouTube, allowing you to focus on what you actually came to watch. This extension features a minimalist "Zen Mode" toggle that replaces the clutter with a single, clean search bar and removes distracting sidebar recommendations.

> 💡 **Project Status:** This is a personal learning project built to explore cross-browser extension development using modern web technologies.

---

## 📸 Demo

<p align="center">
  <img src="./screenshots/youtube-home-before-after-comparison.gif" width="49%" alt="Home Page Comparison" />
  <img src="./screenshots/youtube-player-before-after-comparison.gif" width="49%" alt="Player Page Comparison" />
</p>

---

## 🔗 Credits & Inspiration

This project was built by following an excellent tutorial by **Aditya Singh** on YouTube.

- **Original Video Tutorial:** [Build a YouTube Distraction Blocker Browser Extension](https://www.youtube.com/watch?v=W8YURGBzmPA)
- **Creator's GitHub Repo:** [wxt-browser-extension](https://github.com/adityasinghcodes/wxt-browser-extension)

A big shout-out to Aditya for the amazing guide on utilizing the WXT framework!

---

## 🛠️ Tech Stack

- **Framework:** [WXT](https://wxt.dev) (Next-gen browser extension framework)
- **Library:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS

---

## 🚀 How to Install and Use

If you want to run or test this extension locally on your own computer, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org) and a package manager like `npm` or `pnpm` installed on your machine.

### 1. Clone and Install Dependencies

Open your terminal and run the following commands:

```bash
# Clone this repository
git clone https://github.com/melvinmt-dev/youtube-zen

# Navigate into the project folder
cd youtube-zen

# Install the required packages
pnpm install  # Or use 'npm install'
```

### 2. Run the Development Server

To build the project in dev mode for Chrome:

```bash
pnpm dev  # Or use 'npm dev'
```

For Firefox:

```bash
pnpm dev:firefox  # Or use 'npm dev:firefox'
```

This will automatically launch the extension in a new browser window and compile the extension into a hidden `.output/` folder inside your project.

---

## 🌐 Loading the Extension into Your Browser

Since this extension is built locally, you need to manually upload the compiled folder to your browser.

### For Google Chrome / Brave / Edge (Chromium)

1. To bundle the extension for Chrome based browsers, open your terminal and run:
   ```bash
   pnpm zip  # Or use 'npm run zip'
   ```
2. Open Chrome and type `chrome://extensions/` in the address bar.
3. In the top-right corner, turn **ON** the toggle for **Developer mode**.
4. Click the **Load unpacked** button in the top-left corner.
5. Open your project folder, look inside the `.output` directory, and select the `chrome-mv3` folder.
   - _Note for Mac users:_ Since `.output` starts with a dot, it might be hidden. Press `Command + Shift + .` to show hidden folders in the file picker.
6. Pin the **Zen YouTube** icon to your toolbar and start using it!

### For Mozilla Firefox

1. To bundle the extension for Firefox, open your terminal and run:
   ```bash
   pnpm zip:firefox  # Or use 'npm run zip:firefox'
   ```
2. Open Firefox and type `about:debugging` in the address bar.
3. Click on **This Firefox** on the left menu.
4. Click the **Load Temporary Add-on...** button.
5. Navigate to your project folder, go to `.output`, and select the `.zip` file that ends with `firefox.zip`.
6. Open YouTube and enjoy your distraction-free layout!

---

## 🌟 Key Features Learned

- Configuring a single codebase for multiple browsers using **WXT**.
- Isolating styling elements from native website styles using a **Shadow DOM (Shadow Root UI)**.
- Storing state globally across the popup and content scripts using **Browser Storage API**.
- Handling dynamic URL changes safely inside modern Single Page Applications (SPAs).
