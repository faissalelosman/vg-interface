import { IsString } from 'class-validator';

export class SlackWebhookDto {
  @IsString()
  token: string;

  @IsString()
  challenge: string;

  @IsString()
  type: string;
}
