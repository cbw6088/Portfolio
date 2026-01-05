"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-xl font-bold text-red-600 mb-2">오류 발생</h1>
        <pre className="text-sm text-gray-800 whitespace-pre-wrap break-words mb-4">
          {error.message}
        </pre>
        {error.digest && (
          <p className="text-xs text-gray-500 mb-4">Digest: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="px-4 py-2 bg-gray-800 text-white rounded font-LilitaOne tracking-wider"
        >
          다시 시도
        </button>
      </div>
    </div>
  );
}
