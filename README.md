# 📝 React Drag-and-Drop Notes

This project is a minimal React.js interface with a **drag-and-drop** feature. Notes can be moved freely within the container, and the system ensures that **no two notes overlap** during placement.

<img width="773" height="481" alt="Screenshot 2025-07-14 150902" src="https://github.com/user-attachments/assets/e76b81e6-307d-4561-b21f-433c4b6b1125" />

## 🚀 Features

- 🖱️ Drag and drop notes around the screen
- 📌 Automatic collision detection to prevent overlapping

## 🧠 How It Works

When a note is dragged:
- The component checks its position against all other notes.
- If an overlap is detected, the note is prevented from being placed or gently nudged to the nearest available space.
- Collision detection uses bounding boxes (via `getBoundingClientRect()`).

## 📝 Installation

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/hiewying/react-drag-and-drop.git
   cd react-drag-and-drop
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

This will launch the application, and it should be accessible in your browser at http://localhost:5173


