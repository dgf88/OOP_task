class Worker {
    constructor(name, surname, rate = 0, days = 0) {
        this.name = name;
        this.surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }

    get rate() {
        return this._rate;
    }

    set rate(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Property Rate must be number type');
        }
        if (value < 0 || !Number.isInteger(value)) {
            throw new RangeError('Property Rate must be positive integer');
        }
        this._rate = value;
    }

    get days() {
        return this._days;
    }

    set days(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Property Days must be number type');
        }
        if (value < 0 || !Number.isInteger(value)) {
            throw new RangeError('Property Days must be positive integer');
        }
        this._days = value;
    }

}

const worker1 = new Worker("John", "Miller", 100, 20);
console.log(worker1.getSalary());

const worker2 = new Worker("Sam", "Johnson", 200);
console.log(worker2.getSalary());