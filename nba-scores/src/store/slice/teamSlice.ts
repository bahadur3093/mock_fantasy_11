import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITeam } from "../../../models/Teams.model";

interface TeamState {
  selectedTeam: ITeam;
}

const initialState: TeamState = {
  selectedTeam: {} as ITeam,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeamDetail(state, { payload }: PayloadAction<ITeam>) {
      state.selectedTeam = payload;
    },
    resetTeamDetails(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setTeamDetail, resetTeamDetails } = teamSlice.actions;
export default teamSlice.reducer;
