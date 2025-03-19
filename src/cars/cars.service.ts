import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
            id:uuid(),
            brand: 'Honda',
            model:'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model:'Civic'
        },
        {
            id:uuid(),
            brand: 'Hyundai',
            model:'Creta'
        }
    ];

    findAll(){
        return this.cars
    }

    findOneById(id:string){
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

    create(createCarDto: CreateCarDto){
        
        const car: Car={
            id: uuid(), //...createCarDto
            model:  createCarDto.model,
            brand: createCarDto.brand
        }

        this.cars.push(car);

        return car;
    }

}
