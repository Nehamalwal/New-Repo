// let a = 10;     
// var b = 20;    

// function printVariables() {
//   console.log("Value of a:", a);
//   console.log("Value of b:", b);
// }

// printVariables(); 



// let marks = 30;
// if (marks < 32) {
//     marks += 2;  
//     if (marks >= 32) {
//         console.log(marks, "You are pass");
//     } else {
//         console.log(marks, "You are fail");
//     }
// }

//ARRAY
// let marks = [10,20,30,40]
//  console.log(marks);


// let marks = [10,20,30,40,50,60]
// marks.push(50)
// marks.pop(40)
// let rollno = ["A","B","C","D"]
// let arr = marks.concat(rollno);
// console.log(marks.slice(1,3))
// let arr = marks.join("and");
// console.log(arr);
// marks.push(50)
// marks.pop(40)


// let club = ["Neha", "Malwal", "Meet", "Verma", "Sanju", "Rishu"];

// if ((club.length) == 5) {  
//     console.log("Club is full");
//     console.log("Total members:", club.length); 
// } else {
//     console.log("Club is not full");
// }


// let grp_1=[1,2]
// let grp_2=[3,4,5]
// if((grp_1.length + grp_2.length)==5){
//     let grp_3 =grp_1.concat(grp_2);
//      grp_3.push(6)
//     console.log(grp_3)
// }

let club = ["Neha", "Malwal", "Meet", "Verma", "Sanju", "Rishu"];


// let fightingPeople = club.splice(1, 2); 

// console.log("Fighting people:", fightingPeople);
// console.log("Remaining club members:", club);
//  club.splice(1,0,"sdfghj")
 club.splice(1,2,"sdfghj")
console.log(club)
