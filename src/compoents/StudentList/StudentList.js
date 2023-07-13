import StudentCard from '../StudentCard/StudentCard';
import './StudentList.css';
export default function StudentList ({ studentData }){
  return <div className='StudentList'>
    {studentData.map((student) => <StudentCard key={`studentCard${student.id}`} student={student}/>)}

  </div>
}