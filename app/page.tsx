import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchdata = await client.fetch(`*[_type == 'student' ]`);
  return fetchdata;
}
export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-grey-900 justify-between p-24">
        <h1>Sanity Intro</h1>
        {data.map((val: any, i: number) => {
          return (
            <>
              <div className="mt-4 ">
                <h1>{val.name}</h1>
                <h1>{val.age}</h1>
                <h1>{val._type}</h1>
                <h1>{val._id}</h1>
              </div>
            </>
          );
        })}
      </main>
    </>
  );
}
