const course ={

    name: 'JavaScript for Beginers',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration} long`;
    },
    set details(values) {

        if(typeof values !== 'string'){
            throw new Error(`Value , ${values} is not a string`);
        }// throwing an exception

        let parts =  values.split(' is ');
        this.name=parts[0];
        this.duration=parts[1];
    }
};


// console.log(course.details);

// course.details = 'Java Course is 10 hours';
// console.log(course.details);


// course.details =23;
// console.log(course.details);


try{
    course.details=42;
}catch(ex){
    console.log(`Caught an error: ${ex.message}`);
}