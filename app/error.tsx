"use client";

import React from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
        <div className="p-6 max-w-xl text-center">
          <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
          <p className="mb-4 text-sm text-muted-foreground">{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-pink text-white rounded-md"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
