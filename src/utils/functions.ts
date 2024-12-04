export function getModifier(value: number): number {

    const ranges = [
        { min: 0, max: 1, modifier: -5 },
        { min: 2, max: 3, modifier: -4 },
        { min: 4, max: 5, modifier: -3 },
        { min: 6, max: 7, modifier: -2 },
        { min: 8, max: 9, modifier: -1 },
        { min: 10, max: 11, modifier: 0 },
        { min: 12, max: 13, modifier: +1 },
        { min: 14, max: 15, modifier: +2 },
        { min: 16, max: 17, modifier: +3 },
        { min: 18, max: 19, modifier: +4 },
        { min: 20, max: 21, modifier: +5 },
        { min: 22, max: 23, modifier: +6 },
        { min: 24, max: 24, modifier: +7 },
    ];

    for (const range of ranges) {
        if (value >= range.min && value <= range.max) {
            return range.modifier;
        }
    }

    throw new Error("Invalid value"); // Fallback (shouldn't occur)
}

export function displayMod(value: number): string {
    if (value <= 0) {
        return value.toString();
    } else {
        return "+" + value.toString();
    }
}
