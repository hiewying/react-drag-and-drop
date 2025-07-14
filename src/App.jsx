import './App.css'
import { useState } from 'react';
import Notes from './components/notes';

function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "I went to the store for one thing, came back with 15 things I didn’t need. Classic.",
    },
    {
      id: 2,
      text: "Me at a restaurant: I’ll be healthy today. Also me: Adds fries and a dessert to the order.",
    },
    {
      id: 3,
      text: "When you say you’ll start a new habit tomorrow, but tomorrow turns into next week.",
    },
  ]);

  return (
    <>
      <div>
        <Notes notes={notes} setNotes={setNotes} />
      </div>
    </>
  )
}

export default App
