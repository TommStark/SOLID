



export abstract class Vehicle {

    abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }    

    getNumberOfSeats() {
        return this.numberOfSeats;
    }


    // getNumberOfTeslaSeats() {
    //     return this.numberOfSeats;
    // }

}

export class Audi extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    // getNumberOfAudiSeats() {
    //     return this.numberOfSeats;
    // }
}

export class Toyota extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    // getNumberOfToyotaSeats() {
    //     return this.numberOfSeats;
    // }
}

export class Honda extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

    // getNumberOfHondaSeats() {
    //     return this.numberOfSeats;
    // }
}

export class Volvo extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }

}

