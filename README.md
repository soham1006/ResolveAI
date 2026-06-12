# 🚀 ResolveAI - AI Powered Ticket Management System

ResolveAI is a full-stack AI-powered ticket management platform that automates issue classification, priority assignment, moderator allocation, and workflow orchestration using modern AI and event-driven architecture.

Built with React, Node.js, MongoDB, Gemini AI, and Inngest, the platform helps teams streamline support operations by intelligently analyzing tickets and routing them to the right people.

---

## ✨ Features

### 🔐 Authentication & Authorization

* Secure JWT-based authentication
* User signup and login
* Role-based access control
* Admin and User dashboards

### 🎫 Ticket Management

* Create and manage support tickets
* Track ticket status in real-time
* View ticket details and history
* Automatic ticket ownership tracking

### 🤖 AI-Powered Ticket Analysis

* Automated ticket understanding using Gemini AI
* Priority prediction (Low, Medium, High)
* Related skill extraction
* Helpful troubleshooting notes generation

### 👨‍💼 Smart Moderator Assignment

* Automatically assigns tickets to moderators based on skill matching
* Fallback assignment to administrators when no suitable moderator is found

### ⚡ Event-Driven Architecture

* Background workflows powered by Inngest
* Decoupled ticket processing
* Scalable asynchronous task execution

### 📧 Email Notifications

* Automated email alerts
* Welcome emails for new users
* Ticket assignment notifications

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### AI & Automation

* Gemini AI
* Inngest

### Authentication

* JWT
* bcrypt

### Email Service

* Nodemailer
* Mailtrap


## 🔄 Workflow

1. User creates a ticket.
2. Ticket is stored in MongoDB.
3. Inngest triggers background processing.
4. Gemini AI analyzes the issue.
5. Priority and related skills are extracted.
6. Suitable moderator is assigned automatically.
7. Ticket appears in the admin dashboard.

---

## 🎯 Future Enhancements

* Real-time notifications
* Team collaboration features
* Analytics dashboard
* Ticket comments and discussions
* AI-generated solutions
* Slack/Discord integrations
---

## 👨‍💻 Author

**Soham Mewada**

GitHub: https://github.com/soham1006
