import { Module } from '@nestjs/common';
import { ComputadorModule } from './computador/computador.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ComputadorModule,
    MongooseModule.forRoot('mongodb://localhost/computador')
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
