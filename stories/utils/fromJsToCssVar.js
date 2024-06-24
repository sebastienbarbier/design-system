export default function fromJsToCssVar(jsVar, prefix = '--') {

    let result = [];

    const keys = Object.keys(jsVar);

    keys.forEach(key => {
        if (typeof jsVar[key] === 'object') {
            result = [...result, ...fromJsToCssVar(jsVar[key], prefix + key + '-')]
        } else if (prefix !== '--') { // Skip first layer
            result.push(`${prefix}${key}`);
        }
    });

    return result;
}
