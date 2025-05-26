const studentData = [
    { id: 1, name: "Alice", subject: "Math", grade: "A" },
    { id: 2, name: "Bob", subject: "Science", grade: "B" },
    { id: 3, name: "Charlie", subject: "History", grade: "A-" },
    { id: 4, name: "Diana", subject: "English", grade: "B+" },
    { id: 5, name: "Edward", subject: "Math", grade: "C" },
  ];

const getGradeColor = (grade) => {
  const gradeColorMap = {
    'A': '#4CAF50',  
    'A-': '#81C784', 
    'B+': '#FFD54F', 
    'B': '#FFEE58',  
    'B-': '#64B5F6', 
    'C+': '#BA68C8', 
    'C': '#FF8A65',  
    'C-': '#E57373', 
    'D+': '#A1887F', 
    'D': '#78909C',  
    'F': '#F44336'   
  };

  return gradeColorMap[grade] || '#9E9E9E';
};

export default function Table() {
  

  return (
    <table className="table table-dark my-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Grade</th>
        </tr>
      </thead>
      <TableBody props={studentData} />
    </table>
  );
}


function TableBody() {
  
  return (
    <tbody>
      {studentData.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.subject}</td>
          <td style={{color: getGradeColor(item.grade)}}>{item.grade}</td>
        </tr>
      ))}
    </tbody>
  )
}



