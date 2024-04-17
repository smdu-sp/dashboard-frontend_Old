import { glpi_users } from "@prisma/client";
import { PrismaClient } from "@prisma/client/extension";

const prisma = PrismaClient();

async function chamadosMes(): Promise<glpi_users[]> {
    const data = await prisma.glpi_users.findMany({
      where: {
        is_active: true,
        auths_id: 6,
      },
      include: {
        tickets: {
          where: {
            type: 2,
            ticket: {
              OR: [
                { status: 5 },
                { status: 6 }
              ],
              solvedate: {
                gte: new Date(new Date().getFullYear(), new Date().getMonth()),
                lte: new Date(new Date().getFullYear(), new Date().getMonth(), 31)
              }
            }
          },
        }
      }
    });
    return data.filter((item: any) => item.tickets.length > 0);
}

export { chamadosMes }