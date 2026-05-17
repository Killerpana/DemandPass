// src/app/artists/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findArtist, ARTISTS } from "@/lib/artists-data";
import { ArtistDetail } from "@/components/marketing/ArtistDetail";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = findArtist(slug);
  if (!a) return { title: "Artista no encontrado" };
  return {
    title: a.name,
    description: a.bio,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = findArtist(slug);
  if (!artist) notFound();
  return <ArtistDetail artist={artist} />;
}

export function generateStaticParams() {
  return ARTISTS.map((a) => ({ slug: a.slug }));
}
