const floatInRange = (value:number, min:number, max: number) => {
    if (value > max) {
        return max;
    }

    if (value < min) {
        return min;
    }

    return value;
}

const intInRange = (value:number, min:number, max: number) => {
    if (value > max) {
        return Math.floor(max);
    }

    if (value < min) {
        return Math.floor(min);
    }

    return Math.floor(value);
}

export { floatInRange, intInRange };