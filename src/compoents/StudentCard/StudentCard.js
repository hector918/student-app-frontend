import './StudentCard.css';
export default function StudentCard ({student}){
  const {email, company, firstName, lastName, pic, grades, id, skill} = student;
  let total = 0;
  for(let x of grades) total += Number(x);
  const average = (total / grades.length).toFixed(2);
  console.log(id)
  return <div className='StudentCard' key={`studentCard-id-${id}`}>
    <div className='StudentCard__avatar'>
      <img src={pic} alt={`${firstName} ${lastName}`} />
    </div>
    <div className='StudentCard__info'>
      <h1>{firstName} {lastName}</h1>
      <ul>
        <li>Email: {email}</li>
        <li>Company: {company}</li>
        <li>Skill: {skill}</li>
        <li>Average: {average}%</li>
      </ul>
    </div>
  </div>
}
