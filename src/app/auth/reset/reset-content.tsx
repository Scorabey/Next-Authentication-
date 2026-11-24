import { ResetMenu } from "@/features/auth";
import { notFound } from "next/navigation";

export default async function ResetContent({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  if (!token) notFound()

  return <ResetMenu token={token} />;
}