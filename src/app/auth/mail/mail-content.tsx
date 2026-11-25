import { notFound } from "next/navigation";

export default async function MailContent({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token) notFound()

    return <h1>{token}</h1>
}