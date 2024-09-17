import { Module } from '@nestjs/common';
import { ComputadorService } from './computador.service';
import { ComputadorController } from './computador.controller';
import { Computador, ComputadorSchema } from './schema/computador.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Computador.name, schema: ComputadorSchema }])],
  controllers: [ComputadorController],
  providers: [ComputadorService],
})
export class ComputadorModule { }
