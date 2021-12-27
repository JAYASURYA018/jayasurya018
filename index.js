const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

// console.log(scores.map((score) => score.name),scores); 

// const result = scores.filter((score) => score.marks >40);
// console.log(result);

// average of marks
function getavg(scores){
  
  const total = scores.reduce((sum,cur) => sum + cur ,0);
  return total / scores.length;
}
const average = getavg(scores);
console.log(average);
// 2.topper of the class
const Topper = scores.filter((score) => score.marks > 90);
 console.log(Topper);
 const TopperName = Topper.map((score) => score.name);
 console.log(TopperName);