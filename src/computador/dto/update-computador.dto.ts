import { PartialType } from '@nestjs/mapped-types';
import { CreateComputadorDto } from './create-computador.dto';

export class UpdateComputadorDto extends PartialType(CreateComputadorDto) {
    nome: string;
    cor: string;
    dataFabricacao: number;
}
