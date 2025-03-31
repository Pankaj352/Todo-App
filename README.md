# Todo List App

A simple **MERN Stack** Todo List application that allows users to **add, update, delete, and manage tasks** with status and priority features.

## 🚀 Features
- **Create** new tasks with a title, description, status, priority, and deadline.
- **Update** task details, including title, description, status, and priority.
- **Delete** tasks.
- **Dynamic Status Update** (Pending → In-Progress → Completed).
- **Dynamic Priority Update** (Low → Medium → High).
- **Responsive UI** with Bootstrap.
- **MongoDB Database** for storing tasks.

## 📌 Tech Stack
- **Frontend:** React, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose

## 📂 Folder Structure
```
📂 todo-list-app
├── 📂 server
│   ├── 📂 config
│   │   └── db.js
│   ├── 📂 models
│   │   └── todo.js
│   ├── 📂 controllers
│   │   └── todoControllers.js
│   ├── 📂 routes
│   │   └── todoRoutes.js
│   ├── index.js
│   ├── .env
├── 📂 client
│   ├── 📂 components
│   │   └── TodoForm.jsx
│   │   └── TodoItem.jsx
│   │   └── TodoList.jx
│   ├── 📂 config
│   │   └── api.js
│   ├── App.js
│   ├── index.js
├── package.json
├── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### 2️⃣ Install Dependencies
#### Backend Setup
```bash
cd server
npm install
```

#### Frontend Setup
```bash
cd ../client
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file inside `backend/` and add:
```
MONGO_URI=your_mongodb_connection_string
PORT=port
```

### 4️⃣ Run the Application
#### Start Backend Server
```bash
cd backend
npm start
```

#### Start Frontend Server
```bash
cd ../frontend
npm start
```

The app will be running at **`http://localhost:3000`**

## 📝 API Endpoints
| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| POST   | `/todos/`           | Add a new task      |
| GET    | `/todos/`           | Get all tasks      |
| PUT    | `/todos/updateTodo/:id` | Update a task     |
| DELETE | `/todos/:id`        | Delete a task      |

## 📸 Screenshots
![Todo List UI](https://via.placeholder.com/600x300?text=Todo+List+App)

## 📜 License
This project is open-source and available under the **MIT License**.

---
### 💡 Contribution
Feel free to contribute by submitting a pull request or reporting issues.

👨‍💻 **Author:** [Pankaj Maurya](https://github.com/Pankaj352)

