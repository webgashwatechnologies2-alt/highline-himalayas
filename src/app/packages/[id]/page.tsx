import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPackages, getPackageById } from "@/lib/packages-data";
import PackageDetailClient from "./PackageDetailClient";

export function generateStaticParams() {
  return allPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pkg = getPackageById(id);

  if (!pkg) {
    return {
      title: "Package Not Found | Highline Himalayas",
      description: "The requested tour package could not be found.",
    };
  }

  return {
    title: `${pkg.title} | Highline Himalayas`,
    description: pkg.overview || pkg.subtitle,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = getPackageById(id);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
}
