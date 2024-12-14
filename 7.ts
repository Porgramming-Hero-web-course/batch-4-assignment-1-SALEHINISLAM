{
    //solving problem 7
    const currentYear: number = new Date().getFullYear()

    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string,
            model: string,
            year: number,) {
            this.make = make;
            this.model = model;
            this.year = year
        }
        getCarAge() {
            return currentYear - this.year
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    const result = car.getCarAge();
    console.log(result)
}