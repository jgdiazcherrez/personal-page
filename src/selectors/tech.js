import { createSelector } from 'reselect';

const selectTech = (state) => state.tech;


const techSelector = createSelector(
  selectTech,
  (stateTech) => stateTech
);

export default techSelector;
