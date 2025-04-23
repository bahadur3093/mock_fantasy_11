import { Player } from "../../../../../models/Player.model";

interface PlayerDetailsCardProps {
  playerDetails: Player;
}

export default function PlayerDetailsCard({
  playerDetails,
}: PlayerDetailsCardProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        Name: {playerDetails.firstname} {playerDetails.lastname}
      </div>
      <div>Affiliation: {playerDetails.affiliation}</div>
      <div>College: {playerDetails.college}</div>
      <div>Height: {playerDetails.height.meters}</div>
      <div>Weight: {playerDetails.weight.kilograms}</div>
      <div>Position: {playerDetails.leagues?.standard?.pos}</div>
      <div>Date of Birth: {playerDetails.birth?.date}</div>
    </div>
  );
}
