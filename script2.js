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
const studentsList = [
    //student1:
    {
      fname: "Kate", 
      subjects: [
        { subjectTitle: "math", marks: [8, 9, 10] },
        { subjectTitle: "chemistry", marks: [7, 9, 8] },
        { subjectTitle: "biology", marks: [10, 9, 10] },
         //add here more objects "subject" 
                ]
      },
    //student2:
     {fname: "Roxy", 
      subjects:[
        {subjectTitle: "math", marks: [9, 9, 10]},
        {subjectTitle: "chemistry", marks: [10, 9, 7]},
        {subjectTitle: "biology", marks: [8, 8, 8]},
         //add here more objects "subject" 
                ]
      },
    //student3:
     {fname: "Tory", 
      subjects:[
        {subjectTitle: "math", marks: [10, 9, 10]},
        {subjectTitle: "chemistry", marks: [8, 9, 7]},
        {subjectTitle: "biology", marks: []},
         //add here more objects "subject" 
                ]
      },
    //add more objects "student"
                       ];
  
  //Step 2: Calculate the average marks for each subject.
  //a) we define a function "calculateSubjectAverage" to calculate the average marks for a given subject.
  function calculateSubjectAverage (subject) {
    if (subject.marks.length === 0) {
      return " does not have marks for " + subject.subjectTitle;
    } else {
      const sumMarks = subject.marks.reduce ((sum, mark) => sum + mark, 0);
    return sumMarks / subject.marks.length;
    }
  }
  
  //b)we define a function "calculateSubjectAverageForStudent" to calculate the average marks for all subjects of a given student and used .forEach to calculate and display the average marks for each subject for every student.
  function calculateSubjectAverageForStudent (student) {
     student.subjects.forEach ((subject) => {
       if (subject.marks.length === 0) {
        console.log(student.fname + " does not have marks for " + subject.subjectTitle + ".");
         } else {
       const averagePerSubject = calculateSubjectAverage(subject);
       console.log(student.fname + "'s average mark for " + subject.subjectTitle + " is " + averagePerSubject + ".");
    }
     });}
    
  //For every student is displayed average mark of each subject.
  studentsList.forEach(calculateSubjectAverageForStudent);
  
  
  //Step 3: Calculate the total average mark for each student (cumulating all subjects).
  
  //helping function
  function totalAverages(student) {
    return student.subjects.map((subject) => calculateSubjectAverage(subject));
  }
  //a) we defined a function "calcTotalAverageForStudent" to calculate the total average mark for a student, considering all their subjects
  function calcTotalAverageForStudent (student) {
    const finalAverages = totalAverages(student);
    const sumAverages = finalAverages.reduce((sum, mark) => sum + mark, 0);
    return sumAverages/student.subjects.length;
  }
  
  //b) function calcTotalAverageForEachStudent uses function "calcTotalAverageForStudent" to display the final average mark for the current year for each student
  function calcTotalAverageForEachStudent (student) {
      if (student.subjects.length === 0) {
        console.log("does not have marks for any subject.");
      } else {
        const averagePerStudent = calcTotalAverageForStudent (student);
        if (isNaN(averagePerStudent)) {
          console.log(student.fname + "'s final average mark is not calculated because not all subjects were completed.");
        } else {
          console.log(student.fname + "'s final average mark for current year is " + averagePerStudent + ".");}
        
    }
  }
  
  //For every student is displayed final average mark for current year.
  studentsList.forEach(calcTotalAverageForEachStudent);
  
  //Step 4: Calculate the final average mark of class (cumulating all students).




// Helping function to filter out students without marks
function filterStudentsWithMarks(students) {
    return students.filter((student) => student.subjects.every((subject) => subject.marks.length > 0));
  }



  /*was used before introducing filter whcih extracts students without marks
  //helping function
  function allAverages(students) {
    return students.map((student) => calcTotalAverageForStudent(student));
  }
  */
  
  //a) we defined a function "calcFinalAverage" to calculate the final average mark for teh class, considering all its students and exculding students without all subjects completed
  function calcFinalAverage (students) {
    const filteredStudents = filterStudentsWithMarks(students);
    const excludedStudents = students.filter((student) => !filteredStudents.includes(student))

    if(filteredStudents.length === 0) {
        return {
            average: null,
            excludedStudents: excludedStudents
        };
    }
    const finalAverages = filteredStudents.map((student) => calcTotalAverageForStudent(student));
    const sumStudentsAverages = finalAverages.reduce((sum, mark) => sum + mark, 0);
    const classAverage = sumStudentsAverages / filteredStudents.length;
    
    return {
        average: classAverage,
        excludedStudents: excludedStudents
    };
  }
  

  function calcfinalAverageOfClass(students) {
    const finalAverage = calcFinalAverage(students);

    if (finalAverage.average === null) {
        console.log("No students with marks to calculate final class average.");
    } else {
        console.log("Final average mark for this class is " + finalAverage.average);
    }

    if (finalAverage.excludedStudents.length > 0) {
        console.log("The following students were exclulded from class average calculation: ");
        finalAverage.excludedStudents.forEach((student) => console.log(student.fname));
    }
  }
  
  // Calculate and display the final average mark for the class
  calcfinalAverageOfClass(studentsList);