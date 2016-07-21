import fetch from 'isomorphic-fetch';
import { push, go } from 'react-router-redux';
import localStore from 'localStore';
import localStorageToImmutable from 'common/localStorageToImmutable';
import Immutable from 'immutable';

const {Map, List} = Immutable;

const CALCULATE = 'CALCULATE';

export function calculate() {
    return {
        type: CALCULATE,
        text: 'calculate cart'
    }
}