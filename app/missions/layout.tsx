import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Missions | UGA Small Satellite Research Laboratory",
};

export default function MissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
