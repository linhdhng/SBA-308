
// If the learner’s submission is late (submitted_at is past due_at), 
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
    //combine data from given arrays into one array
    const currentDate = new Date();//declare a current date for comparision
    const combinedData = LearnerSubmissions.flatMap(submission => {//use flatMap to iterate over each submission in LearnerSubmissions and map them to the combined data.
    const assignment = AssignmentGroup.assignments.find(assignment =>//use find method to search for assignment in AssignmentGroup.assignments based on the assignment_id.
        assignment.id === submission.assignment_id && new Date(assignment.due_at) <= currentDate)//check for the assignments that has passed the due date;
        if (assignment) { //if assignment is found, return object with combined data
            const learnerId = submission.learner_id;
            const scoreRatio = submission.submission.score / assignment.points_possible;

            return [{
                id: learnerId,
                assignment_id: submission.assignment_id,
                score: scoreRatio
              }];
            }
          
            return [];
          });
          
    const groupedData = combinedData.reduce((accumulator, item) => {
        const { id, assignment_id, score } = item;
          
        if (!accumulator[id]) {
            accumulator[id] = { id: id };
        }
          
        if (assignment_id === 1) {
            accumulator[id][assignment_id] = parseFloat(score.toFixed(2))
        } else if (assignment_id === 2) {
            accumulator[id][assignment_id] = parseFloat(score.toFixed(2))
        }
          
        return accumulator
        }, {})
          
        for (const learnerId in groupedData) {
            const learner = groupedData[learnerId];
            const avg = (learner[1] + learner[2]) / 2;
            learner.avg = avg;
        }
          
    const result = Object.values(groupedData);
    console.log(result);
}

getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions)

