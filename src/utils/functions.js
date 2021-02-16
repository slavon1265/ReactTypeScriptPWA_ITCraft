export const  parseNumToStr = (num) => {
    num = typeof num == 'string' ? +num : num;
    const numberFormat = new Intl.NumberFormat();

    return numberFormat.format(+num.toFixed(2));
}

export const parseStrToNum = str => +`${str}`.replace(',', '.').split('').filter(s=> s!='\u00A0').join('')


