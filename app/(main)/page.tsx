import { ClassGrid } from "@/components/page-components/homepage/class-grid";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="w-full">
      <Suspense fallback={<p>Loading feed...</p>}>
        <ClassGrid url="/class/views" />
      </Suspense>
    </div>
  );
}
