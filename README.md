# QRTrack Pro 🔐📍

A secure QR Code Management, Assignment, and Tracking Platform built using the MERN Stack. The system enables administrators to generate unique QR codes, assign them to users, track scan activity and locations, and manage the complete QR lifecycle through a role-based access control system.

Designed for organizations requiring secure asset tracking, user verification, and centralized administrative oversight.

---

## 🚀 Overview

QRTrack Pro provides a centralized platform for generating, assigning, monitoring, and managing QR codes across multiple user roles.

The application follows a hierarchical administrative model:

* **Super Admin** – Complete system oversight and management
* **Admin** – QR generation and assignment management
* **User** – QR ownership and verification

Every QR code is uniquely generated, assigned to a specific user, and tracked throughout its lifecycle.

---

## ✨ Features

### 👑 Super Admin Dashboard

* View all registered admins and users
* Monitor QR generation activities
* Track QR assignments across the system
* View user scan history
* Monitor scan locations and timestamps
* Delete users and admins
* Remove generated QR codes
* Access organization-wide activity logs

### 🛠 Admin Dashboard

* Generate QR codes in bulk
* Create unique 16-character QR identifiers
* Download generated QR batches
* Assign QR codes to users
* View assignment history
* Manage generated QR inventories
* Track assigned and available QR codes

### 👤 User Dashboard

* Secure login and authentication
* View assigned QR code information
* Scan assigned QR codes
* Location tracking during scans
* Timestamp recording
* Access personal scan history
* Verify QR ownership

---

## 🔒 Security Features

* JWT Authentication
* Password Hashing using bcryptjs
* Role-Based Access Control (RBAC)
* Protected API Routes
* Secure User Sessions
* QR Ownership Validation
* Duplicate QR Prevention
* Route-Level Authorization

---

## 📍 Tracking & Monitoring

The platform maintains a complete audit trail for all QR activities.

Tracked Information:

* QR Code ID
* Assigned User
* Assigned Admin
* Scan Timestamp
* Device Location
* User Activity Logs
* Assignment History

This provides complete visibility into QR code usage across the system.

---

## 🔄 System Workflow

### QR Generation

1. Admin enters the number of QR codes to generate.
2. System generates unique QR codes with secure identifiers.
3. QR codes are stored in MongoDB.
4. Generated QR codes become available for assignment.

### QR Assignment

1. Admin selects a user.
2. Admin assigns an available QR code.
3. Ownership details are stored.
4. QR status changes from Available → Assigned.

### QR Verification

1. User scans the assigned QR code.
2. System validates ownership.
3. Scan activity is recorded.
4. Location and timestamp are captured.
5. Activity logs are updated.

### Monitoring

1. Super Admin accesses the dashboard.
2. Reviews assignments and scan logs.
3. Tracks users and QR activity.
4. Manages system resources.

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* React Router DOM
* Context API
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose ODM

### Additional Libraries

* QR Code Generator
* Geolocation API
* File Download Utilities
* Authentication Middleware

---

## 📁 Project Structure

```text
Noofdevices-demo2/
│
├── public/
│   └── vite.svg
│
├── server/
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Device.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   └── devices.js
│   │
│   ├── .env
│   ├── fixpassword.js
│   └── server.js
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── RoleSelection.jsx
│   │   ├── SuperAdminDashboard.jsx
│   │   ├── NormalAdminDashboard.jsx
│   │   ├── UserDashboard.jsx
│   │   └── Dashboard.css
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## 📊 Database Collections

### Users

Stores:

* User profile information
* Authentication credentials
* User roles
* Account metadata

### Devices / QR Records

Stores:

* QR identifiers
* Assignment information
* Ownership records
* Status information

### Activity Logs

Stores:

* Scan history
* User activities
* Location records
* Audit information

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* MongoDB Atlas Account
* npm

---

### Clone Repository

```bash
git clone https://github.com/yourusername/qrtrack-pro.git
cd qrtrack-pro
```

---

### Install Dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd server
npm install
```

---

### Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

### Start Backend Server

```bash
cd server
node server.js
```

---

### Start Frontend

```bash
npm run dev
```

---

### Open Application

```text
http://localhost:5173
```

---

## 📸 Screenshots

### Landing Page

Add screenshot here

### Super Admin Dashboard

Add screenshot here

### Admin Dashboard

Add screenshot here

### User Dashboard

Add screenshot here

---

## 🎯 Use Cases

* Asset Tracking Systems
* Device Management Platforms
* Employee Verification Systems
* QR-Based Authentication Systems
* Inventory Tracking Solutions
* Attendance Monitoring Systems
* Access Control Platforms

---

## 🚧 Future Enhancements

* Real-Time Notifications
* WebSocket Integration
* QR Expiration Management
* Advanced Analytics Dashboard
* Mobile Application Support
* Excel/PDF Reporting
* Cloud Storage Integration
* CI/CD Deployment Pipeline
* Docker Containerization

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes

```bash
git commit -m "Add amazing feature"
```

4. Push to the branch

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Tanmayee Chanda**

Full Stack Developer | MERN Stack Enthusiast | Building secure and scalable web applications.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
