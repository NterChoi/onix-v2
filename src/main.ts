import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global API prefix
  app.setGlobalPrefix('api/v1');

  // Global Validation Pipe (バリデーションパイプ - 전역 검증)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // DTO에 정의되지 않은 필드 자동 제거
      forbidNonWhitelisted: true, // 정의되지 않은 필드 포함 시 400 에러
      transform: true,            // 요청 데이터를 DTO 타입으로 자동 변환
    }),
  );

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap();
