import { Controller, Get, Post } from '@nestjs/common';
import { AssetService } from './asset.service';
import { Asset } from './asset.entity';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  async getTest(): Promise<Asset> {
    const asset = await this.assetService.findAll();
    return asset[0];
  }

  @Post()
  async postTest(): Promise<Asset> {
    const asset = await this.assetService.insertAsset();
    return asset;
  }
}
