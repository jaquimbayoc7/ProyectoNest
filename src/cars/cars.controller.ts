import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll()
    }

    @Get('id/:id')
    getCarById(@Param('id', ParseIntPipe)id){
        console.log({id})
       // throw new Error('Auxilio!')
        return this.carsService.findOneById(+id);
    }

    @Get('brand/:brand')
    getCarByBrand(@Param('brand')brand){
        console.log({brand})
        return this.carsService.findOneByBrand(brand);
    }
}
