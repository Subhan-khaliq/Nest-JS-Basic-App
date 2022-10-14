import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(createProductDto: CreateProductDto) {
    const newProduct = this.productsRepository.create(createProductDto);
    return this.productsRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.productsRepository.update(id, updateProductDto);
    const updatedProduct = await this.productsRepository.findOneBy({ id });
    if (updatedProduct) {
      return updatedProduct;
    }

    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }

  async remove(id: number): Promise<string> {
    const deletedProduct = await this.productsRepository.delete(id);
    if (!deletedProduct.affected) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return `Prodcut deleted with the id:${id}`;
  }
}
