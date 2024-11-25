import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSajtDto {
    @IsNotEmpty()
    nev: string;
    @IsNotEmpty()
    szarmazasiHely: string;
    @IsNotEmpty()
    iz: string;
    @IsNotEmpty()
    allag: string;
    @IsNotEmpty()
    @IsNumber()
    allagIndex: number;
}
