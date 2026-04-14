# 📱 Social Media Mini Platform (MERN)

A lightweight, full-stack social media application designed to demonstrate the core functionalities of modern networking platforms like Instagram and Facebook. This project focuses on **real-time interaction**, **secure authentication**, and **scalable architecture**.

---

## 🚀 Overview
This platform allows users to engage in a digital community by creating posts, interacting through likes, and sharing thoughts via comments. Built using the **MERN Stack**, it serves as a robust foundation for understanding full-stack web development and RESTful API integration.

## Features
- Create, read, update and delete posts
- Like and unlike posts
- Create, reply to, read, update and delete nested comments
- Markdown for posts and comments
- Sign up and login using JWT for authentication
- Private message users in real-time using socket.io
- View profiles of users and browse through their posts, liked posts and comments
- Infinite scrolling 
- Sort posts by attributes such as like count, comment count and date created
- Profanity filtering and posting/commenting cooldowns
- Update bio which can be viewed by other users
- Search for posts by their title
- View the users who liked a particular post
- Fully responsive layout

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
    git clone [https://github.com/kartikjadon7/Social_Media_MERN_Project](https://github.com/kartikjadon7/Social_Media_MERN_Project)
    cd social-media-mini
    ```

2) Install dependencies  
```
cd social-media-app  
npm install
cd client
npm install
```
3) Create .env in root directory
```
cd ..
touch .env
```
4) Configure environment variables in your new .env file. To acquire your MONGO_URI, create a cluster for free over at https://www.mongodb.com/. The TOKEN_KEY is a secret key of your choosing, you can generate one at this site: https://randomkeygen.com/.
```
MONGO_URI=<YOUR_MONGO_URI> 
TOKEN_KEY=<YOUR_TOKEN_KEY>
PORT=4000
```
5) Run the server
```
npm run server
```
6) Start a new terminal and run react's development server
```
cd social-media-app
cd client
npm start
```

---

## Screenshots
### Explore view
![image](https://user-images.githubusercontent.com/76620777/170822044-44c5f2e6-879f-4b16-8059-f9e331ba57de.png)

### Post view
![image](https://user-images.githubusercontent.com/76620777/170822055-ac686a28-7d5b-4d44-b8d3-a028521534d8.png)

### Nested comments
![image](https://user-images.githubusercontent.com/76620777/170822065-64622f43-5f70-48c2-9503-0e1b80575fd2.png)

### Profile view
![image](https://user-images.githubusercontent.com/76620777/170822076-18741eef-ba2b-4750-b468-e7e9561a6a71.png)

### Real-time private messenger
![image](https://user-images.githubusercontent.com/76620777/170822084-89a9d3ac-22ed-4a92-ab58-9b0af878e03e.png)

### Search view
![image](https://user-images.githubusercontent.com/76620777/170821986-49d2a93a-5486-47fc-885e-37c0d3f628f3.png)



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
      <a href="https://github.com/Kartikey000111">
        <img src="https://github.com/Kartikey000111.png" width="80" height="80" style="border-radius: 50%;" alt="KartikeyDubey">
        <br/>
        <sub><b>KartikeyDubey</b></sub>
        <br/>
        <sub>@Kartikey000111</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Nailbitter">
        <img src="https://github.com/Nailbitter.png" width="80" height="80" style="border-radius: 50%;" alt="KartikeyGupta">
        <br/>
        <sub><b>KartikeyGupta</b></sub>
        <br/>
        <sub>@Nailbitter</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jayantkumar97600-bit">
        <img src="https://github.com/jayantkumar97600-bit.png" width="80" height="80" style="border-radius: 50%;" alt="JayantKumar">
        <br/>
        <sub><b>Jayant</b></sub>
        <br/>
        <sub>@jayantkumar97600-bit</sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jatinkantsharma-del">
        <img src="https://github.com/jatinkantsharma-del.png" width="80" height="80" style="border-radius: 50%;" alt="JatinkantSharma">
        <br/>
        <sub><b>JatinkantSharma</b></sub>
        <br/>
        <sub>@jatinkantsharma-del</sub>
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
