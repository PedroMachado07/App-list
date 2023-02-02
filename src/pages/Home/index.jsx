import React, {useState} from 'react';
import './style.css';

import { Card } from '../../componets/Card';

export function Home() {
  const [studentName, setStudantName] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit', 
      })
    };

    setStudents(prevState => [...prevState, newStudent]);

  }  


  return (
    <div className="container">
      <h1>Lista de presença</h1>
    
    
    <input 
    type="text" 
    placeholder="Digite o nome..." 
    onChange = {e => setStudantName(e.target.value)}
    />

    <button type="button" onClick={handleAddStudent}>
      Adicionar
    </button>

    {
      students.map(student => <Card name={student.name} time={student.time}/>)
    }
    </div>
  )
}

export default Home
