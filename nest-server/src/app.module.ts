import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './asset/asset.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset/asset.entity';

@Module({
  imports: [
    AssetModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mitchellm',
      password: '',
      database: 'hippo-assets',
      entities: [Asset],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
