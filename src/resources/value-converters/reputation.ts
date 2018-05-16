export class ReputationValueConverter {
    toView(value) {
        if (!value) {
            return value;
        }

        return repLog10(value);
    }
}

// Following code taken from Steemit condenser front-end: https://github.com/steemit/condenser/blob/master/src/app/utils/ParsersAndFormatters.js
function log10(str) {
    const leadingDigits = parseInt(str.substring(0, 4));
    const log = Math.log(leadingDigits) / Math.LN10 + 0.00000001;
    const n = str.length - 1;
    return n + (log - parseInt(log as any));
}

export const repLog10 = rep2 => {
    if (rep2 == null) {
        return rep2;
    }

    let rep = String(rep2);
    const neg = rep.charAt(0) === '-';
    rep = neg ? rep.substring(1) : rep;

    let out = log10(rep);
    if (isNaN(out)) out = 0;
    out = Math.max(out - 9, 0); // @ -9, $0.50 earned is approx magnitude 1
    out = (neg ? -1 : 1) * out;
    out = out * 9 + 25; // 9 points per magnitude. center at 25
    // base-line 0 to darken and < 0 to auto hide (grep rephide)
    out = parseInt(out as any);
    return out;
};
