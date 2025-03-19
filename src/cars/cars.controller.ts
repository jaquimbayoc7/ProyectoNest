import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

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
    getCarById(@Param('id', ParseUUIDPipe)id:string){
        console.log({id})
        //throw new Error('Auxilio!')
        return this.carsService.findOneById(id);
    }

    @Get('brand/:brand')
    getCarByBrand(@Param('brand')brand){
        console.log({brand})
        return this.carsService.findOneByBrand(brand);
    }


    @Post()
    //@UsePipes(ValidationPipe)
    createCar(@Body() createCarDto:CreateCarDto){
        return this.carsService.create(createCarDto);
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
