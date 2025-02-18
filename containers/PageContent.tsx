"use client";
import Header from "./Header";
import routes from "../routes";
import { Suspense, lazy } from "react";
import SuspenseContent from "./SuspenseContent";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Page404 = lazy(() => import("../pages/protected/404"));

function PageContent() {
  const pathname = usePathname(); // Get current route

  // Extract the route after /app
  const routePath = pathname?.startsWith("/app") ? pathname.replace("/app", "") : pathname;

  // Scroll back to top on route change
  const mainContentRef = useRef(null);
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [routePath]);

  // Find the corresponding component based on the modified route path
  const ActiveComponent =
    routes.find((route) => route.path === routePath)?.component || Page404;

    console.log(ActiveComponent)

  return (
    <div className="drawer-content flex flex-col">
      <Header />
      <main
        className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-basse-200"
        ref={mainContentRef}
      >
        <Suspense fallback={<SuspenseContent />}>
          <ActiveComponent />
        </Suspense>
        <div className="h-16"></div>
      </main>
    </div>
  );
}

export default PageContent;
