import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto';

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

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`El id del carro no es válido`)

        this.cars = this.cars.map(car =>{
            if(car.id===id){
                carDB = {...carDB, ...updateCarDto, id}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id:string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
        console.log({car})
    }

}
