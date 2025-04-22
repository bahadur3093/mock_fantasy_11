import Link from "next/link";
import { Player } from "../../../../../models/Player.model";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link
      href={{ pathname: `/players`, query: { playerId: player.id } }}
      className="border-2 rounded p-2 my-2 flex items-center"
    >
      <div className="flex flex-col">
        <span className="font-bold">
          {player.firstname} {player.lastname}
        </span>
        <span>{player.affiliation || "N/A"}</span>
      </div>
    </Link>
  );
}
