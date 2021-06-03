export const generateLast7Days = () => {
    const oneDayMls = 1000 * 60 * 60 * 24;
    return Array(7)
        .fill(null)
        .map((_, i) =>
            new Date(Date.now() - i * oneDayMls)
                .toLocaleDateString()
                .split(".")
                .join("/")
        );
};

export const getUniqeCode = () => {
    // prettier-ignore
    const possibles = [
        "A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K",
        "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U",
        "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    ];

    const randomSymbol = () => possibles[Math.floor(Math.random() * possibles.length)];

    return Array(6).fill(null).map(randomSymbol).join('');
};