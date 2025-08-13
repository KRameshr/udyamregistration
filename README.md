# 🏢 Udyam Registration Automation

A full-stack project to automate and streamline the process of registering a business on the Udyam platform.  
Built with **Next.js** (frontend), **Express.js** (backend), and a **web scraper** module for automated data fetching.

---

## 🚀 Features Implemented

### ✅ Frontend (Next.js)
- User interface to input registration details.
- API integration with backend to send and receive data.
- Basic validation on form inputs.

### ✅ Backend (Express.js)
- REST API endpoints for user data submission.
- MongoDB integration for storing user registration details.
- CORS enabled for frontend-backend communication.
- Error handling and status response messages.

### 🟡 Scraper Module (Node.js + Puppeteer/Cheerio)
- Initial setup for scraping the Udyam portal.
- Planned functionality to:
  - Automate form filling on the official Udyam site.
  - Retrieve registration confirmation/status.
- **Status:** Partially implemented (base structure ready).

---

## 📂 Project Structure
udyamregistration/
│
├── udyam-frontend/ # Next.js frontend
├── udyam-backend/ # Express.js backend
├── udyam-scraper/ # Web scraper module
└── README.md # Documentation
