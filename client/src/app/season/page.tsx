"use client";

import { useState } from "react";
import DropdownSelect from "../components/common/Dropdown/Dropdown";
import HeadingTitle from "../components/common/HeadingTitle/HeadingTitle";
import LineSeperator from "../components/common/Seperator/Seperator";
import SeasonDetails from "../components/cards/SeasonCard/SeasonCard";

export default function SeasonPage() {
  const [selectedYear, setSelectedYear] = useState<string>(
    (new Date().getFullYear() - 1).toString()
  );

  const lastTenYears = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - i
  ).reverse();

  const setSelectedTeamHandler = (option: string) => {
    setSelectedYear(option);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <HeadingTitle size="lg">Season Details (by year):</HeadingTitle>
        <div className="flex items-center gap-2">
          <div>
            <DropdownSelect
              label=""
              options={lastTenYears.map((year) => year.toString())}
              selected={selectedYear}
              onSelect={setSelectedTeamHandler}
            />
          </div>
        </div>
      </div>
      <LineSeperator classes="my-4" />
      <SeasonDetails year={selectedYear} />
    </>
  );
}
