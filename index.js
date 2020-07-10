class Worker {
    constructor(name, surname, rate, days = 0) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

const worker1 = new Worker("John", "Miller", 100, 20);
console.log(worker1.getSalary());

const worker2 = new Worker("Sam", "Johnson", 200);
console.log(worker2.getSalary());