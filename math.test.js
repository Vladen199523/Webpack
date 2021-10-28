import {usdCNY} from './src/math'


test ('convert money from numbers into string', () => {
    expect (usdCNY (15)).toStrictEqual('101.25 Chinese Yuan')
});



import {usdCNY2} from './src/math'


test ('convert money from numbers into string', () => {
    expect (usdCNY2 (465)).toStrictEqual('3138.75 Chinese Yuan')
});
