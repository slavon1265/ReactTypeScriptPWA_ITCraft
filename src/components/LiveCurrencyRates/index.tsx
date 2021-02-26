import React from 'react';
import liveRatesIDs from '../../db/liveRatesIDs.json'
import { ILiveCurrencyPropsTypes, ILiveIdsDb} from "../../types/components/liveCurrencyTypes";

const LiveCurrencyRates  = ({activeCurrencies, activeRate}: ILiveCurrencyPropsTypes) => {
    let liveDb: ILiveIdsDb = liveRatesIDs;

    const getPairsArr = (activeCurrencies: Array<string>) => {
            const filteredArr = activeCurrencies.filter(f => f !== activeRate);
            return filteredArr.map(c => `${activeRate}/${c}`);

    }

    const getPairsStr = (activeCurrencies: Array<string>) => {
        const pairsArr = getPairsArr(activeCurrencies);

        const res = pairsArr.map(c => {
            const [active, pass] = c.split('/');
            try {
                return liveDb[active][pass];
            } catch {
                return ''
            }
        })
        return res.join(',');
    }

    const getFrameHeight = () => {
        const pairsArr = getPairsArr(activeCurrencies)
        switch (pairsArr.length) {
            case 2:
                return '212px'
            case 3:
                return '270px'
            case 4:
                return '328px'
            case 5:
                return '386px'
            case 6:
                return '444px'
            case 7:
                return '502px'
            case 8:
                return '560px'
            case 9:
                return '618px'
            default:
                return '676px'
        }
    }

    const relatePairsIDs = getPairsStr(activeCurrencies)
    const frameHeight = getFrameHeight()



    return (
        <div>
            <iframe
                src={`https://www.widgets.investing.com/live-currency-cross-rates?theme=darkTheme&roundedCorners=true&cols=bid,ask,last,changePerc&pairs=${relatePairsIDs}`}
                width="100%" height={frameHeight} frameBorder="0" allowTransparency={true} marginWidth={0} marginHeight={0} title={"LiveCurrencyRates"}>
            </iframe>
        </div>
    );
};

export default LiveCurrencyRates;