import { User as PrismaUser } from '@prisma/client';
export class User implements PrismaUser {
  email: string;
  id: number;
  name: string | null;
}
