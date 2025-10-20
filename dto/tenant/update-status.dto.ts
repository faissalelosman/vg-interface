import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['active', 'on hold'], { message: 'Status must be either "active" or "on hold"' })
  status: string;
}
