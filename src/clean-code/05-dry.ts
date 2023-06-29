type Size = '' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product{
    constructor(
        public name: string = '',
        public price : number = 0,
        public size: Size = '',
    ){}


     isProductValid():boolean {
        for (const key in this){
            switch (typeof this[key]){  
                case 'string':
                    if((<string><unknown>this[key]).length <= 0 ){ throw new Error(`${key} is required`); }
                    break;
                case 'number':
                    if(<number><unknown>this[key] <= 0 ){ throw new Error(`${key} is zero`); }
                    break;
                default:
                     throw new Error(`${typeof this[key]} is invalid`);
        }
        return true;
    }
    }

    toString(){
        // if(this.name.length <= 0 ){ throw new Error('Name is required'); }
        // if(this.price === 0 ){ throw new Error('price is zero'); }
        // if(this.size.length <= 0 ){ throw new Error('size is required'); }

        if (!this.isProductValid()) return;


        return `Product: ${this.name} (${this.price}), ${this.size} }`;
    }
}

(
    () => { 
    const bluePants = new Product('Blue Large Pants', 20, 'L')
    console.log(bluePants.toString());

}
)();