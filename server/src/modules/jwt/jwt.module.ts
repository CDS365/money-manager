// src/jwt/jwt.module.ts
import { Module, Global } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtServiceCustom } from './jwt.service';
import { JwtGuard } from 'src/guards/auth.guard';

@Global()
@Module({
  imports: [
    NestJwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('jwt.secret'),
        signOptions: {
          expiresIn: (config.get<string>('jwt.expiresIn') || '1d') as unknown as number,
        },
      }),
    }),
  ],
  providers: [JwtServiceCustom, JwtGuard],
  exports: [JwtServiceCustom],
})
export class AppJwtModule {}
