import { IsOptional, isString, IsString, IsUUID  } from "class-validator";

export class UpdateCarDto{
    
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?:string;

    @IsString()
    @IsOptional()
    readonly model?:string;
}