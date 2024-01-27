
<h1>SBA 308: JavaScript Fundamentals</h1>
<p>Create a script that gathers data, processes it, and then outputs a consistent result as described by a specification</p>
<ul>
  <li>Employ basic JavaScript syntax accurately.</li>
  <li>Implement control flow structures such as conditionals and loops effectively.</li>
  <li>>Use arrays and objects to organize and manage data.</li>
  <li>Develop functions to create reusable code.</li>
  <li>Utilize loops and iteration to navigate through data collections.</li>
  <li>Implement error handling to manage potential code failures gracefully.</li>
</ul>

<p>
  Analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:</p>
<p>{<br>
    <em>// the ID of the learner for which this data has been collected</em><br>
    <b></b>"id": number,<br>
    <em>// the learner’s total, weighted average, in which assignments</em><br>
    <em>// with more points_possible should be counted for more</em><br>
    <em>// e.g. a learner with 50/100 on one assignment and 190/200 on another</em><br>
    <em>// would have a weighted average score of 240/300 = 80%.</em><br>
    <b></b>"avg": number,<br>
    <em>// each assignment should have a key with its ID,</em><br>
    <em>// and the value associated with it should be the percentage that</em><br>
    <em>// the learner scored on the assignment (submission.score / points_possible)</em><br>
    <b><assignment_id>: number,</b><br>
    <b><assignment_id>: number,</b><br>
    <em>// if an assignment is not yet due, it should not be included in either</em><br>
    <em>// the average or the keyed dictionary of scores</em><br>
}<br>
</p>
