
// e.g. a learner with 50/100 on one assignment and 190/200 on another
// would have a weighted average score of 240/300 = 80%.
// "avg": number,
// each assignment should have a key with its ID,
// and the value associated with it should be the percentage that
// the learner scored on the assignment (submission.score / points_possible)

//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//   ]
// Additionally, if the learner’s submission is late (submitted_at is past due_at), 
// deduct 10 percent of the total points possible from their score for that assignment.


// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
    const combinedData = []; 
    //combine data from given arrays into one array
    AssignmentGroup.assignments.forEach(assignment => { //iterate through each assignments in AssignmentGroup array
        //filter data from LearnerSubmission array and store in a variable submissions
        const submissions = LearnerSubmissions.filter(sub => sub.assignment_id === assignment.id); 
        submissions.forEach(submission => {//iterate through each elements in the variable 
            const assignmentData = {//transform data name and store inside new object
                id: assignment.id,
                due_date: assignment.due_at,
                points: assignment.points_possible,
                learner_submission: {
                    learner_id: submission.learner_id,
                    submitted_at: submission.submission.submitted_at,
                    score: submission.submission.score
                }
            };
            combinedData.push(assignmentData); //push the new objects into the previous declared array
        });
    });
    const currentDate = new Date();
    //filter out the assignments that has not passed the due date
    const filteredData = combinedData.filter(item => {
        const dueDate = new Date(item.due_date);
        return dueDate < currentDate;
    });
    console.log(filteredData);
}

console.log(getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions));

