import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) {}

  postAssetTest() {
    return 'Post request received';
  }

  async findAll(): Promise<Asset[]> {
    return this.assetRepository.find();
  }

  async insertAsset(): Promise<Asset> {
    const newAsset = new Asset();
    newAsset.name = 'Test Asset';
    newAsset.description = 'Test Description';
    newAsset.status = 'active';
    newAsset.sku = '123456';
    newAsset.serial = '123456';
    newAsset.price = 1000;
    newAsset.model = 'Test Model';
    newAsset.category = 'Hardware';
    newAsset.location = 'Test Location';
    newAsset.image = 'Test Image';
    newAsset.assigneeHistory = 'Test Assignee History';
    return this.assetRepository.save(newAsset);
  }
}
