import { useEffect, useState } from 'react';
import './App.css';
import fe from './fetch_';

import StudentList from './compoents/StudentList/StudentList';

function App() {
  const [studentData, setStudentData] = useState([]);

  useEffect(()=>{
    async function forSync(){
      const ret = await fe.fetchStudents();
      if(ret) setStudentData(ret.data);
    }
    forSync();
  }, [])
  return (
    <div className="App">
      <StudentList studentData = {studentData} />
    </div>
  );
}

export default App;
