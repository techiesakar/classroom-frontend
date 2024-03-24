import { RoomGrid } from "@/components/page-components/homepage/room-grid";
import { GridSkeleton } from "@/components/skeleton/grid-skeleton";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom Home"
}

export default async function Home() {
  return (
    <div className="w-full">
      <Suspense fallback={<GridSkeleton />}>
        <RoomGrid url="/room/views" />
      </Suspense>
    </div>
  );
}
