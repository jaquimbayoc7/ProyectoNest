import { Injectable, NotFoundException } from '@nestjs/common';

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

        if(!car){
            throw new NotFoundException(`Datos con Id '${id}' no existe!`);
        }

        return car;
    }

    findOneByBrand(brand:string){
        const br = this.cars.filter(car => car.brand===brand);

        return br;
    }

}
