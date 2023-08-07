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
  students.forEach(student => {
    student.subjects.forEach(subject => {
      let sum = 0;
      subject.marks.forEach(mark => sum += mark)
      subject.averageMark = sum / subject.marks.length;
    });
  });
}

calcAveragePerSubject(students);
console.table(students);

const averageMarksPerSubject = calcAveragePerSubject(students);
console.log(JSON.stringify(averageMarksPerSubject, null, 2)); //Node.js cannot display the nested objects directly, so I used help of chatGPT



// Step 3: Calculate the average marks for each student

const calcAveragePerStudent = (students) => {
  students.forEach(student => {
    let sum = 0;
    student.subjects.forEach(subject => sum += subject.averageMark);
    student.finalMark = sum / student.subjects.length;
  });
};

calcAveragePerStudent(students);
console.log(JSON.stringify(students, null, 2))

const averageMarksPerStudent = calcAveragePerStudent(students);
// console.log(JSON.stringify(averageMarksPerStudent, null, 2));





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
  let sum = 0;
  students.forEach(student => sum += student.finalMark);
//OR
//const sum = students.reduce((sum, student) => sum += student.finalMark, 0);
  return sum / students.length;
};

const classAverage = calcClassAverage(students);
console.log("Class Average:", classAverage);
