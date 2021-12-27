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

console.log(scores.map((score) => score.name),scores); 

const result = scores.filter((score) => score.marks >40);
console.log(result);


const failed = scores.filter((score) => score.marks < 40);
console.log(failed);
const failednames = failed.map((score) => score.name);
console.log(failednames);