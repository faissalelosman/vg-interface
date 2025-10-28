import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsIn(['TRIAL', 'ACTIVE', "ON HOLD"], { message: 'Status must be either "TRIAL" or or "ACTIVE" or "on hold"' })
  status: string;
}
