// TASK 7: Using Python or PHP or Java or Ruby or JavaScript
// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40

 var marks = prompt("Enter student marks (0-100): ");

if (marks > 79){
  grade = "A";
}else if( marks >=60){
   grade = "B";
}else if (marks >=50){
    grade = "C";
}else if(marks >= 40){
    grade = "D";
}else{
    grade = "E"
}
alert("Grade is :" + grade)

