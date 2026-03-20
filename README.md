# 📱 Social Media Mini Platform (MERN)

A lightweight, full-stack social media application designed to demonstrate the core functionalities of modern networking platforms like Instagram and Facebook. This project focuses on **real-time interaction**, **secure authentication**, and **scalable architecture**.

---

## 🚀 Overview
This platform allows users to engage in a digital community by creating posts, interacting through likes, and sharing thoughts via comments. Built using the **MERN Stack**, it serves as a robust foundation for understanding full-stack web development and RESTful API integration.

### ✨ Key Features
* **User Authentication**: Secure Signup and Login using JWT (JSON Web Tokens).
* **Post Management**: Full CRUD operations for user posts (Create, Read, Update, Delete).
* **Interactive Engagement**: Real-time "Like" system and nested comment functionality.
* **Responsive Design**: A fluid UI built with React.js that works across desktop and mobile devices.
* **Dynamic Data**: Efficient data handling using MongoDB for persistent storage.

---

## 🛠️ Tech Stack

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | React.js | Single Page Application (SPA) Framework |
| **Backend** | Node.js & Express.js | Server-side logic and RESTful API routing |
| **Database** | MongoDB | NoSQL database for flexible data storage |
| **Auth** | JWT & Bcrypt.js | Secure token-based auth and password hashing |
| **State** | Context API / Hooks | Managing application-wide user state |

---

## 🏗️ System Architecture
The application follows a **Three-Tier Architecture** to ensure separation of concerns:

1.  **Presentation Layer (Frontend)**: React.js components handle the UI, forms, and client-side routing.
2.  **Application Layer (Backend)**: Node.js and Express manage the business logic, JWT middleware, and controllers.
3.  **Data Layer (Database)**: MongoDB stores collections for `Users`, `Posts`, and `Comments`.

### Logic Flow
`User Action` → `React UI` → `Axios API Call` → `Express Controller` → `MongoDB` → `Response back to UI`

---

## 🚦 Getting Started

### Prerequisites
* Node.js (v18+)
* npm or yarn
* MongoDB Atlas account or local MongoDB instance

### Installation

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/your-username/social-media-mini.git](https://github.com/your-username/social-media-mini.git)
    cd social-media-mini
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    npm install
    # Create a .env file and add your MONGO_URI and JWT_SECRET
    npm start
    ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm start
    ```

---

## 📋 API Endpoints (Planned)

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | User Signup |
| `POST` | `/api/auth/login` | User Login |
| `GET` | `/api/posts` | Fetch all posts |
| `POST` | `/api/posts` | Create a new post |
| `PUT` | `/api/posts/:id/like` | Like/Unlike a post |
| `POST` | `/api/posts/:id/comment` | Add a comment to a post |

---

## 👥 Contributors (Team Members)
* **Kartik Jadon** (2315001074)
* **Kartikey Gupta** (2315001078)
* **Kartikey Dubey** (2315001077)
* **Jayant Kumar** (2315001026)
* **Jatin Kant Sharma** (2315001015)

**Supervised by:** Yash Singh

---

## 📜 References
* [MongoDB Documentation](https://www.mongodb.com)
* [React.js Documentation](https://reactjs.org)
* [Node.js Official Guide](https://nodejs.org)
* [Express.js Guide](https://expressjs.com)

---


<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/kartikjadon7">
        <img src="https://github.com/kartikjadon7.png" width="80" height="80" style="border-radius: 50%;" alt="Kartik">
        <br/>
        <sub><b>Kartik</b></sub>
        <br/>
        <sub>@kartikjadon7</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kartikjadon7">
        <img src="https://github.com/kartikjadon7.png" width="80" height="80" style="border-radius: 50%;" alt="kartik">
        <br/>
        <sub><b>kartik</b></sub>
        <br/>
        <sub>@kartikjadon7</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kartikjadon7">
        <img src="https://github.com/kartik.png" width="80" height="80" style="border-radius: 50%;" alt="kartik">
        <br/>
        <sub><b>kartik</b></sub>
        <br/>
        <sub>@kartikjadon7</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kartikjadon7">
        <img src="https://github.com/kartikjadon7.png" width="80" height="80" style="border-radius: 50%;" alt="kartik">
        <br/>
        <sub><b>kartik</b></sub>
        <br/>
        <sub>@kartikjadon7</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kartikjadon7">
        <img src="https://github.com/kartikjadon7.png" width="80" height="80" style="border-radius: 50%;" alt="kartik">
        <br/>
        <sub><b>Kartik</b></sub>
        <br/>
        <sub>@kartikjadon7</sub>
      </a>
    </td>
  </tr>
</table>

<br/>

<div align="center">

**MiniProject Team —kartikjadon7@gmail.com**


---

</div>



*Developed for the Department of Computer Engineering, GLA University, Mathura.*
