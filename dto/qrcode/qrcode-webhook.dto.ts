import { IsString, IsNotEmpty } from 'class-validator';

export class QrcodeWebhookDto {
  @IsString()
  @IsNotEmpty()
  data: string;
}
