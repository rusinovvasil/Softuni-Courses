function cutAndReverse(text) {

    const middle = text.length / 2;

    const firstPart = text
    .substring(0, middle)
    .split('')
    .reverse()
    .join('');

    const secondPart = text
    .substring(middle)
    .split('')
    .reverse()
    .join('');

    console.log(firstPart);
    console.log(secondPart);

}

// Don't copy the calling of the function in judge, just the code above

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');