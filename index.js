// create freelancers array filled w/ freelancer objects (Alice and bob)
const freelancers = [
  {name: `Alice`, occupation: `writer`, price: 30},
  {name: `Bob`, occupation: `teacher`, price: 50}
]
// console.log(freelancers)
const newFreelancers = [
  { name: "Carol", price: 70, occupation: "programmer"},
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
// TODO: push names on a time interval
// need to setTimeout()


const addFreelancers = (people) => {
  people.forEach((person) => freelancers.push(person));
  }
setInterval(addFreelancers(newFreelancers),3000);


//   // const test = () => {
//   //   newFreelancers.forEach((person) => {
//   //     freelancers.push(person)});i++; if (i < newFreelancers.length){
//   //       const changeIndex = () => {i++};        
//   //       setTimeout(() => {changeIndex},3000);
//   //       addMe;}}},


 
// // const addFreelancers = () => {
// //   newFreelancers.forEach((person) => {freelancers.push(person)});}

for (let i=0; i< newFreelancers.length; i++) {freelancers.push(newFreelancers[i])}







// Add freelancers to the html
// map() new (name, occupation, startice price) arrays
let freelancerNames = [];
const nameList = (people) => people.map((person) => person.name);
freelancerNames = nameList(freelancers)
// console.log(freelancerNames)

let freelancerJobs = [];
const occupationList = (people) => 
  people.map((person) => person.occupation);
freelancerJobs = occupationList(freelancers);


// update the average price everytime a starting price is added
// create a seperate array w/ the starting prices and get average
// map to get the new array and use reduce to get average
let priceList = []
const avgPriceCalculator = (businesses) => {
  priceList = businesses.map((business) => {
    return business.price});
    const priceSum = priceList.reduce((accumulator,currentValue) => {
      return accumulator + currentValue;},0);
      return Math.round(priceSum/priceList.length);
    }
    let avgPrice = 0
    avgPrice = avgPriceCalculator(freelancers)
    // console.log(avgPrice)
    // console.log(priceList)
    
    
    // loop through each
    // create li elements to add the freelancers's attributes to the html
    // grab the ul html element
    // append the li to the ul
    const appendNames = (names) => names.forEach((name) => {
      const li = document.createElement(`li`); 
      li.innerText = name;
      const ul = document.querySelector(`#name`);
      ul.append(li)    
    })
    appendNames(freelancerNames)
    
    const appendOccupation = (jobs) => jobs.forEach((job) => {
      const li = document.createElement(`li`);
      li.innerText = job;
      const ul = document.querySelector(`#occupation`);
      ul.append(li)
    });
    appendOccupation(freelancerJobs)
    
    const appendPrices =  (prices) => prices.forEach((price) => {
      const li = document.createElement(`li`);
      li.innerText = `$${price}`;
      const ul = document.querySelector(`#price`);
      ul.append(li);
    })
    appendPrices(priceList)
    
    // display a message w/ the average starting price
    appendAveragePrice = (price) => {
      const pElement = document.createElement(`p`);
      pElement.innerText = `The average starting price is $${price}.`;
      const h1 = document.querySelector(`#average-price`);
      h1.append(pElement)
    }
    appendAveragePrice(avgPrice)
    // const priceList = freelancers.map((business) =>  {business.startingPrice})
    /* Code didn't work initially b/c I used curly braces after the arrow
    in the anonymous f(x)*/
    
    // Add carol and random people to the list every few seconds
    // loop through newFreelancers and add them to freelancers []