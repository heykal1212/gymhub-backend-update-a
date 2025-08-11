import { PrismaClient, Role } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const basic = await prisma.membershipTier.create({ data: { name: 'Basic', priceMonth: 800, benefits: ['Gym floor'], tierLevel: 0 } });
  const plus = await prisma.membershipTier.create({ data: { name: 'Plus', priceMonth: 1200, benefits: ['Gym floor','Classes'], tierLevel: 1 } });
  const pro = await prisma.membershipTier.create({ data: { name: 'Pro', priceMonth: 1800, benefits: ['All access','PT discount'], tierLevel: 2 } });
  await prisma.user.create({ data: { name: 'Owner', email: 'dorms.kernel_4y@icloud.com', role: 'admin' as Role } });
  await prisma.user.create({ data: { name: 'Front Desk', email: 'dorms.kernel_4y+staff@icloud.com', role: 'staff' as Role } });
  await prisma.user.create({ data: { name: 'Coach', email: 'dorms.kernel_4y+trainer@icloud.com', role: 'trainer' as Role } });
  await prisma.user.create({ data: { name: 'Demo Member', email: 'dorms.kernel_4y+member@icloud.com', role: 'member' as Role } });
  console.log('Seed complete');
}
main().then(()=>process.exit(0)).catch(e=>{console.error(e);process.exit(1)});