const rollDice = (minDiceVal: number, maxDiceVal: number): number => {
    return Math.floor(Math.random() * (maxDiceVal - minDiceVal + 1) + minDiceVal)
}
export const luckRoll = (): number => {
    let rollsSum = 0
    for (let i = 0; i < 3; i++) {
        const rollValue = rollDice(1, 6)
        rollsSum += rollValue
    }
    return rollsSum * 5
}