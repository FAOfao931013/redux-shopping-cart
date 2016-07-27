//import { createSelector } from 'reselect';
//import Immutable from 'immutable';
//
//const {Map} = Immutable;
//
//const getNumber = state => Map.isMap(state.countNumber) ? state.countNumber.get('number') : 0;
//
//export const getNumberSelector = createSelector(
//    getNumber,
//    (number) => {
//        return {
//            number
//        }
//    }
//);