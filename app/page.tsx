import { client } from "@/sanity/lib/client";


async function getData() {
  const fetchdata = await client.fetch(``)
  return fetchdata
}
export default async function Home() {
  const data = await getData();
  console.log(data);
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Sanity Intro</h1>
      </main>
    </>
  );
}
