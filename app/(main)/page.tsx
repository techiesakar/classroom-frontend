import { ClassGrid } from "@/components/page-components/homepage/class-grid";
import { GridSkeleton } from "@/components/skeleton/grid-skeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="w-full">
      <Suspense fallback={<GridSkeleton />}>
        <ClassGrid url="/class/views" />
      </Suspense>
    </div>
  );
}
