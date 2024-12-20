import { PrismaClient } from "@prisma/client";
import { USERS } from "./constants/user";
import { ROLES } from "./constants/roles";
import { LEADS } from "./constants/lead";
import { LEAD_STATUS } from "./constants/leadStatus";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  await prisma.$transaction(async (tx) => {
    await tx.leadStatus.createMany({
      data: LEAD_STATUS
    });
    await tx.role.createMany({
      data: ROLES
    });
    await tx.user.createMany({
      data: await USERS()
    });
    await tx.lead.createMany({
      data: await LEADS()
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
