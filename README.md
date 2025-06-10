# 🤖 OpenAI Prompt Explorer (Spring AI + React)

This project is a full-stack application that integrates **Spring AI** (Java backend) with a beautiful **React UI frontend**. It allows users to send prompts to OpenAI and receive AI-generated responses through a friendly interface.

---

## 📌 Features

### 🔧 Backend (Spring Boot + Spring AI)
- Exposes a REST API endpoint to receive prompts.
- Uses OpenAI (ChatGPT) to generate a response.
- CORS-enabled for frontend integration.
- Built with Spring Boot, Spring AI, and WebFlux.

### 💅 Frontend (React + Tailwind CSS)
- Responsive, modern UI (Black 80%, Pink 20% theme).
- Textarea to input OpenAI prompt.
- Display response in a styled result box.
- Loading states and error handling included.

---

## 🛠️ Tech Stack

| Layer    | Technology           |
|----------|----------------------|
| Frontend | React, Tailwind CSS  |
| Backend  | Spring Boot, Spring AI, OpenAI API |
| API Comm | REST (Fetch API)     |

---

## 🚀 How It Works

1. User enters a prompt in the React UI.
2. On clicking **"Get OpenAI Response"**, the prompt is sent to the Spring AI endpoint.
3. Spring AI fetches the result from OpenAI.
4. Response is returned and displayed in the UI.

---

