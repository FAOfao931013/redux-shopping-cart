import * as countNumber from 'reducers/countNumber';
import * as shop from 'reducers/shop';

let reducers = Object.assign(
    countNumber,
    shop
);

export default reducers;