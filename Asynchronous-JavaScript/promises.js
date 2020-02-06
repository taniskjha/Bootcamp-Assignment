const promise = new promise(function(resolve,rejct){
    setTimeout(() => {
        let error = false;
        if(!error) {
            resolve({text: 'Task is done'})
        }
        else {
            reject();
        }
        
    },1000)
});

promise
   .then((data) => {
       console.log(data)
   })

   .catch(()=> {
       console.log('something went wrong')
   })