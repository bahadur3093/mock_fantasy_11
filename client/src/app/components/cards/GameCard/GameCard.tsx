import { GameActiveStatus } from "../../../../../constants/Game.constant";
import { IGame } from "../../../../../models/Game.model";
import DateTime from "../../common/Date/Date";
import LineSeperator from "../../common/Seperator/Seperator";
import GameScores from "../../game/GameScores/GameScores";

interface GameCardProps {
  game: IGame;
  showScorecard?: boolean;
}

export default function GameCard({ game, showScorecard = false }: GameCardProps) {
  const gameStatus =
    GameActiveStatus[game.status.long as keyof typeof GameActiveStatus];
  return (
    <div className="border border-gray-100 bg-white text-black rounded-lg shadow-lg overflow-hidden relative">
      <div className="border border-gray-100 p-4 font-bold flex justify-between items-center">
        <div className="flex items-center">
          <span
            className={`inline-block w-3 h-3 rounded-full mr-2 ${
              gameStatus === GameActiveStatus.Scheduled
                ? "bg-yellow-500"
                : gameStatus === GameActiveStatus.InProgress
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          ></span>
          <span className="text-sm font-medium text-gray-700">
            {gameStatus}
          </span>
        </div>
        <div className="ml-4 text-sm text-gray-600">
          <DateTime date={game.date.start} />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div
            className="w-full h-30 flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('${game.teams.home.logo}')`,
            }}
          ></div>
          <div className="mx-4 text-xl font-bold">VS</div>
          <div
            className="w-full h-30 flex flex-col justify-center items-center bg-contain bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('${game.teams.visitors.logo}')`,
            }}
          ></div>
        </div>
        <LineSeperator classes="my-6" />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">
            {new Date(game.date.start).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h2>
          <p className="text-gray-600 mb-1">
            {game.teams.home.nickname} vs {game.teams.visitors.nickname}
          </p>
          <p className="text-gray-500">@ {game.arena.name}</p>
        </div>
        {showScorecard && (
          <>
            <LineSeperator classes="my-6" />
            <GameScores scores={game.scores} teams={game.teams} />
          </>
        )}
      </div>
    </div>
  );
}
