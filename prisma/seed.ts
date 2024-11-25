import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const sajtok = await prisma.sajt.createMany({
    data: [
      {
        nev: 'Emmentali',
        szarmazasiHely: 'Svájc',
        iz: 'Diós, enyhén édeskés',
        allag: 'Félkemény',
        allagIndex: 5,
      },
      {
        nev: 'Mozzarella',
        szarmazasiHely: 'Olaszország',
        iz: 'Lágy, tejes',
        allag: 'Puha',
        allagIndex: 2,
      },
      {
        nev: 'Parmezán',
        szarmazasiHely: 'Olaszország',
        iz: 'Intenzív, sós, diós',
        allag: 'Kemény',
        allagIndex: 9,
      },
      {
        nev: 'Camembert',
        szarmazasiHely: 'Franciaország',
        iz: 'Krémes, enyhén földes',
        allag: 'Puha',
        allagIndex: 3,
      },
    ],
  });}
  main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
