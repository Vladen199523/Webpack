
import {strIntoArray} from './src/arrays'

import {strIntoArray2} from './src/arrays'

test ('check if string turns into array', () => {
    expect (strIntoArray ('Robin Singh')).toStrictEqual(['Robin', 'Singh'])
});

test ('check if string turns into array', () => {
    expect (strIntoArray2 ("I love arrays they are my favorite")).toStrictEqual(["I", "love", "arrays", "they", "are", "my", "favorite"])
});