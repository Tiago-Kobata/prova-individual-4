import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ComputadorDocument = HydratedDocument<Computador>;

@Schema()
export class Computador {
    @Prop()
    nome: string;

    @Prop()
    cor: string;

    @Prop()
    dataFabricacao: number;

}

export const ComputadorSchema = SchemaFactory.createForClass(Computador);
