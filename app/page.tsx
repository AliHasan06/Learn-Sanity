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
      <main className="flex min-h-screen flex-col items-center bg-gray-900 text-white justify-between p-24">
        <h1 className="text-3xl font-bold mb-8">Sanity Intro</h1>
        {data.map((val: any, i: number) => {
          return (
            <div
              key={i}
              className="mt-4 p-6 w-full max-w-md bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold">{val.name}</h2>
              <p className="text-gray-300">Age: {val.age}</p>
              <p className="text-gray-400">Type: {val._type}</p>
              <p className="text-gray-500">ID: {val._id}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}
