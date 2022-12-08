import { createSelector } from 'reselect';

const selectPortFolio = (state) => state.portfolio;

const portFolioSelector = createSelector(
  selectPortFolio,
  (statePortFolio) => statePortFolio
);

export default portFolioSelector;
