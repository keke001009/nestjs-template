import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService.name);

    constructor() {
        super()
        this.$use(async (params, next) => {
            const before = Date.now()
            
            const result = await next(params)
            
            const after = Date.now()
            
            this.logger.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
            
            return result
        })
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}