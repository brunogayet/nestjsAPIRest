import { IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
