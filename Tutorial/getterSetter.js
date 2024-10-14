const course ={

    name: 'JavaScript for Beginers',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration} long`;
    },
    set details(values) {
        let parts =  values.split(' is ');
        this.name=parts[0];
        this.duration=parts[1];
    }
};


// console.log(course.details);

course.details = 'Java Course is 10 hours';
console.log(course.details);