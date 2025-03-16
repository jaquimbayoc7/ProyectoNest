import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
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
        //throw new Error('Auxilio!')
        return this.carsService.findOneById(+id);
    }

    @Get('brand/:brand')
    getCarByBrand(@Param('brand')brand){
        console.log({brand})
        return this.carsService.findOneByBrand(brand);
    }

    @Post()
    createCar(@Body() body:any){
        return body;
    }

    @Patch('id/:id')
    updateCar(
        @Param('id', ParseIntPipe) id:number,
        @Body() body:any){
        return body;
    }

    @Delete('id/:id')
    deleteCar(@Param('id', ParseIntPipe) id:number){
        return{
            method:'delete',
            id
        }
    }
}
