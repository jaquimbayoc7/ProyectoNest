import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1,
            brand: 'Honda',
            model:'Corolla'
        },
        {
            id:2,
            brand: 'Honda',
            model:'Civic'
        },
        {
            id:3,
            brand: 'Hyundai',
            model:'Creta'
        }
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:number){
        const car = this.cars.find(car => car.id===id);

        return car;
    }

    findOneByBrand(brand:string){
        const br = this.cars.filter(car => car.brand===brand);

        return br;
    }
}
