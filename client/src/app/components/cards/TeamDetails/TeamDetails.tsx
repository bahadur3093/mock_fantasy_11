import Image from "next/image";
import { ITeams } from "../../../../../models/Teams.model";

interface TeamDetailsProps {
  teamDetails: ITeams;
}

export default function TeamDetails({ teamDetails }: TeamDetailsProps) {
  return (
    <section className="flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src={teamDetails.logo}
              alt={teamDetails.name}
              width={160}
              height={160}
              className="mb-4"
            />
            <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
              {teamDetails.nickname}
            </h1>
            <p className="text-gray-500 text-lg">{teamDetails.city}</p>
            {teamDetails.allStar && (
              <span className="mt-2 inline-block bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                ⭐ All Star Team
              </span>
            )}
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full text-gray-700">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Team Name
              </h4>
              <p className="text-lg font-medium">{teamDetails.name}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Franchise
              </h4>
              <p className="text-lg font-medium">
                {teamDetails.nbaFranchise ? "Yes" : "No"}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Conference
              </h4>
              <p className="text-lg font-medium">
                {teamDetails.leagues.standard.conference}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Division
              </h4>
              <p className="text-lg font-medium">
                {teamDetails.leagues.standard.division}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Team Code
              </h4>
              <p className="text-lg font-medium">{teamDetails.code}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase">
                Team ID
              </h4>
              <p className="text-lg font-medium">#{teamDetails.id}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
