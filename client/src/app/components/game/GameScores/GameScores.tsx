import { IGameScores, IGameTeams } from "../../../../../models/Game.model";
import HeadingTitle from "../../common/HeadingTitle/HeadingTitle";

interface GameScoresProps {
  teams: IGameTeams;
  scores: IGameScores;
}

export default function GameScores({ teams, scores }: GameScoresProps) {
  return (
    <>
      <HeadingTitle size="sm" classes="mb-2">
        Socres:
      </HeadingTitle>
      {(scores.home.linescore.length && scores.visitors.linescore.length) ? (
        <div className="border border-gray-200 rounded-lg bg-white shadow-lg">
          <div className="flex justify-between items-center border-b border-gray-400 p-2">
            <span className="text-sm font-medium text-gray-600">Quarter</span>
            <span className="text-sm font-medium text-gray-600">
              {teams.home.nickname}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {teams.visitors.nickname}
            </span>
          </div>
          {Array.from({ length: 4 }, (_, idx) => (
            <div
              className="flex justify-between items-center p-2"
              key={`game-scores-${idx}`}
            >
              <span className="text-gray-700">Q{idx + 1}</span>
              <span className="text-gray-700">
                {scores.home.linescore[idx]}
              </span>
              <span className="text-gray-700">
                {scores.visitors.linescore[idx]}
              </span>
            </div>
          ))}
          <div className="border-t border-gray-400 flex justify-between items-center  p-2">
            <span className="text-gray-700">End</span>
            <span className="text-gray-700">{scores.home.points}</span>
            <span className="text-gray-700">{scores.visitors.points}</span>
          </div>
        </div>
      ) : (
        <div className="flex h-40 flex-col justify-center items-center text-gray-500">
          <p>No results available</p>
        </div>
      )}
    </>
  );
}
