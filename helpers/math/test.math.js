import {usdCNY} from './math'


test ('check if string turns into array', () => {
    expect (usdCNY (15)).toStrictEqual('101.25 Chinese Yuan')
});