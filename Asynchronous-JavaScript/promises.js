// A promise has 3 states. They are:

// 1 - Pending: You don't know if you will get that phone

// 2 - Fulfilled: Mom is happy, she buys you a brand new phone

// 3 - Rejected: Your mom is happy, she withholds the phone

// Creating a Promise (Pending state)

const willGetNewJobMom = new Promise(
    
    function(resolve,reject) {
        
        if(iWorkHard) {
            var gotJob = {
                company: 'amazon',
                postion: 'sde'
                
            }; 

            resolve(gotJob);   // promise fulfilled mom
        } else {
            var reason  = new error("i didn't worked hard consistently")
            rejct(reason); // rejcted
        }
    }
)

// calling our promise  (Fulfilled or Rejection state)

 var momAsked = function() {
    willGetNewJobMom
    .then(function(fulfilled) { console.log(fulfilled) })
    //  yay, Mom is happy 

    .catch(function(error) {
        console.log(error.message);
     // i didn't worked hard consistently

    })
 };

 // chaining Promises

 // I will buy my little sister a car after i get the job.  That is another promise 


 const promiseToSisterForCar = function (gotJob) {
     return new promise(
         function(resolve, reject) {
             const message = 'hey sis' + gotJob.company + 'now ill buy a car for you'

             resolve(message)
         }
     )
 }






