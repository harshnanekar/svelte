export function match(param) {
    if (param >= 0 && param <= 9) {
        return param;
    } else {
        return undefined;
    }
}