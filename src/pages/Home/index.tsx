import { Suspense } from "react";

import CharacterList from "./components/CharacterList";
import Loader from "@/components/Loader";
import APIErrorBoundary from "@/components/ErrorBoundary/APIErrorBoundary";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Home() {
  return (
    <ErrorBoundary>
      <APIErrorBoundary>
        <Suspense fallback={<Loader />}>
          <CharacterList />
        </Suspense>
      </APIErrorBoundary>
    </ErrorBoundary>
  );
}
