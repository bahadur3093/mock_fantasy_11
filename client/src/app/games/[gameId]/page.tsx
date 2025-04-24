"use client";

import { useParams } from "next/navigation";

// interface GameDetaildsPageProps {
//   params: {
//     gameId: string;
//   };
// }

export default function GameDetailsPage() {
  const { gameId } = useParams();
  console.log("Game ID:", gameId);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
        Game Details
      </h1>
      <p className="text-lg text-gray-600">Coming soon...</p>
    </div>
  );
}
