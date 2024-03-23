import { Module } from '@nestjs/common';
import { AssetService } from './asset.service';
import { AssetController } from './asset.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset])],
  providers: [AssetService],
  controllers: [AssetController],
})
export class AssetModule {}
