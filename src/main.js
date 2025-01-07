// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fulfilled A');
//     }, 1000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
  
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Fulfilled B');
//     }, 3000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error));
  
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Rejected C');
//     }, 2000);
//   })
//     .then(value => console.log(value))
//     .catch(error => console.log(error)); // "Rejected C"
  