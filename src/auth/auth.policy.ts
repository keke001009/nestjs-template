import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { PrismaService } from 'nestjs-prisma/dist/prisma.service';

export const DbBannedPeople = async (ctx: ExecutionContext, authData: any, moduleRef: ModuleRef) => {
    const prismaService = moduleRef.get(PrismaService, { strict: false });
    const bannedPeople = await prismaService.member.findMany();

    if (bannedPeople.includes(authData.user.name)) {
        throw new ForbiddenException('You have been banned!');
    }
};