import { TeamStatisticsTitles } from "../../../../../constants/TeamStats.constant";
import { ITeamStatistics } from "../../../../../models/Teams.model";

interface TeamStatsCardProps {
  teamName: string;
  stats: ITeamStatistics;
  year: string;
}

export default function TeamStatsCard({ teamName, stats, year }: TeamStatsCardProps) {
    if (!stats) {
        return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-gray-800 text-white text-center py-4">
            <h2 className="text-xl font-bold">{teamName} - Team Statistics</h2>
            </div>
            <div className="p-4 text-center text-gray-500">
            <p>No statistics available for the selected year.</p>
            </div>
        </div>
        );
    }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-800 text-white text-center py-4">
        <h2 className="text-xl font-bold">{teamName} - Team Statistics ({year || 'N/A'})</h2>
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-5 gap-2 p-2">
          {Object.entries(stats).map(([key, value]) => (
            <div
              key={key}
              className="flex flex-col items-center bg-gray-100 p-2 rounded-lg shadow-sm border border-gray-300 text-center"
            >
              <span className="text-sm font-medium text-gray-600">
                {TeamStatisticsTitles[key as keyof ITeamStatistics] || key}
              </span>
              <span className="text-xl font-semibold text-gray-800 mt-2">
                {value}
              </span>
              <div className="w-full h-0.5 mt-3 bg-gray-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
