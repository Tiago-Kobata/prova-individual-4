import { Injectable } from '@nestjs/common';
import { CreateComputadorDto } from './dto/create-computador.dto';
import { UpdateComputadorDto } from './dto/update-computador.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Computador } from './schema/computador.schema';
import { Model } from 'mongoose';

@Injectable()
export class ComputadorService {

  constructor(@InjectModel(Computador.name) private computadorModel: Model<Computador>) { }


  create(createComputadorDto: CreateComputadorDto) {
    const createdComputador = new this.computadorModel(createComputadorDto);
    return createdComputador.save();
  }

  findAll() {
    return this.computadorModel.find();
  }

  findOne(id: number) {
    return this.computadorModel.findById(id);
  }

  update(id: number, updateComputadorDto: UpdateComputadorDto) {
    const createdComputador = this.computadorModel.findById(updateComputadorDto.nome);
    return createdComputador.updateOne();
  }

  remove(id: number) {
    return this.computadorModel.findById(id).deleteOne();
  }
}
