# 🛍️ NexCart

A modern **eCommerce web application** built with **Next.js**, **TypeScript**, and **Stripe**.  
Admin operations are powered by **Wix Dashboard**, ensuring easy content and product management.

---

## 🚀 Tech Stack

| Tool | Purpose |
|------|----------|
| **Next.js 14** | Frontend framework for server-side rendering and static generation |
| **TypeScript** | Type-safe development |
| **Wix** | Dashboard and content management |
| **Stripe** | Secure payment gateway |
| **Zustand** | Lightweight state management |
| **timeago.js** | Human-readable timestamps |
| **Tailwind CSS** | Styling and responsive UI |

---

## 📦 Features

- 🛒 Dynamic product listing & details  
- 💳 Stripe checkout integration  
- 👤 User authentication
- ⚙️ Wix Dashboard integration for product management  
- 🔄 Real-time updates using Zustand store  
- ⏰ Friendly timestamps via timeago.js  
- 🌙 Responsive UI with dark mode support *(optional)*

---

## 🏗️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/nexcart.git
cd nexcart
```

### 2️⃣ Install dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Setup environment variables

```bash
Create a .env.local file in the root directory and add:

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
WIX_API_KEY=your_wix_api_key
```

### 4️⃣ Run the development server

```bash
npm run dev
# or
yarn dev
```

### 🧱 Project Structure

```bash
nexcart/
│
├── app/                      # Next.js App Router folder
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (shared UI: header, footer, etc.)
│   ├── globals.css           # Global styles (Tailwind or custom CSS)
│   └── favicon.ico           # Site favicon
│
└── README.md                 # Project documentation
```

### 🧑‍💻 Author

***Mahmoud Mostafa Mahmoud Attia***
**Frontend Developer | React.js | Next.js | TypeScript**  
📧 [mahmoud309mostafa@gmail.com](mailto:mahmoud309mostafa@gmail.com)

## 📄 License
Licensed under the **MIT License © 2025 Mahmoud Mostafa (Jhonny)**.

