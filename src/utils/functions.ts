export const  parseNumToStr = (num: number): string => {
    num = typeof num == 'string' ? +num : num;
    const numberFormat = new Intl.NumberFormat();
    const numFormatInStr =  numberFormat.format(+num.toFixed(2));
    return numFormatInStr
}

export const parseStrToNum = (str: string): number => {
    const resultNumber = +`${str}`
        .replace(',', '.')
        .split('')
        .filter(s=> s!='\u00A0')
        .join('')
    return resultNumber
}



