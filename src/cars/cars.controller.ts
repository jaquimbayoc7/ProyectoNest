import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';


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
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto: UpdateCarDto){
        return this.carsService.update(id, updateCarDto);
    }

    @Delete('id/:id')
    deleteCar(@Param('id', ParseUUIDPipe) id:string){
        return this.carsService.delete(id);
    }
}
