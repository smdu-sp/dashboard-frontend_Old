import { PrismaClient } from "@prisma/client";

const meses = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

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

async function chamadosAno(): Promise<{ name: string; tickets: number } []> {
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
                gte: new Date(new Date().getFullYear(), 1),
                lte: new Date()
              }
            }
          },
        }
      }
    });
    return data.filter((d) => d.tickets.length > 0).map((d) => ({ name: `${d.firstname} ${d.realname}`, tickets: d.tickets.length }));
}

async function chamadosPorMes(): Promise<{ name: string; tickets: number } []> {
    const prisma = new PrismaClient();
    const data = await prisma.glpi_tickets.findMany({
        where: {
            OR: [
                { status: 5 },
                { status: 6 }
            ],
            solvedate: {
                gte: new Date(new Date().getFullYear() - 1, new Date().getMonth() + 1),
                lte: new Date()
            }
        },
        orderBy: {
            solvedate: 'asc'
        }
    });
    const dados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    data.map((d) => {
        if (d.solvedate){
            const mes = d.solvedate.getMonth();
            dados[mes] = dados[mes] + 1;
        }
    });
    const final = [];
    for (let i = new Date().getMonth() + 1; final.length < 12; i++) {
        let ano = new Date().getFullYear();
        if (i > new Date().getMonth()) {
            ano = ano - 1;
        }
        final.push({ name: `${meses[i]} - ${ano}`, tickets: dados[i]});
        i = i === 11 ? -1 : i;
    }
    return(final);
}

export { chamadosMes, chamadosAno, chamadosPorMes }