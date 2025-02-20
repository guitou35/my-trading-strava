import AuthButton from "./AuthButton.client";

export default async function Home() {

  return (
    <main>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <AuthButton />
    </main>
  );
}