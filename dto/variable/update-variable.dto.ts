import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateVariableDto {
  @IsOptional()
  @IsString()
  description?: string | null;

  @IsOptional()
  @IsString()
  value?: string | null;
}
