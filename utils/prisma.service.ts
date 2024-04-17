import { PrismaClient } from "@prisma/client";

async function chamadosMes(): Promise<{ name: string; tickets: number } []> {
    const prisma = new PrismaClient();
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
    return data.filter((d) => d.tickets.length > 0).map((d) => ({ name: `${d.firstname} ${d.realname}`, tickets: d.tickets.length }));
}

export { chamadosMes }