// Se dă o listă de obiecte care reprezintă o listă de studenți. Obiectul de tip student are următoarele proprietăți:
// firstName: string
// subjects: [
//   {
//     name: string(mathematics, literature, physics, etc…..);
//     students: array of numbers
//   }
//   …..
// ]

// Să se calculeze media la fiecare materie școlară, media generală la toate obiectele, și media generală a tuturor studenților.


//average per subject
//total student's average
//average for class


//Step 1: Define the list of student objects with their properties.
const students = [
  //student1:
  {
    fname: "Kate",
    subjects: [
      { title: "math", marks: [8, 9, 10] },
      { title: "chemistry", marks: [7, 9, 8] },
      { title: "biology", marks: [10, 9, 10] },
    ]
  },
  //student2:
  {
    fname: "Roxy",
    subjects: [
      { title: "math", marks: [9, 9, 10] },
      { title: "chemistry", marks: [10, 9, 7] },
      { title: "biology", marks: [8, 8, 8] },
    ]
  },
  //student3:
  {
    fname: "Tory",
    subjects: [
      { title: "math", marks: [10, 9, 10] },
      { title: "chemistry", marks: [8, 9, 7] },
      { title: "biology", marks: [7, 6, 5] },
    ]
  },
];


// Step 2: Calculate the average marks for each subject
const calcAveragePerSubject = (students) => {
  /*
  1.parcurgem fiecare obiect din array (for.Each/ for of/while/do while...)
  2. pentru fiecare student vom parcurge fiecare obiect din student.subjects. Acum vom avea acces la " { title: "math", marks: [10, 9, 10] }"
  3. pentru acest obiect calculam media generala:
  (subject) -> com calcula media si vom adauga o noua proprietate:averageMark: a number
   */

  const averagePerSubject = (marks) => {
    let sum = 0;
    marks.forEach((mark) => {
      sum += mark;
    });
    return sum / marks.length;
  }

  students.forEach((student) => {
    student.subjects.forEach((subject) => {
      const average = averagePerSubject(subject.marks);
      subject.averageMark = average;
    });
  });
  return students;
}

const averageMarksPerSubject = calcAveragePerSubject(students);
console.log(JSON.stringify(averageMarksPerSubject, null, 2)); //Node.js cannot display the nested objects directly, so I used help of chatGPT



// Step 3: Calculate the average marks for each student

const calcAveragePerStudent = (students) => {
  /*
1.parcurgem fiecare obiect din array (for.Each/ for of/while/do while...)
2. pentru fiecare student vom calcula media la toate obiectele (parcurgem fiecare subject, facem o suma din averageMark)
pentru obiectul nstru vom adauga o noua proprietate: averageMarh: suma/ student.subjects.length
let sum = 0;
student.subjects.forEach(subject => sum += subject.averageMark)

3. pentru subiectul nostru vom adauga o npua proprietate: averageMark: sum / student.subjects.length
 */
const averagePerStudent = (averageMarks) => {
  let sum = 0;
averageMarks.forEach((averageMark) => {
  sum += averageMark;
});
return sum / averageMarks.length;
};

students.forEach((student) => {
  const averageMarks = student.subjects.map((subject) => subject.averageMark);
  const average = averagePerStudent(averageMarks);
  student.finalMark = average;
});

return students;
};

const averageMarksPerStudent = calcAveragePerStudent(students);
console.log(JSON.stringify(averageMarksPerStudent, null, 2));





// Step 4: Calculate the class average

  /*
  1.parcurgem fiecare obiect din array (for.Each/ for of/while/do while...)
  2. pentru fiecare student vom face o suma din student.averageMark
  3. vom returna averageMark / students.length


  let sum = 0;
student.forEach(student) => average += student.averageMark)
return average / students/length;
    */

  // return average;

  const calcClassAverage = (students) => {
    const allAverageMarks = students.map((student) => student.finalMark);
    const classAverage = allAverageMarks.reduce((sum, mark) => sum + mark, 0) / allAverageMarks.length;
    return classAverage;
  };
  
  const classAverage = calcClassAverage(students);
  console.log("Class Average:", classAverage);
