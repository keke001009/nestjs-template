import axios from 'axios'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
  const upsert = (data: any) => {
    return prisma.location.upsert({
      where: { name: data.name },
      update: {},
      create: {
        ...data
      },
    })
  }
  const config = {
    headers: {
      "Referer": "https://map.kakao.com/",
    },
  };
  const { data } = await axios.get('https://search.map.kakao.com/mapsearch/theme.daum?output=json&category=Y&theme_id=c86&cpage=1&rect=504815%2C1111925%2C506455%2C1113262', config);
  console.log(data);
  return await Promise.all(data?.place?.map((item: any) => upsert({
    lng: item.lon,
    lat: item.lat,
    address: item.address,
    name: item.name,
  })))
}